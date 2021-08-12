import {
    CommonActions,
    NavigationContainerRef,
    StackActions,
  } from '@react-navigation/native';
  
  type NavigationConfig = {
    navigator?: NavigationContainerRef;
  };
  
  const config: NavigationConfig = {};
  
  function setNavitor(nav: NavigationContainerRef | null): void {
    if (nav) config.navigator = nav;
  }
  
  function navigate(routeName: string, params?: object): void {
    if (config.navigator && routeName) {
      const action = CommonActions.navigate({ name: routeName, params });
      config.navigator.dispatch(action);
    }
  }
  
  function replace(routeName: string, params?: object): void {
    if (config.navigator && routeName) {
      const action = StackActions.replace(routeName, params);
      config.navigator.dispatch(action);
    }
  }
  
  function goBack() {
    if (config.navigator) {
      const action = CommonActions.goBack();
      config.navigator?.dispatch(action);
    }
  }
  
  export default { setNavitor, navigate, replace, goBack };