import React from "react";
import Link from "next/link";
import MODULES from "../../../constants/modules";
import classes from "./Header.module.scss";
import { useRouter } from "next/router";
import classNames from "classnames";

const Header = () => {
  const router = useRouter();

  return (
    <header className={classes.header}>
      <ul>
        {MODULES.map((module) => {
          const isActive = router.pathname === module.link;
          const className = classNames({
            [classes.activeLink]: isActive,
          });
          return (
            <li className={className} key={module.id}>
              <Link href={module.link}>{module.name}</Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
