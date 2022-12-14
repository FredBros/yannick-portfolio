import React from 'react'

function Footer() {
  return (
    <>
      <footer>
        <div className="name-role-wrap">
          <p>Yannick Brossard</p>
          <p>skipper</p>
        </div>
        <div className="author-wrap">
          <a href="mailto: fred.b.devweb@gmail.com">
            <p>développé par</p>
            <p>fredBro w/ ❤</p>
          </a>
        </div>
      </footer>
      <style jsx>{`
        footer {
          flex-shrink: 0;
          display: flex;
          justify-content: space-between;
          align-items: start;
          padding: 1vh 1vw;
        }
        .author-wrap {
          font-size: var(--font-size-sm);
        }
      `}</style>
    </>
  );
}

export default Footer