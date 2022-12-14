import React from 'react'
import {
  SubtitleIn,
  Content,
  ImageTween,
  SectionContainer,
  SectionContact,
  Grid,
  Title,
  DeliveryCardSection,
} from "../";


const Delivery = ({data}) => {
    const {deliveries, deliveryCard} = data

  return (
    <>
      <SectionContainer>
        <Grid>
          <div className="title">
            <Title text={deliveries.title} delay={0.3} />
          </div>
          <div className="image-wrapper">
            <ImageTween data={deliveries.picture} delay={0.3} />
          </div>
          <div className="subtitle">
            <h2>
              <SubtitleIn delay={0.8}>{deliveries.subtitle}</SubtitleIn>
            </h2>
          </div>
          <div className="content">
            <Content delay={1.5} data={deliveries.content.raw.children} />
          </div>
          <section className="delivery-card-section">
            <DeliveryCardSection data={deliveryCard} />
          </section>
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
        .delivery-card-section {
          margin: 10vw 0;
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
          .delivery-card-section {
            grid-column: 2 / 12;
            margin: 5vh 0;
          }
        }
        @media screen and (min-width: 992px) {
          .delivery-card-section {
            grid-column: 3 / 12;
        }
        }
      `}</style>
    </>
  );
}

export default Delivery

