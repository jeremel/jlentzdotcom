import { useEffect, useState } from "react";
import sanityClient from "../../client";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 5rem;
    margin: 1rem 0;
  }

  h2 {
    font-size: 3rem;
    margin: 0 0 2rem;
  }
`;

const BlogPosts = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 500;
    margin: 0;
  }
`;

export default function Blog() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
                title,
                slug,
                mainImage {
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <Container>
      <Header>
        <h1>Jereme Lentz</h1>
        <h2>Blog</h2>
      </Header>
      <BlogPosts>
        {postData &&
          postData.map((post, index) => (
            <Link
              href={"/blog/" + post.slug.current}
              passHref
              key={post.slug.current}
            >
              <a>
                <span key={index}>
                  <h3>{post.title}</h3>
                  <Image
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt}
                    height={400}
                    width={600}
                  />
                </span>
              </a>
            </Link>
          ))}
      </BlogPosts>
    </Container>
  );
}
