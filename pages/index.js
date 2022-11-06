import Head from 'next/head';
import NextImage from 'next/image';
import styles from '../styles/Home.module.css';
import Navigation from '../components/Navigation';
import Typewriter from 'typewriter-effect';
import imgSrc from '../public/photos/portrait-photo.png';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sebastian Pian</title>
        <meta name="description" content="Sebastian Pian's portfolio web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />

      <div className={styles.container}>
        <div>
          <p>HELLO, I AM</p>
        </div>
        <div className={styles.typewriter}>
          <Typewriter
            options={{
              strings: ['Web Developer', 'Sebastian Pian'],
              autoStart: true,
              loop: true,
              delay: 150,
            }}
          />
        </div>
        <div>
          <p>
            A Full Stack Developer with passion for tech and<br></br> creating
            valuable / feasable products.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <NextImage
            src={imgSrc}
            placeholder="blur"
            style={{ width: '100%', height: 'auto' }}
            alt="profile photo"
          ></NextImage>

          {/* <img
            src="/photos/portrait-photo.png"
            alt="profile-pic"
            className={styles.image}
          ></img> */}
        </div>
      </div>
    </div>
  );
}
