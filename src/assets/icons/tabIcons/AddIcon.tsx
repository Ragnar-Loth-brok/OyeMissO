import * as React from 'react';
import Svg, {Circle, Path, SvgProps} from 'react-native-svg';

const AddPost = (props: SvgProps) => (
  <Svg width={61} height={61} fill="none">
    <Circle cx={30.5} cy={30.5} r={30.5} fill="#0085FF" {...props} />
    <Path
      d="M29.883 22.007 30 22a1 1 0 0 1 .993.883L31 23v7h7a1 1 0 0 1 .993.883L39 31a1 1 0 0 1-.883.993L38 32h-7v7a1 1 0 0 1-.883.993L30 40a1 1 0 0 1-.993-.883L29 39v-7h-7a1 1 0 0 1-.993-.883L21 31a1 1 0 0 1 .883-.993L22 30h7v-7a1 1 0 0 1 .883-.993L30 22l-.117.007Z"
      fill="#fff"
    />
  </Svg>
);

export default AddPost;
