import React from "react";
import Image from "next/image";
import Link from "next/link";
import {TextSplitTween} from "../"

function SectionHomepage({ content, link }) {
  console.log(content);
  return (
    <>
      <Link href={link || null}>
        <section>
          <div className="text">
            <div className="title">
              <a href="/">
                <TextSplitTween>
                  <h2
                    className="hover-underline-animation"
                    id={`title${content.id}`}
                  >
                    {content.title}
                  </h2>
                </TextSplitTween>
              </a>
            </div>
          </div>
          <TextSplitTween>
            <h3 className="description" id={`description${content.id}`}>
              {content.description}
            </h3>
          </TextSplitTween>

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
