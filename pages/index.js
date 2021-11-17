import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Jereme from '../public/jereme-lentz.jpg'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'



export default function Home() {
  // const servRef = useRef();
  const el = useRef();
  const q = gsap.utils.selector(el);

  useEffect(() => {
    gsap.from(q("#services"), {
      x: -1000,
      opacity: 0,
    });
    gsap.to(q("#services"), {
      scrollTrigger: "#services",
      x: 0,
      stagger: 1.5,
      duration: 1.5
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Jereme Lentz</title>
        <meta name="description" content="Jereme Lentz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Jereme Lentz
        </h1>

        <div className={styles.image}>
          <Image 
            src={Jereme} 
            alt="Jereme Lentz - the man himself"
            placeholder="blur" 
          />
        </div>

        <div className={styles.services} ref={el}>
          <h2 id="services">Web Developer</h2>
          <h2 id="services"><a href="https://www.jeremelentzphotography.com/">Photographer</a></h2>
          <h2 id="services"><a href="https://www.jlentzconsulting.com">Consultant</a></h2>
        </div>
      </main>

      <section className={styles.about}>
        <p>Jereme Lentz is a Web Developer, <a href="https://www.jeremelentzphotography.com/">Photographer</a>, and small business <a href="https://www.jlentzconsulting.com">Consultant</a> based out of Egg Harbor City, New Jersey.</p>
        <p>Reach out to or follow Jereme on <a href="https://www.instagram.com/jeremel/">Instagram</a>, <a href="https://twitter.com/jereme_l">Twitter</a>, or <a href="https://www.linkedin.com/in/jereme-lentz-03560ab6/">LinkedIn</a>. Or go the old fashioned way and send Jereme an email at <a href="mailto:jerlentz@gmail.com">jerlentz@gmail.com</a></p>
      </section>

      <footer className={styles.footer}>
        <h2>&copy; 2021 Jereme Lentz</h2>
      </footer>
    </div>
  )
}
