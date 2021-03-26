import { useState } from "react";
import CustomSwitch from "../custom-switch";
import BoxesRenderer from "../boxes-renderer";
import axios from "axios";

export default function MainContainer() {
  const [booleanQuery, setBooleanQuery] = useState(false);
  const [variations, setVariations] = useState([]);
  const handleBooleaneanChange = () => {
    setBooleanQuery((currVal) => !currVal);
  };
  const fetchDataAPI = (arr) => {
    let resultVariations = new Array();
    arr.forEach(async (word) => {
      if (word.length) {
        const res = await axios.get(`http://localhost:5000/words?word=${word}`);
        resultVariations.push({ ...res.data[0] });
      }
    });
    setVariations(resultVariations);
  };
  console.log(variations)
  return (
    <div className="container">
      <div>
        <h2>Create New Sub-query</h2>
        <CustomSwitch
          value={booleanQuery}
          handleChange={handleBooleaneanChange}
        />
        <BoxesRenderer
          fetchDataAPI={fetchDataAPI}
          booleanQuery={booleanQuery}
        />
      </div>
    </div>
  );
}
