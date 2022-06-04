import React, { useMemo } from "react";
import Icon from "../Icon";
import classes from "./Button.module.scss";

interface ButtonProps {
  icon?: JSX.Element | string;
  children: string;
}

const Button = (props: ButtonProps) => {
  const { icon: iconSrc, children } = props;

  const icon = useMemo(() => {
    if (!iconSrc) {
      return null;
    }
    if (typeof iconSrc === "string") {
      return <Icon icon={iconSrc} />;
    }
    return iconSrc;
  }, [iconSrc]);

  return (
    <button className={classes.button}>
      <>
        {icon && <div className={classes.icon}>{icon}</div>}
        <div className={classes.button_content}>{children}</div>
      </>
    </button>
  );
};

export default Button;
