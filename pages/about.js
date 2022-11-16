import React, {useEffect} from 'react'
import {Cursor, FadeInOut} from "../components"
import SplitType from "split-type";


function about() {

  useEffect(() => {
const text = SplitType.create(".to-split", { types: "chars" });
  },[])
  return (
    <>
      <Cursor />
      <FadeInOut>
        <main>
          <h1 className="to-split">about</h1>
        </main>
      </FadeInOut>
      <style jsx>{`
        .to-split {
          display: inline;
          font-kerning: none;
        }
      `}</style>
    </>
  );
}

export default about