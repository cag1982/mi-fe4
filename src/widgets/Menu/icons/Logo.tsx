import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 189 50" {...props}>
      <image width="189" height="50" href={isDark ? '/images/delirium/LogoTextNewDark.png' : '/images/delirium/LogoTextNewWhite.png'}/>
    </Svg>
  )
};

export default Logo;
