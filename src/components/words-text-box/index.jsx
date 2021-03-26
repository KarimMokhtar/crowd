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
      <span className="query-type">{type}</span>
    </div>
  );
};

export default function WordsTextBox({ type, booleanQuery }) {
  return (
    <div className="words-text-container">
      {booleanQuery ? (
        <TrueQueryText type={type} />
      ) : (
        <FalseQueryText type={type} />
      )}
      <textarea></textarea>
      ////////////////////////////// total characters [num]/450
    </div>
  );
}
