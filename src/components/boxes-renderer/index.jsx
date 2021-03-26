import WordsTextBox from "../words-text-box";
import "./boxes-renderer.css";
export default function BoxesRenderer({ booleanQuery, fetchDataAPI }) {
  return booleanQuery ? (
    <WordsTextBox
      type="BooleanEAN QUERY"
      fetchDataAPI={fetchDataAPI}
      booleanQuery={booleanQuery}
    />
  ) : (
    <div className="boxes-renderer-container">
      <WordsTextBox
        type="ANY"
        fetchDataAPI={fetchDataAPI}
        booleanQuery={booleanQuery}
      />
      <WordsTextBox
        type="AND"
        fetchDataAPI={fetchDataAPI}
        booleanQuery={booleanQuery}
      />
      <WordsTextBox
        type="NOT"
        fetchDataAPI={fetchDataAPI}
        booleanQuery={booleanQuery}
      />
    </div>
  );
}
