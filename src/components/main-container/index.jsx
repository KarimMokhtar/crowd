import { useState } from "react";
import CustomSwitch from "../custom-switch";
import BoxesRenderer from "../boxes-renderer";

export default function MainContainer() {
  const [booleanQuery, setBooleanQuery] = useState(false);

  const handleBooleaneanChange = () => {
    setBooleanQuery((currVal) => !currVal);
  };

  return (
    <div className="container">
      <div>
        <h2>Create New Sub-query</h2>
        <CustomSwitch value={booleanQuery} handleChange={handleBooleaneanChange} />
        <BoxesRenderer booleanQuery={booleanQuery} />
      </div>
    </div>
  );
}
