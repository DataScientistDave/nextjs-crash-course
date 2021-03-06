import Head from "next/head";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Nav from "../components/Nav/Nav";
import Default from "../layouts/Default";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Default>
        {/* Head is the meta data of the page */}
        {/* Can add this for all pages */}
        <Head>
          <title>Cat World</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Jumbotron />
      </Default>
    </div>
  );
}
