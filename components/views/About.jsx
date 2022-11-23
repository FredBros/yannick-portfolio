import React, { useEffect, useState } from "react";
import {
  TitleIn,
  SubtitleIn,
  ContentIn,
  ImageTween,
  SectionContainer,
  Grid,
  Title,
  Content,
} from "../";
import { RichText } from "@graphcms/rich-text-react-renderer";

function About({ data }) {
  const { about, portrait } = data;

 

  useEffect(() => {

  })

  return (
    <>
      <SectionContainer>
        <Grid>
          <div className="title">
            <Title text={about.title} delay={0.3}></Title>
          </div>
          <div className="image-wrapper img1">
            <ImageTween data={portrait} delay={0.5} />
          </div>
          <div className="subtitle">
            <h2>
              <SubtitleIn delay={0.8}>{about.subtitle}</SubtitleIn>
            </h2>
          </div>
          <div className="content">
            <Content delay={1.5} data={about.content.raw.children}/>
              
          </div>
          <div className="image-wrapper img2">
            <ImageTween data={about.picture} delay={1} />
          </div>
        </Grid>
      </SectionContainer>

      <style jsx>{`
        h2,
        h3 {
          overflow: hidden;
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
