import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Home = (props: {color: string | null; scale: number | null}) => (
  <Svg
    width={19}
    height={20}
    fill="none"
    style={{transform: [{scale: props.scale || 1}]}}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.914 19.415a2 2 0 0 1-1.414.586h-14a2 2 0 0 1-2-2V9a1 1 0 0 1 .3-.71l8-8a1 1 0 0 1 1.41 0l8 8a1 1 0 0 1 .29.71v9a2 2 0 0 1-.586 1.414ZM2.5 18.001h14V9.41l-7-7-7 7V18Z"
      fill={props.color || '#0085FF'}
    />
  </Svg>
);

export default Home;
