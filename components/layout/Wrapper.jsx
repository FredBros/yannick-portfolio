import React from 'react'

function Wrapper({ children }) {
  return (
    <div className="wrapper">
      {children}
      <style jsx>{`
        .wrapper {
          margin-top : 50px;
          padding: 5px 15px;
          flex: 1 0 auto;
        }
      `}</style>
    </div>
  );
}

export default Wrapper