import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button } from "antd";
import { PostPreviewProps, Posts } from "../components";
import { getPosts } from "../services/api";

interface Props {
  data: PostPreviewProps[];
}

const Home = ({ data }: Props) => {
  return (
    <div>
      <Posts data={data} />
    </div>
  );
};

export async function getStaticProps() {
  const data = await getPosts();

  return {
    props: {
      data,
    },
  };
}

export default Home;
