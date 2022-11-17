import React, { useEffect, useState } from "react";
import {
  TitleIn,
  SubtitleIn,
  ContentIn,
  ImageTween,
  SectionContainer,
} from "../";
import { RichText } from "@graphcms/rich-text-react-renderer";

function About({ data }) {
  const { about, portrait } = data;

  const title = about.title.split(" ");

  return (
    <>
      <SectionContainer>
        <div className="grid-container">
          <div className="title">
            <TitleIn delay={0}>
              {title.map((word, index) => (
                <h1 key={index}>{word}</h1>
              ))}
            </TitleIn>
          </div>
          <div className="image-wrapper img1">
            <ImageTween data={portrait} delay={1} />
          </div>
          <div className="subtitle">
            <SubtitleIn delay={1} className="subtitle">
              <h2>{about.subtitle}</h2>
            </SubtitleIn>
          </div>
          <div className="content">
            <ContentIn delay={2}>
              <RichText content={about.content.raw.children} />
            </ContentIn>
          </div>
          <div className="image-wrapper img2">
            <ImageTween data={about.picture[0]} delay={1} />
          </div>
        </div>
      </SectionContainer>

      <style jsx>{`
        .grid-container {
          display: block;
          height: 100%;
          width: 100%;
        }
        h1,
        h2 {
          overflow: hidden;
        }
        h1 {
          font-size: var(--font-size-xxxxl);
        }
        .title {
          margin: 50px 0;
        }
        .subtitle {
          margin: 30px 0;
        }
        .image-wrapper {
          width: 100%;
        }
        .img1 {
          height: 40vh;
          max-width: 300px;
          margin: 30px 0;
        }
        .img2 {
          margin: 30px auto;
          max-width: 500px;
          height: 40vh;
        }

        @media screen and (min-width: 992px) {
          .grid-container {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-column-gap: 25px;
          }

          .title {
            grid-column: 3 / 13;
            margin: 20px 0 20px;
          }
          .image-wrapper {
            margin: 30px 0;
            max-width: none;
          }
          .img2 {
            grid-column: 3 / 9;
            grid-row: 2 / 3;
            height: 35vh;
          }
          .subtitle {
            grid-column: 3 / 6;
          }
          .content {
            grid-column: 7 / 10;
          }
          .img1 {
            grid-column: 7 / 10;
            grid-row: 4 / 5;
          }
        }
      `}</style>
    </>
  );
}

export default About;
