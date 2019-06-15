import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Colors } from 'app/constants';

interface Props {
  style?: ViewStyle;
  lineColor?: string;
  lineWidth?: number;
}

const SeparatorLine: React.FC<Props> = (props: Props) => (
  <View
    style={[
      props.style,
      {
        backgroundColor: props.lineColor,
        height: props.lineWidth,
      },
    ]}
  />
);

SeparatorLine.defaultProps = {
  style: undefined,
  lineColor: Colors.grey,
  lineWidth: StyleSheet.hairlineWidth,
};

export default SeparatorLine;
