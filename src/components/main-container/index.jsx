import { useState } from "react";
import CustomSwitch from "../custom-switch";
import BoxesRenderer from "../boxes-renderer";

import Results from "../results";
import { fetchDataAPI } from "../../api/variations";
import './main-container.css'
export default function MainContainer() {
  const [booleanQuery, setBooleanQuery] = useState(false);
  const [variations, setVariations] = useState([]);

  const handleBooleanChange = () => {
    setBooleanQuery((currVal) => !currVal);
  };

  const fetchData = async (arr) => {
    let res = await fetchDataAPI(arr);
    setVariations(JSON.parse(JSON.stringify(res)));
  };

  return (
    <div className="container">
      <div className="header-container">
        <h2>Create New Sub-query</h2>
        <CustomSwitch
          value={booleanQuery}
          handleChange={handleBooleanChange}
        />
      </div>
        <BoxesRenderer fetchData={fetchData} booleanQuery={booleanQuery} />
        <Results results={variations} booleanQuery={booleanQuery}/>
    </div>
  );
}
