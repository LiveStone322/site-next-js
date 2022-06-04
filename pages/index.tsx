import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "../components/core/Button";
import Layout from "../components/Layout";

interface HomeProps {
  metaData: any;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
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
    },
  };
};

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  const { metaData } = props;
  return (
    <Layout {...metaData}>
      <Button>Тест</Button>
    </Layout>
  );
};

export default Home;
