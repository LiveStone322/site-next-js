import React, { useEffect } from "react";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";

import classes from "./HomePageContent.module.scss";

const HomePageContent = () => {
  useEffect(() => {
    const scroller = document.querySelector("#smooth") as HTMLElement;
    if (!scroller) {
      return;
    }
    const bodyScrollBar = Scrollbar.init(scroller, {
      damping: 0.04,
      alwaysShowTracks: true,
      continuousScrolling: true,
    });

    ScrollTrigger.scrollerProxy("#smooth", {
      scrollTop(value) {
        if (value) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
    });

    bodyScrollBar.addListener(ScrollTrigger.update);

    ScrollTrigger.defaults({ scroller: scroller });

    gsap.to("#test", {
      scrollTrigger: "#test",
      x: 500,
    });
  }, []);

  return (
    <>
      <div id="smooth" className={classes.smooth}>
        <div style={{ marginTop: 1000, marginBottom: 5000 }}>
          HomePageContent
        </div>
        <div id="test" style={{ top: 100, position: "absolute" }}>
          Bottom
        </div>
      </div>
    </>
  );
};

export default HomePageContent;
