import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ismail List | Home</title>
        <meta name="keywords" content="ismails" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          fugiat, tempora ea porro officiis magni non repellat, dicta quae natus
          excepturi. Ullam repellendus aut necessitatibus excepturi reiciendis
          eligendi quod dolores.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          fugiat, tempora ea porro officiis magni non repellat, dicta quae natus
          excepturi. Ullam repellendus aut necessitatibus excepturi reiciendis
          eligendi quod dolores.
        </p>
        <Link href="/ismail">
          <a className={styles.btn}>See Ismail Listing</a>
        </Link>
        <br />
      </div>
    </>
  );
}
