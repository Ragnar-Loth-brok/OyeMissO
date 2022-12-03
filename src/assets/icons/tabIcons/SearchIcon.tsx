import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Search = (props: {color: string | null; scale: number | null}) => (
  <Svg
    width={21}
    height={21}
    fill="none"
    style={{transform: [{scale: props.scale || 1}]}}>
    <Path
      d="m20 20-4.486-4.494M18 9.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0v0Z"
      stroke={props.color || '#A7AFB8'}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

export default Search;
