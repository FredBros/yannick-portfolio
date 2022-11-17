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
        <div className="title">
          <TitleIn delay={0}>
            <h1>{data.title}</h1>
          </TitleIn>
          <div className="image-wrapper img1">
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
        .content{
            margin: 100px 0;
        }
      `}</style>
    </>
  );
}

export default Services;
