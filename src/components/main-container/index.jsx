import { useState } from "react";
import CustomSwitch from "../custom-switch";

export default function MainContainer() {
  const [boolQuery, setBoolQuery] = useState(false);

  const handleBooleanChange = () => {
    setBoolQuery((currVal) => !currVal);
  };

  return (
    <div className="container">
      <div>
        <h2>Create New Sub-query</h2>
        <CustomSwitch value={boolQuery} handleChange={handleBooleanChange} />
      </div>
    </div>
  );
}
