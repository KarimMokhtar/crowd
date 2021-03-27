import WordsTextBox from "../words-text-box";
import "./boxes-renderer.css";
export default function BoxesRenderer({ booleanQuery, fetchData }) {
  return booleanQuery ? (
    <WordsTextBox
      type="Boolean QUERY"
      fetchData={fetchData}
      booleanQuery={booleanQuery}
    />
  ) : (
    <div className="boxes-renderer-container">
      <WordsTextBox
        type="ANY"
        fetchData={fetchData}
        booleanQuery={booleanQuery}
      />
      <WordsTextBox
        type="AND"
        fetchData={fetchData}
        booleanQuery={booleanQuery}
      />
      <WordsTextBox
        type="NOT"
        fetchData={fetchData}
        booleanQuery={booleanQuery}
      />
    </div>
  );
}
