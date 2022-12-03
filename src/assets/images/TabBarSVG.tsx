import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = (props: {width: number; height: number} | SvgProps) => (
  <Svg width={375} height={144} fill="none" {...props}>
    <G filter="url(#a)">
      <Path
        d="M188 80c15.342 0 28.715-8.426 35.745-20.904C229.438 48.992 238.402 39 250 39h110c8.284 0 15 6.716 15 15v77H0V54c0-8.284 6.716-15 15-15h111c11.598 0 20.562 9.992 26.255 20.096C159.285 71.574 172.658 80 188 80Z"
        fill="#fff"
      />
    </G>
    <Defs></Defs>
  </Svg>
);

export default SvgComponent;
