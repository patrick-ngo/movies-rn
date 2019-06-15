import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Defs, Path, G, Use } from 'react-native-svg';

const CloseSvg = props => (
  <Svg
    width={props.width ? props.width : 18}
    height={props.height ? props.height : 18}
    viewBox="0 0 18 18"
  >
    <Defs>
      <Path
        id="a"
        d="M12.83 12l7.998-7.998a.587.587 0 0 0-.83-.83L12 11.17 4.003 3.172a.587.587 0 0 0-.83.83L11.17 12l-7.997 7.997a.585.585 0 0 0 0 .83c.228.23.6.23.83 0L12 12.83l7.998 7.997a.587.587 0 0 0 .83-.83L12.83 12z"
      />
    </Defs>
    <G fill="none" fill-rule="evenodd" transform="translate(-3 -3)">
      <Use fill="#333132" href="#a" />
    </G>
  </Svg>
);

CloseSvg.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default CloseSvg;
