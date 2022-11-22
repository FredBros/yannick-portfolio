import React from 'react'
import {
  TitleIn,
  SubtitleIn,
  ContentIn,
  ImageTween,
  SectionContainer,
  ContactForm,
} from "../";
import { RichText } from "@graphcms/rich-text-react-renderer";

function Contact({data}) {

  return (
    <>
      <SectionContainer>
        <div className="contact-container">
          <div className="title">
            <TitleIn delay={0}>
              <h1>{data.title}</h1>
            </TitleIn>
          </div>
          <div className="image-wrapper">
            <ImageTween data={data.picture[0]} delay={0.3} />
          </div>
          <div className="subtitle">
            <h2>
              <SubtitleIn delay={0.8}>{data.subtitle}</SubtitleIn>
            </h2>
          </div>
          <div className="content">
            <ContentIn delay={1.5}>
              <RichText content={data.content.raw.children} />
            </ContentIn>
          </div>
        </div>
      </SectionContainer>
      <ContactForm />
      <style jsx>{`
        h1,
        h2,
        h3 {
          overflow: hidden;
        }
        h1 {
          font-size: var(--font-size-xxxl);
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
          .contact-container {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-column-gap: 25px;
            justify-items: start;
          }
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

export default Contact;