import { TextareaAutosize } from "@material-ui/core";
import { useRef, useState } from "react";
import { extarctClickedWord, getAdjacentWords } from "../../utils/utils";
import "./words-text.css";
const FalseQueryText = ({ type }) => {
  return (
    <div className="false-query-text">
      <p>
        <span className="query-type">{type}</span> OF THESE KEYWORDS
      </p>
      <p>separate the words with comma</p>
    </div>
  );
};

const TrueQueryText = ({ type }) => {
  return (
    <div className="true-query-text">
      <p>
        icon Disclaimer: special query syntax is not supported yet (i.e
        user_id:id)
      </p>
      <p>
        <span className="query-type">{type}</span>
      </p>
    </div>
  );
};

export default function WordsTextBox({ type, booleanQuery, fetchDataAPI }) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleCick = (e) => {
    const searchBy = booleanQuery ? "OR" : ",";
    const cursorPos = textRef.current.selectionStart;

    // get adjacent words
    const clickedWord = extarctClickedWord(cursorPos, searchBy, text);
    const adjWords = getAdjacentWords(clickedWord, text);
    // request the api here
    fetchDataAPI(adjWords);
  };
  const textRef = useRef();
  return (
    <div className="words-text-container">
      {booleanQuery ? (
        <TrueQueryText type={type} />
      ) : (
        <FalseQueryText type={type} />
      )}
      <TextareaAutosize
        ref={textRef}
        onChange={handleChange}
        onClick={handleCick}
        maxLength={450}
      />
      <p className="total-characters">
        Total characters {text.length}
        <span className="max-char-num"> / 450</span>
      </p>
    </div>
  );
}
