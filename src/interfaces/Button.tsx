export default interface buttonProps {
  loading: boolean;
  text: string;
  marginTop?: number;
  backgroundColor?: string;
  height?: number;
  width?: number;
  borderWidth?: number;
  borderColor?: string;
  marginBottom?: number;
  borderRadius?: number;
  lineHeight?: number;
  padding?: number;
  paddingLeft?: number;
  fontSize?: number;
  fontFamily?: string;
  color?: string;
  icon?: boolean;
  iconColor?: string;
  iconSize?: number;
  iconName?: string;
  onPress?: () => void;
}
