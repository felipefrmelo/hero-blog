import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button } from "antd";

const Home: NextPage = () => {
  return (
    <div className="App">
      <Button type="primary">Hello World</Button>
    </div>
  );
};

export default Home;
