import React from 'react'

function Wrapper({ children }) {
  return (
    <div className="wrapper">
      {children}
      <style jsx>{`
        .wrapper {
          padding: 5px 15px;
          flex: 1 0 auto;
        }
      `}</style>
    </div>
  );
}

export default Wrapper