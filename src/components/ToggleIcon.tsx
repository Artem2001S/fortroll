import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function ToggleIcon(props: SvgProps) {
  return (
    <Svg
      width={29}
      height={30}
      fill="none"
      {...props}
    >
      <Path
        d="M8.954 10.738l5.546 5.724 5.546-5.724L21.75 12.5 14.5 20l-7.25-7.5 1.704-1.762z"
        fill="#fff"
      />
    </Svg>
  )
}

export default ToggleIcon
