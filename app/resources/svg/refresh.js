import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const RefreshSvg = props => (
  <Svg
    width={props.width ? props.width : 24}
    height={props.height ? props.height : 24}
    viewBox="0 0 24 24"
  >
    <Path
      id="a"
      fill={props.fillColor ? props.fillColor : ''}
      d="M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8c3.7 0 6.8-2.6 8-6h-2c-1.2 2.3-3.4 4-6 4-3.3 0-6-2.7-6-6s2.7-6 6-6c1.7 0 3.1.7 4 2l-3 3h7V4l-2 2c-1.8-1-3.8-2-6-2z"
    />
  </Svg>
);

RefreshSvg.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fillColor: PropTypes.string,
};

export default RefreshSvg;
