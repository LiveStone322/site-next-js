import Head from "next/head";
import React from "react";
import Header from "../core/Header";
import LayoutProps from "./LayoutProps";

import classes from "./Layout.module.scss";

const Layout = (props: LayoutProps) => {
  const { title, children } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="preload"
          href="/fonts/FiraSans.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Montserrat-ExtraBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Header />
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default Layout;
