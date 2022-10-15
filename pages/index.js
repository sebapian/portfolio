import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sebastian Pian</title>
        <meta name="description" content="Sebastian Pian's portfolio web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
    </div>
  );
}
