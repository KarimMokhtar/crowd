import { TextareaAutosize } from "@material-ui/core";
import { useState } from "react";
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

export default function WordsTextBox({ type, booleanQuery }) {
  const [charNum, setCharNum] = useState(0);
  const handleChange = (e) => {
    setCharNum(e.target.value.length);
  };
  return (
    <div className="words-text-container">
      {booleanQuery ? (
        <TrueQueryText type={type} />
      ) : (
        <FalseQueryText type={type} />
      )}
      <TextareaAutosize onChange={handleChange} maxLength={450} />
      <p className="total-characters">
        Total characters {charNum}
        <span className="max-char-num"> / 450</span>
      </p>
    </div>
  );
}
