import React from 'react'

function SectionContainer({children}) {
  return (
    <div className="section-container">
      {children}
      <style jsx>{`
        .section-container {
          margin-top: 40px;
          padding-bottom: 100px;
          margin-bottom: 50px;
          border-bottom: solid 2px;
        }
        @media screen and (min-width: 992px) {
          .section-container {
            margin-top: 70px;
          }
        }
      `}</style>
    </div>
  );
}

export default SectionContainer