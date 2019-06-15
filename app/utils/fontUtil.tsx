import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const scaleFontSize = (fontSize: number) => {
  // All our designs use this as baseline screen size
  // and define font sizes
  const BASELINE_WIDTH = 375;
  const ratio = fontSize / BASELINE_WIDTH;

  // Scale font size for current screen size
  return Math.round(ratio * width);
};

export const regularFont = (fontSize: number) => {
  const scaledSize = scaleFontSize(fontSize);
  return { fontSize: scaledSize };
};

export const semiBoldFont = (fontSize: number) => {
  const scaledSize = scaleFontSize(fontSize);
  return { fontSize: scaledSize };
};

export const boldFont = (fontSize: number) => {
  const scaledSize = scaleFontSize(fontSize);
  return { fontSize: scaledSize };
};

export const extraBoldFont = (fontSize: number) => {
  const scaledSize = scaleFontSize(fontSize);
  return { fontSize: scaledSize };
};

export const thinFont = (fontSize: number) => {
  const scaledSize = scaleFontSize(fontSize);
  return { fontSize: scaledSize };
};

export const lightFont = (fontSize: number) => {
  const scaledSize = scaleFontSize(fontSize);
  return { fontSize: scaledSize };
};
