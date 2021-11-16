import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Jereme from '/jereme-lentz.jpg'

export default function Home() {
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

        <div className={styles.services}>
          <h2>Web Developer</h2>
          <h2><a href="https://www.jeremelentzphotography.com/">Photographer</a></h2>
          <h2><a href="https://www.jlentzconsulting.com">Consultant</a></h2>
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
