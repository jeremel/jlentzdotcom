import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Jereme from "../public/jereme-lentz.jpg";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 2rem;
`;

const Main = styled.main`
  padding: 1rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;

  h1 {
    margin: 0;
    padding: 0;
    line-height: 1.15;
    font-size: 14rem;
    font-weight: 400;
    align-self: flex-end;
  }

  .imageStyle {
    width: 55vw;
    margin: 1rem 0;
    padding: 0;
    position: absolute;
    top: 300px;
    z-index: 0;
  }

  .services {
    z-index: 100;
    display: flex;
    flex-direction: column;
  }

  .services h2 {
    font-size: 9rem;
    padding: 2rem 0 0 0;
    margin: 0;
    align-self: flex-end;
    font-weight: 400;
    transition: color 600ms;
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

const Footer = styled.footer`
   {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 1rem 0;
    justify-content: center;
    align-items: center;
  }
`;

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
      stagger: 5,
      duration: 2,
    });
  }, []);

  return (
    <Container>
      <Head>
        <title>Jereme Lentz</title>
        <meta name="description" content="Jereme Lentz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <h1>Jereme Lentz</h1>

        <div className="imageStyle">
          <Image
            src={Jereme}
            alt="Jereme Lentz - the man himself"
            placeholder="blur"
          />
        </div>

        <div className="services" ref={el}>
          <h2 id="services">Web Developer</h2>
          <h2 id="services">
            <a href="https://www.jeremelentzphotography.com/">Photographer</a>
          </h2>
          <h2 id="services">
            <a href="https://www.jlentzconsulting.com">Consultant</a>
          </h2>
        </div>
      </Main>

      <About>
        <p>
          Jereme Lentz is a freelance Web Developer,{" "}
          <a href="https://www.jeremelentzphotography.com/">Photographer</a>,
          and small business{" "}
          <a href="https://www.jlentzconsulting.com">Consultant</a> based out of
          Egg Harbor City, New Jersey.
        </p>
        <p>
          Reach out to or follow Jereme on{" "}
          <a href="https://www.instagram.com/jeremel/">Instagram</a>,{" "}
          <a href="https://twitter.com/jereme_l">Twitter</a>, or{" "}
          <a href="https://www.linkedin.com/in/jereme-lentz-03560ab6/">
            LinkedIn
          </a>
          . Or go the old fashioned way and send Jereme an email at{" "}
          <a href="mailto:jerlentz@gmail.com">jerlentz@gmail.com</a>
        </p>
      </About>

      <Footer>
        <h2>&copy; 2021 Jereme Lentz</h2>
      </Footer>
    </Container>
  );
}
