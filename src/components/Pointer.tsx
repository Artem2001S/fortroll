import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs} from 'react-native-svg';

function Pointer(props: SvgProps) {
  return (
    <Svg width={91} height={87} fill="none" {...props}>
      <G>
        <Path
          d="M40.304 56c2.31 4 8.083 4 10.392 0l15.156-26.25c2.309-4-.578-9-5.197-9h-30.31c-4.62 0-7.506 5-5.197 9L40.304 56z"
          fill="#fff"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default Pointer;
