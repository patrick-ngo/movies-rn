import React from 'react';
import { Text, TextProperties } from 'react-native';
import {
  regularFont,
  boldFont,
  extraBoldFont,
  semiBoldFont,
  thinFont,
  lightFont,
} from 'app/utils/fontUtil';
import { Colors } from 'app/constants';

const defaultStyling = {
  color: Colors.black,
};

interface Props {
  text?: string;
  fontSize: number;
  textAlign?: string;
  style?: any;
}

interface BaseProps {
  text?: string;
  style?: any;
}

const BaseText: React.FC<BaseProps & TextProperties> = ({
  text,
  style,
  ...otherProps
}: BaseProps) => (
  <Text style={[defaultStyling, style]} {...otherProps}>
    {text}
  </Text>
);

export const RegularText: React.FC<Props> = (props: Props) => {
  const { text, style, fontSize, ...otherProps } = props;
  return (
    <BaseText
      text={text}
      style={[style, regularFont(fontSize)]}
      {...otherProps}
    />
  );
};

export const BoldText: React.FC<Props> = (props: Props) => {
  const { text, style, fontSize, ...otherProps } = props;
  return (
    <BaseText text={text} style={[style, boldFont(fontSize)]} {...otherProps} />
  );
};

export const ExtraBoldText: React.FC<Props> = (props: Props) => {
  const { text, style, fontSize, ...otherProps } = props;
  return (
    <BaseText
      text={text}
      style={[style, extraBoldFont(fontSize)]}
      {...otherProps}
    />
  );
};

export const SemiBoldText: React.FC<Props> = (props: Props) => {
  const { text, style, fontSize, ...otherProps } = props;
  return (
    <BaseText
      text={text}
      style={[style, semiBoldFont(fontSize)]}
      {...otherProps}
    />
  );
};

export const LightText: React.FC<Props> = (props: Props) => {
  const { text, style, fontSize, ...otherProps } = props;
  return (
    <BaseText
      text={text}
      style={[style, lightFont(fontSize)]}
      {...otherProps}
    />
  );
};

export const ThinText: React.FC<Props> = (props: Props) => {
  const { text, style, fontSize, ...otherProps } = props;
  return (
    <BaseText text={text} style={[style, thinFont(fontSize)]} {...otherProps} />
  );
};
