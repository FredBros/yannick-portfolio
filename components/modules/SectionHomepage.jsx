import React from 'react'
import Image from "next/image";
import Link from "next/link"

function SectionHomepage({ content, link }) {

  return (
    <>
      <Link href={link || null}>
        <section>
          <div className="text">
          <h2 className="title">
              <a href="" className="hover-underline-animation">
                {content.title}
              </a>
            </h2>
            <h3 className="description">{content.description}</h3>
          </div>
          
            <div className="image-container">
              <div className="image">
                <Image
                  src={content.image.url}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          
        </section>
      </Link>
      <style jsx>{`
        section {
          cursor: pointer;
        }
        .text {
          position: sticky;
          top: 50px;
        }
        .title {
          text-align: center;
          margin: 40px auto;
        }
        .description {
          margin: 40px 0;
        }
        .image-container {
          overflow: hidden;
        }
        .image {
          overflow: hidden;
          position: relative;
          height: 40vh;
          max-width: 500px;
          margin: 0 auto;
        }
        .image {
          transition: transform 0.2s;
        }
        .image:hover {
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
}

export default SectionHomepage;