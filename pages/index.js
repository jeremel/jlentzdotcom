import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Jereme from "../public/jereme-lentz.jpg";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  padding: 0 2rem;
`;

const Main = styled.main`
  padding: 1rem 0;
  display: flex;

  .imageStyle {
    position: relative;

    width: 50%;
    margin: 1rem 0;
    padding: 0;
    z-index: 0;

    img {
      border-radius: 10px;
      /* background: #185418; */
    }
  }

  .services {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    z-index: 1;
  }

  .services h2 {
    font-size: 5.5rem;
    padding: 0 0 2rem 0;
    margin: 0;
    font-weight: 400;
    transition: all 600ms;
  }

  .services h2:hover {
    color: #288d28;
    text-decoration: underline;
    text-underline-offset: -1px;
    text-decoration-thickness: 7%;
    font-weight: 600;
  }
`;

const About = styled.section`
  font-size: 3rem;

  p {
    margin: 2rem 0 1.5rem 0;
    padding: 0 12rem 0 0;
  }

  a {
    color: #288d28;
    transition: color 500ms;
  }

  a:hover {
    color: #185418;
    text-decoration: underline;
  }
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Jereme Lentz</title>
        <meta name="description" content="Jereme Lentz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <motion.div
          whileHover={{ scale: 1.025 }}
          whileTap={{ rotate: 180 }}
          className="imageStyle"
        >
          <Image
            src={Jereme}
            alt="Jereme Lentz - the man himself"
            placeholder="blur"
          />
        </motion.div>

        <div className="services">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.25 }}
            id="services"
          >
            Web Development
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.25 }}
            id="services"
          >
            <a href="https://www.jeremelentzphotography.com/">Photography</a>
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.75, duration: 0.25 }}
            id="services"
          >
            <a href="https://www.jlentzconsulting.com">Consulting</a>
          </motion.h2>
        </div>
      </Main>

      <About>
        <p>
          I am a freelance Web Developer and small business{" "}
          <a href="https://www.jlentzconsulting.com">Consultant</a> based out of
          Egg Harbor City, New Jersey. I also take pictures sometimes which can
          be <a href="https://www.jeremelentzphotography.com">seen here</a>.
        </p>
        <p>
          Reach out to me and follow along on{" "}
          <a href="https://www.instagram.com/jeremel/">Instagram</a>,{" "}
          <a href="https://twitter.com/jereme_l">Twitter</a>, or{" "}
          <a href="https://www.linkedin.com/in/jereme-lentz-03560ab6/">
            LinkedIn
          </a>
          . Or go the old fashioned way and send me an email at{" "}
          <a href="mailto:jerlentz@gmail.com">jerlentz@gmail.com</a>
        </p>
      </About>
    </Container>
  );
}
