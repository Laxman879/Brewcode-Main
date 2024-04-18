import Head from "next/head";
import Layout from "@component/components/layouts/layout ";
import Home from "./home";

export default function Index() {
  return (
    <>
      <Layout isHome={true}>
        <Head>
          <title>next.js boilerplate with javascript</title>
        </Head>
        <Home />
      </Layout>
    </>
  );
}
