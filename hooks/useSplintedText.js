  // https://codesandbox.io/s/delicate-star-b10mr?file=/src/App.js:440-465


import React, { useEffect, useState, createRef } from "react";
import PropTypes from "prop-types";

const useSplintedText = (texts) => {
  const [content, setContent] = useState([]); //[inputs, setInputs]
  const [contentRefs, setContentRefs] = useState([]); //[inputRefs, setInputRefs]

  console.log(texts);

  useEffect(() => {
    let contentArr = []; //inputArr
    let refsArr = []; //refsArr

    texts.map((line, index) => {
      // console.log(line);
      let Size = line.Size;
      // console.log(line, Size, index);

      let ref = createRef(null);
      contentArr.push(<h1 ref={ref} key={index}>line.text</h1>);
      console.log("ref :", ref.current);
      refsArr.push(ref);
    });
    setContent(contentArr);
    setContentRefs(refsArr);
    console.log("contentArr", contentArr);
    console.log("refsArr", refsArr);
  }, []);

  return { fullSplitedText: ["q", "w", "e", "r"], content: <h1>QWER</h1> };
};

export default useSplintedText;
