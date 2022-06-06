import type { GetStaticProps, NextPage } from "next";
import HomePageContent from "../components/HomePageContent";
import Layout from "../components/Layout";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

interface HomeProps {
  metaData: any;
  context: any;
}

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  // Call an external API endpoint to get posts
  // const res = await fetch("https://.../posts");
  // const metaData = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      metaData: {
        title: "Главная страница",
      },
      context,
    },
  };
};

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  const { metaData } = props;
  return (
    <Layout {...metaData}>
      <HomePageContent />
    </Layout>
  );
};

export default Home;
