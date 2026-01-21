import React from "react";
import Dad from "../Dad/Dad";
import Aunt from "../Aunt/Aunt";
import Uncle from "../Uncle/Uncle";

const Grandpa = ({asset}) => {
  return (
    <div>
     <h3> Grandpa</h3>
      <section className="flex">
        <Dad asset={asset}></Dad>
        <Uncle></Uncle>
        <Aunt asset={asset}></Aunt>
      </section>
    </div>
  );
};

export default Grandpa;
