import { View, type ViewProps } from 'react-native';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  // Force background color to white, ignoring lightColor and darkColor props
  const backgroundColor = 'white';

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
