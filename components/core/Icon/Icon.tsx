import React, { memo } from "react";

interface IconProps {
  icon: string;
}

const Icon = (props: IconProps) => {
  const { icon } = props;

  return <div className={icon}></div>;
};

export default memo(Icon);
