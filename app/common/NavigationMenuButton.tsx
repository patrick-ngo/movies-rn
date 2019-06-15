import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';

interface Props {
  style?: ViewStyle;
  handleMenuButtonPress?: () => void;
  buttonImageElement?: React.ReactNode;
}

const NavigationMenuButton: React.FC<Props> = ({
  handleMenuButtonPress,
  buttonImageElement,
  style,
}: Props) => (
  <TouchableOpacity
    style={style}
    activeOpacity={0.8}
    onPress={handleMenuButtonPress}
  >
    {buttonImageElement}
  </TouchableOpacity>
);

export default NavigationMenuButton;
