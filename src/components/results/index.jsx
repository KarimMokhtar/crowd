import ResultRow from "../results-row";
import "./results.css";
const Results = ({ results, booleanQuery }) => {
  return (
    <div className="results-container">
      <p>keyword variations</p>
      {results.length ? (
        results.map((row, i) => {
          return <ResultRow booleanQuery={booleanQuery} key={i} row={row} />;
        })
      ) : (
        <p className="no-results">No results yet</p>
      )}
    </div>
  );
};
export default Results;
