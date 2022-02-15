import Head from "next/head";
import Image from "next/image";
import Jereme from "../public/jereme-lentz.jpg";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  padding: 0 1rem;
`;

const Main = styled.main`
  padding: 1rem 0;
  display: flex;

  .imageStyle {
    width: 55vw;
    margin: 1rem 0;
    padding: 0;
    /* position: absolute; */
    top: 300px;
    z-index: 0;
  }

  .services {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
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
        <div className="imageStyle">
          <Image
            src={Jereme}
            alt="Jereme Lentz - the man himself"
            placeholder="blur"
          />
        </div>

        <div className="services">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: -20 }}
            transition={{ delay: 1.25, duration: 0.25 }}
            id="services"
          >
            Web Developer
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: -20 }}
            transition={{ delay: 1.75, duration: 0.25 }}
            id="services"
          >
            <a href="https://www.jeremelentzphotography.com/">Photographer</a>
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: -20 }}
            transition={{ delay: 2, duration: 0.25 }}
            id="services"
          >
            <a href="https://www.jlentzconsulting.com">Consultant</a>
          </motion.h2>
        </div>
      </Main>

      <About>
        <p>
          I am a freelance Web Developer,{" "}
          <a href="https://www.jeremelentzphotography.com/">Photographer</a>,
          and small business{" "}
          <a href="https://www.jlentzconsulting.com">Consultant</a> based out of
          Egg Harbor City, New Jersey.
        </p>
        <p>
          Reach out and follow me on{" "}
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
