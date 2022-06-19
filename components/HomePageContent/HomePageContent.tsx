import React, { useEffect } from "react";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// @ts-ignore
import Lenis from "@studio-freight/lenis";

import classes from "./HomePageContent.module.scss";

const HomePageContent = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
    });

    console.log(lenis);
    //get scroll value
    lenis.on("scroll", ({ scroll, limit }: any) => {
      console.log({ scroll, limit });
    });

    function raf() {
      lenis.raf();
      ScrollTrigger.update;
      requestAnimationFrame(raf);
    }

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        console.log({ value });
      },
    });

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <div className="container"></div>
    </>
  );
};

export default HomePageContent;
