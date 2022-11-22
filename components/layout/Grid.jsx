import React from 'react'

function Grid({ children}) {
  return (
    <div className="grid-layout">
      {children}
      <style jsx>{`
        .grid-layout {
          display: block;
          height: 100%;
          width: 100%;
        }
        @media screen and (min-width: 992px) {
          .grid-layout {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-column-gap: 25px;
            justify-items: start;
          }
        }
      `}</style>
    </div>
  );
}

export default Grid