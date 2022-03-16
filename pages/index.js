import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Jereme from "../public/jereme-lentz.jpg";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  padding: 0 2rem;

  @media (max-width: 1000px) {
    padding: 0 1rem;
  }
`;

const Main = styled.main`
  padding: 1rem 0;
  display: flex;
  width: 100%;
  display: flex;
  justify-content: space-between;

  .imageStyle {
    position: relative;

    max-width: 45%;
    margin: 1rem 0;
    padding: 0;
    z-index: 0;

    img {
      border-radius: 8px;
    }

    @media (max-width: 1000px) {
      margin: 1rem auto;
      max-width: 95%;
    }
  }

  .services {
    max-width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    text-align: right;
    position: relative;
    z-index: 1;

    h2 {
      font-size: 5rem;
      padding: 0;
      margin: 0 0 1rem 0;
      font-weight: 400;
      transition: all 600ms;

      &:hover,
      :focus {
        color: #288d28;
        text-decoration: underline;
        text-underline-offset: -1px;
        text-decoration-thickness: 7%;
        font-weight: 600;
      }

      &:last-child {
        margin-bottom: 0.5rem;
      }
    }

    @media (max-width: 1250px) {
      h2 {
        font-size: 4.5rem;
      }
    }

    @media (max-width: 1125px) {
      h2 {
        font-size: clamp(2rem, 0.9231rem + 4.9231vw, 4rem);
      }
    }

    @media (max-width: 1000px) {
      max-width: 95%;
      align-items: center;
      text-align: center;

      h2 {
        font-weight: 500;
      }
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const About = styled.section`
  font-size: clamp(1.5rem, 0.6923rem + 3.6923vw, 3rem);

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

  @media (max-width: 1000px) {
    max-width: 95%;
    margin: 0 auto;

    p {
      padding: 0;
      margin: 0;

      &:first-child {
        margin-bottom: 1rem;
      }
    }
  }
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Jereme Lentz</title>
        <meta name="description" content="Jereme Lentz" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
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
          <a
            href="https://www.jlentzconsulting.com"
            target="_blank"
            rel="noreferrer"
          >
            Consultant
          </a>{" "}
          based out of{" "}
          <a
            href="https://en.wikipedia.org/wiki/South_Jersey"
            target="_blank"
            rel="noreferrer"
          >
            Southern New Jersey
          </a>
          . I also take pictures sometimes which can be{" "}
          <a
            href="https://www.jeremelentzphotography.com"
            target="_blank"
            rel="noreferrer"
          >
            seen here
          </a>
          .
        </p>
        <p>
          Reach out to me and follow along on{" "}
          <a
            href="https://www.instagram.com/jeremel/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          ,{" "}
          <a
            href="https://twitter.com/jereme_l"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          , or{" "}
          <a
            href="https://www.linkedin.com/in/jereme-lentz-03560ab6/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          . Or go the old fashioned way and send me an email at{" "}
          <a href="mailto:jerlentz@gmail.com">jerlentz@gmail.com</a>
        </p>
      </About>
    </Container>
  );
}
