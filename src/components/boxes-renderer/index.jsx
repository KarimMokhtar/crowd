import WordsTextBox from "../words-text-box";
import "./boxes-renderer.css";
export default function BoxesRenderer({ booleanQuery }) {
  return booleanQuery ? (
    <WordsTextBox type="BooleanEAN QUERY" booleanQuery={booleanQuery} />
  ) : (
    <div className="boxes-renderer-container">
      <WordsTextBox type="ANY" booleanQuery={booleanQuery} />
      <WordsTextBox type="AND" booleanQuery={booleanQuery} />
      <WordsTextBox type="NOT" booleanQuery={booleanQuery} />
    </div>
  );
}
