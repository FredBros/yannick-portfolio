import React from 'react'
import {
  SubtitleIn,
  Content,
  ImageTween,
  SectionContainer,
  SectionContact,
  Grid,
  Title
} from "../";
import { RichText } from "@graphcms/rich-text-react-renderer";


const Delivery = ({data}) => {
    const {deliveries, deliveryCard} = data
    console.log(deliveries, deliveryCard);

  return (
    <>
      <SectionContainer>
        <Grid>
          <div className="title">
            <Title text={deliveries.title} delay={0.3} />
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

export default Delivery

