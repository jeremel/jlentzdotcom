import { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import Link from "next/link";
import Image from "next/image";

export default function Blog() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type = "post"]{
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
    <main>
      <section>
        <h1>Jereme Lentz | Blog</h1>
        <h2>See blog posts below</h2>
        <div>
          {postData &&
            postData.map((post, index) => (
              <article>
                <Link
                  href={"/post/" + post.slug.current}
                  passHref
                  key={post.slug.current}
                >
                  <span key={index}>
                    <Image
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                    />
                    <span>
                      <h3>{post.title}</h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
