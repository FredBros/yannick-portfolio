import React from "react";
import { Portrait, Name, Role } from "../";

function Hero({ content }) {
  const {picture, description} = content

  return (
    <section className="container-section-hero">
      <h3 className="description">{description}</h3>
      <h1 className="role">
        Skipper <br />
        professionnel
      </h1>
      <div className="portait">
        <Portrait picture={picture}/>
      </div>
      <h1 className="name">
        Yannick
        <br />
        Brossard
      </h1>
      {/* </MediaQuery> */}

      <style jsx>{`
        .container-section-hero {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-column-gap: 10px;
          grid-template-rows: 10% 1fr 35% 1fr;
          align-items: center;
          align-content: start;
          height: calc(100vh - 24px);
          padding-bottom: 20px 0 40px;
        }
        @mediaquery screen & (min-width : 992) {
          .container-section-hero {
            height: calc(100vh - 48px);
          }
        }

        .description {
          grid-column: 1 / 7;
          grid-row: 1;
        }
        .role {
          grid-column: 1 / 7;
          grid-row: 2;
        }
        .portait {
          grid-column: 1 / 5;
          grid-row: 3;
          height: 100%;
        }
        .name {
          grid-column: 1 / 7;
          grid-row: 4;
        }
      `}</style>
    </section>
  );
}

export default Hero;
