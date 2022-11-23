import React, { useState} from 'react'
import {
  SubtitleIn,
  ImageTween,
  SectionContainer,
  SectionContact,
  Grid,
  Content,
  Title
} from "../";

function Experience({data}) {


  return (
    <>
      <SectionContainer>
        <Grid>
          <div className="title">
            <Title text={data.title} delay={0.3}></Title>
          </div>
          <div className="image-wrapper">
            <ImageTween data={data.picture} delay={0.5} />
          </div>
          <div className="subtitle">
            <h2>
              <SubtitleIn delay={0.8}>{data.subtitle}</SubtitleIn>
            </h2>
          </div>
          <div className="content">
            <Content data={data.content.raw.children} delay={1.5}/>
            
          </div>
        </Grid>
      </SectionContainer>
      <SectionContact />
      <style jsx>{`
        h2,
        h3 {
          overflow: hidden;
        }
        .image-wrapper {
          width: 100%;
          max-width: 500px;
          height: 30vh;
          margin: 30px auto;
        }

        .content {
          margin: 100px 0 0;
        }
        @media screen and (min-width: 992px) {
          .title {
            grid-column: 3 / 13;
          }
          .subtitle {
            grid-column: 3 / 13;
          }
          .image-wrapper {
            max-width: none;
            grid-column: 3 / 9;
            margin: 30px 0;
          }
          .content {
            grid-column: 3 / 10;
          }
        }
      `}</style>
    </>
  );
}

export default Experience