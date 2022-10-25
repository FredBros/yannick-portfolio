import React from "react";
import MediaQuery from "react-responsive";

function HeaderRoleLocation() {
  return (
    <MediaQuery minWidth={992}>
      <header>
        <span className="role">
          Skipper
          <br />
          professionnel
        </span>
        <span className="location">
          basé à Lorient,
          <br /> France
        </span>
        <style jsx>{`
          header {
            position: absolute;
            top: 0;
            font-weight: 600;
            width: 100%;
            text-transform: uppercase;
            font-size: 18px;
            padding: 3px 10px;
            background: transparent;
            mix-blend-mode: difference;
            color: var(--background);
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-column-gap: 25px;
            align-items: start;
            margin-right: 10px;
          }
          .role {
            grid-column: 4 / span 2;
          }
          .location {
            grid-column: 6 / span 3;
          }
        `}</style>
      </header>
    </MediaQuery>
  );
}

export default HeaderRoleLocation;
