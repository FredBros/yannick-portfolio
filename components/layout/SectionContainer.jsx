import React from 'react'

function SectionContainer({children}) {
  return (
    <div className="section-container">
      {children}
      <style jsx>{`
        .section-container {
          padding-bottom: 100px;
          margin-bottom: 50px;
          border-bottom: solid 2px;
        }        
      `}</style>
    </div>
  );
}

export default SectionContainer