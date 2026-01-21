import React from "react";
import Myslef from "../Myslef/Myslef";
import Brother from "../Brother/Brother";
import Sister from "../Sister/Sister";

const Dad = ({asset}) => {
  return (
    <div className="flex">
      <h3>Dad</h3>
      <Myslef asset={asset}></Myslef>
      <Brother></Brother>
      <Sister></Sister>
    </div>
  );
};

export default Dad;
