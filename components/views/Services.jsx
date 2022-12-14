import React from "react";
import {
  SubtitleIn,
  Content,
  ImageTween,
  SectionContainer,
  Accordion,
  Grid,
  Title
  
} from "../";
import { RichText } from "@graphcms/rich-text-react-renderer";

function Services({ data }) {
  const { servicesCard, services } = data;

  return (
    <>
      <SectionContainer>
        <Grid>
          <div className="title">
            <Title text={services.title} delay={0.3} />
          </div>
          <div className="image-wrapper">
            <ImageTween data={services.picture} delay={0.3} />
          </div>
          <div className="subtitle">
            <h2>
              <SubtitleIn delay={0.8}>{services.subtitle}</SubtitleIn>
            </h2>
          </div>
          <div className="content">
            <Content delay={1.5} data={services.content.raw.children}/>
          </div>
          <div className="accordion-container">
            <Accordion data={servicesCard} />
          </div>
        </Grid>
      </SectionContainer>
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
          margin: 100px 0;
        }

        @media screen and (min-width: 992px) {
          .title {
            grid-column: 3 / 13;
          }
          .image-wrapper {
            max-width: none;
            grid-column: 3 / 9;
            margin: 30px 0;
          }
          .subtitle {
            grid-column: 3 / 10;
          }
          .content {
            grid-column: 3 / 10;
          }
          .accordion-container {
            grid-column: 3 / 12;
          }
        }
      `}</style>
    </>
  );
}

export default Services;
