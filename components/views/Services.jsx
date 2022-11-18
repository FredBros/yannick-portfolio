import React from "react";
import {
  TitleIn,
  SubtitleIn,
  ContentIn,
  ImageTween,
  SectionContainer,
  Accordion,
} from "../";
import { RichText } from "@graphcms/rich-text-react-renderer";

function Services({ data }) {
  const { servicesCard } = data;

  //   console.log("data --> ", data);
  //   console.log("card --> ", servicesCard);

  return (
    <>
      <SectionContainer>
        <div className="services-container">
          <div className="title">
            <TitleIn delay={0}>
              <h1>{data.title}</h1>
            </TitleIn>
          </div>
          <div className="image-wrapper">
            <ImageTween data={data.photo[0]} delay={0.5} />
          </div>
          <div className="content">
            <ContentIn delay={1}>
              <RichText
                content={data.presentation.raw.children}
                renderers={{
                  p: ({ children }) => <h3>{children}</h3>,
                }}
              />
            </ContentIn>
          </div>
          <div className="accordion-container">
            <Accordion data={servicesCard} />
          </div>
        </div>
      </SectionContainer>
      <style jsx>{`
        h1,
        h2,
        h3 {
          overflow: hidden;
        }
        h1 {
          font-size: var(--font-size-xxxxl);
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
          .services-container {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-column-gap: 25px;
            justify-items: start;
          }
          .title {
            grid-column: 3 / 13;
          }
          .image-wrapper {
            grid-column: 3 / 10;
            margin: 30px 0;
          }
          .content {
            grid-column: 3 / 12;
          }
          .accordion-container {
            grid-column: 3 / 13;
          }
        }
      `}</style>
    </>
  );
}

export default Services;
