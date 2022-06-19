import React, { SyntheticEvent, useMemo } from "react";
import MODULES from "../../../constants/modules";
import classes from "./Header.module.scss";
import { useRouter } from "next/router";
import classNames from "classnames";
import ListItem from "./components/ListItem";

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
            <ListItem
              className={className}
              isActive={isActive}
              to={module.link}
              key={module.id}
            >
              {module.name}
            </ListItem>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
