import type { AppProps } from "next/app";
import { Layout } from "../components";
require("../styles/variables.less");

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
