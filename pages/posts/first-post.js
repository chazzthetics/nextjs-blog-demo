import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Layout";

function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <div>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to Home</a>
          </Link>
        </h2>
      </div>
    </Layout>
  );
}

export default FirstPost;
