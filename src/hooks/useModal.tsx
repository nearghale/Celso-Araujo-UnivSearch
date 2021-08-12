import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {BackHandler, Dimensions, Keyboard} from 'react-native';

import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface ModalContextData {
  hide: () => void;
  setComponent: (component: JSX.Element) => void;
  setBackgroundColor: (color: string) => void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export const ModalProvider: FC = ({children}) => {
  const {bottom: safeBottomArea} = useSafeAreaInsets();
  const {height: deviceHeight} = Dimensions.get('window');

  const [Component, setComponentState] = useState(null);

  const [contentHeight, setContentHeight] = useState(0);
  const [childrenHeight, setChildrenHeight] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('');

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => [0, contentHeight], [contentHeight]);

  useEffect(() => {
    if (Component && contentHeight) {
      setTimeout(() => {
        bottomSheetRef.current?.expand();
      }, 300);
    }
  }, [Component, contentHeight]);

  const setComponent = useCallback(value => {
    setComponentState(value);
  }, []);

  const hide = useCallback(() => {
    bottomSheetRef.current?.close();

    setTimeout(() => {
      setComponentState(null);
      setBackgroundColor('');
    }, 100);
  }, []);

  const onAnimateBottomSheet = useCallback(
    (fromIndex: number, toIndex: number) => {
      if (fromIndex === 1 && toIndex < fromIndex) {
        hide();
      }
    },
    [hide],
  );

  const handleOnLayout = useCallback(
    ({
      nativeEvent: {
        layout: {height},
      },
    }) => {
      setChildrenHeight(height);
      setContentHeight(height);
    },
    [],
  );

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        enableTouchThrough={false}
        opacity={0.8}
        style={{
          ...props.style,
          backgroundColor: '#113259',
        }}
      />
    ),
    [],
  );

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardWillShow',
      () => {
        setContentHeight((deviceHeight / 100) * 95);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
    };
  }, [deviceHeight]);

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardWillHide',
      () => {
        setContentHeight(childrenHeight);
      },
    );
    return () => {
      keyboardDidHideListener.remove();
    };
  }, [childrenHeight]);

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardWillHide',
      () => {
        setContentHeight(childrenHeight);
      },
    );
    return () => {
      keyboardDidHideListener.remove();
    };
  }, [childrenHeight]);

  const handleBackButtonClick = useCallback(() => {
    if (Component) {
      hide();
    }

    return true;
  }, [Component, hide]);

  // useEffect(() => {
  //   BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);

  //   return () => {
  //     BackHandler.removeEventListener(
  //       'hardwareBackPress',
  //       handleBackButtonClick,
  //     );
  //   };
  // }, [handleBackButtonClick]);

  const contextValue = useMemo(
    () => ({
      hide,
      setComponent,
      setBackgroundColor,
    }),
    [hide, setComponent],
  );

  return (
    <ModalContext.Provider value={contextValue}>
      {children}

      {Component && (
        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
          onAnimate={onAnimateBottomSheet}
          handleComponent={null}
          backdropComponent={renderBackdrop}
          animateOnMount
          animationDuration={400}
          style={{
            flex: 1,
            overflow: 'hidden',
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
          }}>
          <BottomSheetView
            style={{
              paddingBottom: safeBottomArea + 10,
              backgroundColor: backgroundColor ?? '#fff',
            }}
            onLayout={handleOnLayout}>
            {Component}
          </BottomSheetView>
        </BottomSheet>
      )}
    </ModalContext.Provider>
  );
};

export function useModal(): ModalContextData {
  const context = useContext(ModalContext);

  return context;
}
