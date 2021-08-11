import Head from "next/head";
import styles from "../../styles/Ismail.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      ismails: data,
    },
  };
};


const Ismail = ({ ismails }) => {
  return (
    <>
      <Head>
        <title>Ismail List | Ismail</title>
        <meta name="keywords" content="ismails" />
      </Head>
      <h1>All Ismails</h1>
      {ismails.map((ismail) => (
        <Link href={`/ismail/${ismail.id}`} key={ismail.id}>
          <a className={styles.single}>
            <h3>{ismail.name}</h3>
          </a>
        </Link>
      ))}
    </>
  );
};

export default Ismail;
