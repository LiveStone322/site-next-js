import Link from "next/link";
import React, { SyntheticEvent, useMemo } from "react";
import gsap from "gsap/dist/gsap";

import classes from "./ListItem.module.scss";

const ListItem = (props: {
  to: string;
  className?: string;
  children: JSX.Element | string;
  isActive: boolean;
}) => {
  const { to, className, children, isActive } = props;
  const timeLine = useMemo(() => gsap.timeline(), []);

  function showUnderLine(event: SyntheticEvent) {
    const hr = (event.target as HTMLElement).closest("li")?.querySelector("hr");
    if (!hr || isActive) {
      return;
    }
    timeLine.clear();
    timeLine.to(hr, {
      width: "100%",
      duration: 1,
      ease: "elastic.out(0.75, 0.3)",
    });
    console.log({ hr });
  }

  function hideUnderline(event: SyntheticEvent) {
    const hr = (event.target as HTMLElement).closest("li")?.querySelector("hr");
    if (!hr || isActive) {
      return;
    }
    timeLine.clear();
    timeLine.to(hr, {
      width: "0",
      duration: 0.3,
      ease: "power3.out",
    });
    console.log({ hr });
  }

  return (
    <li
      className={className}
      onMouseEnter={showUnderLine}
      onMouseLeave={hideUnderline}
    >
      <Link href={to}>{children}</Link>
      <hr className={classes.hr} />
    </li>
  );
};

export default ListItem;
