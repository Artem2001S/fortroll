import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function ExpandIcon(props: SvgProps) {
  return (
    <Svg
      width={29}
      height={30}
      fill="none"
      {...props}
    >
      <Path
        d="M8.954 19.262l5.546-5.725 5.546 5.725L21.75 17.5 14.5 10l-7.25 7.5 1.704 1.762z"
        fill="#fff"
      />
    </Svg>
  )
}

export default ExpandIcon
