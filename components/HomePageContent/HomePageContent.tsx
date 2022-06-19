import React, { useEffect } from "react";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// @ts-ignore
import Lenis from "@studio-freight/lenis";

import classes from "./HomePageContent.module.scss";

const HomePageContent = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.055,
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
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 d-flex flex-column">
            <h1>Федулов Антон</h1>
            <p>Разработчик</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex flex-column">
            <h2>Обо мне</h2>
            <div className="row">
              <div className="col-12">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                  molestiae id. Soluta, consequatur! Nemo nobis veniam, hic est
                  tempora laudantium voluptatum sed assumenda illum labore
                  quaerat debitis dolorem consequatur voluptates ad suscipit
                  reprehenderit, odit sunt culpa adipisci, veritatis possimus.
                  Dignissimos totam ad corporis id cupiditate esse expedita sit
                  ipsa, ut magni deleniti, molestiae neque sint inventore
                  aliquam accusantium praesentium. Aliquam qui minima at dolor
                  beatae ipsa inventore. Tempore eius accusantium autem
                  praesentium qui molestias voluptates sed cupiditate,
                  recusandae officiis perferendis sequi sint! Autem unde nostrum
                  veritatis. Nemo ut doloribus vero ratione natus dolorem
                  aliquid voluptas? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Voluptatem corporis eligendi itaque,
                  reprehenderit, expedita ratione dolore quo qui corrupti quasi
                  minima pariatur beatae non libero atque, dolor voluptate
                  officiis necessitatibus! Eius nisi praesentium vero,
                  perspiciatis accusamus laborum architecto cumque facilis
                  distinctio iste aliquam recusandae. Hic doloribus quos minima
                  aspernatur vel ullam ipsam harum soluta. Autem quaerat culpa
                  ipsum velit blanditiis at? Animi molestiae placeat eaque magni
                  iste, dolor natus at ipsa officiis ab quo. Laborum eligendi
                  similique eos ratione accusantium deserunt, nemo cum
                  repellendus vel eaque, vero architecto laboriosam! Voluptas.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                  molestiae id. Soluta, consequatur! Nemo nobis veniam, hic est
                  tempora laudantium voluptatum sed assumenda illum labore
                  quaerat debitis dolorem consequatur voluptates ad suscipit
                  reprehenderit, odit sunt culpa adipisci, veritatis possimus.
                  Dignissimos totam ad corporis id cupiditate esse expedita sit
                  ipsa, ut magni deleniti, molestiae neque sint inventore
                  aliquam accusantium praesentium. Aliquam qui minima at dolor
                  beatae ipsa inventore. Tempore eius accusantium autem
                  praesentium qui molestias voluptates sed cupiditate,
                  recusandae officiis perferendis sequi sint! Autem unde nostrum
                  veritatis. Nemo ut doloribus vero ratione natus dolorem
                  aliquid voluptas? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Voluptatem corporis eligendi itaque,
                  reprehenderit, expedita ratione dolore quo qui corrupti quasi
                  minima pariatur beatae non libero atque, dolor voluptate
                  officiis necessitatibus! Eius nisi praesentium vero,
                  perspiciatis accusamus laborum architecto cumque facilis
                  distinctio iste aliquam recusandae. Hic doloribus quos minima
                  aspernatur vel ullam ipsam harum soluta. Autem quaerat culpa
                  ipsum velit blanditiis at? Animi molestiae placeat eaque magni
                  iste, dolor natus at ipsa officiis ab quo. Laborum eligendi
                  similique eos ratione accusantium deserunt, nemo cum
                  repellendus vel eaque, vero architecto laboriosam! Voluptas.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                  molestiae id. Soluta, consequatur! Nemo nobis veniam, hic est
                  tempora laudantium voluptatum sed assumenda illum labore
                  quaerat debitis dolorem consequatur voluptates ad suscipit
                  reprehenderit, odit sunt culpa adipisci, veritatis possimus.
                  Dignissimos totam ad corporis id cupiditate esse expedita sit
                  ipsa, ut magni deleniti, molestiae neque sint inventore
                  aliquam accusantium praesentium. Aliquam qui minima at dolor
                  beatae ipsa inventore. Tempore eius accusantium autem
                  praesentium qui molestias voluptates sed cupiditate,
                  recusandae officiis perferendis sequi sint! Autem unde nostrum
                  veritatis. Nemo ut doloribus vero ratione natus dolorem
                  aliquid voluptas? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Voluptatem corporis eligendi itaque,
                  reprehenderit, expedita ratione dolore quo qui corrupti quasi
                  minima pariatur beatae non libero atque, dolor voluptate
                  officiis necessitatibus! Eius nisi praesentium vero,
                  perspiciatis accusamus laborum architecto cumque facilis
                  distinctio iste aliquam recusandae. Hic doloribus quos minima
                  aspernatur vel ullam ipsam harum soluta. Autem quaerat culpa
                  ipsum velit blanditiis at? Animi molestiae placeat eaque magni
                  iste, dolor natus at ipsa officiis ab quo. Laborum eligendi
                  similique eos ratione accusantium deserunt, nemo cum
                  repellendus vel eaque, vero architecto laboriosam! Voluptas.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                  molestiae id. Soluta, consequatur! Nemo nobis veniam, hic est
                  tempora laudantium voluptatum sed assumenda illum labore
                  quaerat debitis dolorem consequatur voluptates ad suscipit
                  reprehenderit, odit sunt culpa adipisci, veritatis possimus.
                  Dignissimos totam ad corporis id cupiditate esse expedita sit
                  ipsa, ut magni deleniti, molestiae neque sint inventore
                  aliquam accusantium praesentium. Aliquam qui minima at dolor
                  beatae ipsa inventore. Tempore eius accusantium autem
                  praesentium qui molestias voluptates sed cupiditate,
                  recusandae officiis perferendis sequi sint! Autem unde nostrum
                  veritatis. Nemo ut doloribus vero ratione natus dolorem
                  aliquid voluptas? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Voluptatem corporis eligendi itaque,
                  reprehenderit, expedita ratione dolore quo qui corrupti quasi
                  minima pariatur beatae non libero atque, dolor voluptate
                  officiis necessitatibus! Eius nisi praesentium vero,
                  perspiciatis accusamus laborum architecto cumque facilis
                  distinctio iste aliquam recusandae. Hic doloribus quos minima
                  aspernatur vel ullam ipsam harum soluta. Autem quaerat culpa
                  ipsum velit blanditiis at? Animi molestiae placeat eaque magni
                  iste, dolor natus at ipsa officiis ab quo. Laborum eligendi
                  similique eos ratione accusantium deserunt, nemo cum
                  repellendus vel eaque, vero architecto laboriosam! Voluptas.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                  molestiae id. Soluta, consequatur! Nemo nobis veniam, hic est
                  tempora laudantium voluptatum sed assumenda illum labore
                  quaerat debitis dolorem consequatur voluptates ad suscipit
                  reprehenderit, odit sunt culpa adipisci, veritatis possimus.
                  Dignissimos totam ad corporis id cupiditate esse expedita sit
                  ipsa, ut magni deleniti, molestiae neque sint inventore
                  aliquam accusantium praesentium. Aliquam qui minima at dolor
                  beatae ipsa inventore. Tempore eius accusantium autem
                  praesentium qui molestias voluptates sed cupiditate,
                  recusandae officiis perferendis sequi sint! Autem unde nostrum
                  veritatis. Nemo ut doloribus vero ratione natus dolorem
                  aliquid voluptas? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Voluptatem corporis eligendi itaque,
                  reprehenderit, expedita ratione dolore quo qui corrupti quasi
                  minima pariatur beatae non libero atque, dolor voluptate
                  officiis necessitatibus! Eius nisi praesentium vero,
                  perspiciatis accusamus laborum architecto cumque facilis
                  distinctio iste aliquam recusandae. Hic doloribus quos minima
                  aspernatur vel ullam ipsam harum soluta. Autem quaerat culpa
                  ipsum velit blanditiis at? Animi molestiae placeat eaque magni
                  iste, dolor natus at ipsa officiis ab quo. Laborum eligendi
                  similique eos ratione accusantium deserunt, nemo cum
                  repellendus vel eaque, vero architecto laboriosam! Voluptas.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                  molestiae id. Soluta, consequatur! Nemo nobis veniam, hic est
                  tempora laudantium voluptatum sed assumenda illum labore
                  quaerat debitis dolorem consequatur voluptates ad suscipit
                  reprehenderit, odit sunt culpa adipisci, veritatis possimus.
                  Dignissimos totam ad corporis id cupiditate esse expedita sit
                  ipsa, ut magni deleniti, molestiae neque sint inventore
                  aliquam accusantium praesentium. Aliquam qui minima at dolor
                  beatae ipsa inventore. Tempore eius accusantium autem
                  praesentium qui molestias voluptates sed cupiditate,
                  recusandae officiis perferendis sequi sint! Autem unde nostrum
                  veritatis. Nemo ut doloribus vero ratione natus dolorem
                  aliquid voluptas? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Voluptatem corporis eligendi itaque,
                  reprehenderit, expedita ratione dolore quo qui corrupti quasi
                  minima pariatur beatae non libero atque, dolor voluptate
                  officiis necessitatibus! Eius nisi praesentium vero,
                  perspiciatis accusamus laborum architecto cumque facilis
                  distinctio iste aliquam recusandae. Hic doloribus quos minima
                  aspernatur vel ullam ipsam harum soluta. Autem quaerat culpa
                  ipsum velit blanditiis at? Animi molestiae placeat eaque magni
                  iste, dolor natus at ipsa officiis ab quo. Laborum eligendi
                  similique eos ratione accusantium deserunt, nemo cum
                  repellendus vel eaque, vero architecto laboriosam! Voluptas.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                  molestiae id. Soluta, consequatur! Nemo nobis veniam, hic est
                  tempora laudantium voluptatum sed assumenda illum labore
                  quaerat debitis dolorem consequatur voluptates ad suscipit
                  reprehenderit, odit sunt culpa adipisci, veritatis possimus.
                  Dignissimos totam ad corporis id cupiditate esse expedita sit
                  ipsa, ut magni deleniti, molestiae neque sint inventore
                  aliquam accusantium praesentium. Aliquam qui minima at dolor
                  beatae ipsa inventore. Tempore eius accusantium autem
                  praesentium qui molestias voluptates sed cupiditate,
                  recusandae officiis perferendis sequi sint! Autem unde nostrum
                  veritatis. Nemo ut doloribus vero ratione natus dolorem
                  aliquid voluptas? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Voluptatem corporis eligendi itaque,
                  reprehenderit, expedita ratione dolore quo qui corrupti quasi
                  minima pariatur beatae non libero atque, dolor voluptate
                  officiis necessitatibus! Eius nisi praesentium vero,
                  perspiciatis accusamus laborum architecto cumque facilis
                  distinctio iste aliquam recusandae. Hic doloribus quos minima
                  aspernatur vel ullam ipsam harum soluta. Autem quaerat culpa
                  ipsum velit blanditiis at? Animi molestiae placeat eaque magni
                  iste, dolor natus at ipsa officiis ab quo. Laborum eligendi
                  similique eos ratione accusantium deserunt, nemo cum
                  repellendus vel eaque, vero architecto laboriosam! Voluptas.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                  molestiae id. Soluta, consequatur! Nemo nobis veniam, hic est
                  tempora laudantium voluptatum sed assumenda illum labore
                  quaerat debitis dolorem consequatur voluptates ad suscipit
                  reprehenderit, odit sunt culpa adipisci, veritatis possimus.
                  Dignissimos totam ad corporis id cupiditate esse expedita sit
                  ipsa, ut magni deleniti, molestiae neque sint inventore
                  aliquam accusantium praesentium. Aliquam qui minima at dolor
                  beatae ipsa inventore. Tempore eius accusantium autem
                  praesentium qui molestias voluptates sed cupiditate,
                  recusandae officiis perferendis sequi sint! Autem unde nostrum
                  veritatis. Nemo ut doloribus vero ratione natus dolorem
                  aliquid voluptas? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Voluptatem corporis eligendi itaque,
                  reprehenderit, expedita ratione dolore quo qui corrupti quasi
                  minima pariatur beatae non libero atque, dolor voluptate
                  officiis necessitatibus! Eius nisi praesentium vero,
                  perspiciatis accusamus laborum architecto cumque facilis
                  distinctio iste aliquam recusandae. Hic doloribus quos minima
                  aspernatur vel ullam ipsam harum soluta. Autem quaerat culpa
                  ipsum velit blanditiis at? Animi molestiae placeat eaque magni
                  iste, dolor natus at ipsa officiis ab quo. Laborum eligendi
                  similique eos ratione accusantium deserunt, nemo cum
                  repellendus vel eaque, vero architecto laboriosam! Voluptas.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                  molestiae id. Soluta, consequatur! Nemo nobis veniam, hic est
                  tempora laudantium voluptatum sed assumenda illum labore
                  quaerat debitis dolorem consequatur voluptates ad suscipit
                  reprehenderit, odit sunt culpa adipisci, veritatis possimus.
                  Dignissimos totam ad corporis id cupiditate esse expedita sit
                  ipsa, ut magni deleniti, molestiae neque sint inventore
                  aliquam accusantium praesentium. Aliquam qui minima at dolor
                  beatae ipsa inventore. Tempore eius accusantium autem
                  praesentium qui molestias voluptates sed cupiditate,
                  recusandae officiis perferendis sequi sint! Autem unde nostrum
                  veritatis. Nemo ut doloribus vero ratione natus dolorem
                  aliquid voluptas? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Voluptatem corporis eligendi itaque,
                  reprehenderit, expedita ratione dolore quo qui corrupti quasi
                  minima pariatur beatae non libero atque, dolor voluptate
                  officiis necessitatibus! Eius nisi praesentium vero,
                  perspiciatis accusamus laborum architecto cumque facilis
                  distinctio iste aliquam recusandae. Hic doloribus quos minima
                  aspernatur vel ullam ipsam harum soluta. Autem quaerat culpa
                  ipsum velit blanditiis at? Animi molestiae placeat eaque magni
                  iste, dolor natus at ipsa officiis ab quo. Laborum eligendi
                  similique eos ratione accusantium deserunt, nemo cum
                  repellendus vel eaque, vero architecto laboriosam! Voluptas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex flex-column">
            <h2>Опыт</h2>
            <div className="row">
              <div className="col-12">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                  molestiae id. Soluta, consequatur! Nemo nobis veniam, hic est
                  tempora laudantium voluptatum sed assumenda illum labore
                  quaerat debitis dolorem consequatur voluptates ad suscipit
                  reprehenderit, odit sunt culpa adipisci, veritatis possimus.
                  Dignissimos totam ad corporis id cupiditate esse expedita sit
                  ipsa, ut magni deleniti, molestiae neque sint inventore
                  aliquam accusantium praesentium. Aliquam qui minima at dolor
                  beatae ipsa inventore. Tempore eius accusantium autem
                  praesentium qui molestias voluptates sed cupiditate,
                  recusandae officiis perferendis sequi sint! Autem unde nostrum
                  veritatis. Nemo ut doloribus vero ratione natus dolorem
                  aliquid voluptas?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex flex-column">
            <h2>Еще что-то</h2>
            <div className="row">
              <div className="col-12">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                  molestiae id. Soluta, consequatur! Nemo nobis veniam, hic est
                  tempora laudantium voluptatum sed assumenda illum labore
                  quaerat debitis dolorem consequatur voluptates ad suscipit
                  reprehenderit, odit sunt culpa adipisci, veritatis possimus.
                  Dignissimos totam ad corporis id cupiditate esse expedita sit
                  ipsa, ut magni deleniti, molestiae neque sint inventore
                  aliquam accusantium praesentium. Aliquam qui minima at dolor
                  beatae ipsa inventore. Tempore eius accusantium autem
                  praesentium qui molestias voluptates sed cupiditate,
                  recusandae officiis perferendis sequi sint! Autem unde nostrum
                  veritatis. Nemo ut doloribus vero ratione natus dolorem
                  aliquid voluptas?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageContent;
