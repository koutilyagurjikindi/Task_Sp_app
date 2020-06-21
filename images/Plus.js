import * as React from "react"
import Svg, { G, Circle, Path, } from "react-native-svg"

function SvgPlus(props) {
  return (
    <Svg width={48} height={48} viewBox="0 0 48 48" {...props}>
      <G fill="none" fillRule="evenodd">
        <Circle stroke={"#FFF"}   cx={23} cy={23} r={23} fill="#0047CC" />
        <Path
          fill="#A6E8FF"
          fillRule="nonzero"
          stroke="#93EAFF"
          d="M23.983 32a1.072 1.072 0 001.073-1.072v-5.865h5.87c.298 0 .56-.122.76-.313.192-.192.314-.462.314-.759 0-.592-.48-1.072-1.064-1.063h-5.872v-5.865c0-.592-.48-1.072-1.064-1.063-.593 0-1.073.48-1.064 1.063v5.865h-5.872c-.593 0-1.073.48-1.064 1.063 0 .593.48 1.072 1.064 1.064h5.872v5.864A1.036 1.036 0 0023.983 32z"
        />
      </G>
    </Svg>
  )
}

export default SvgPlus