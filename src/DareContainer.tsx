import React from "react";
import './Dares.css'

interface dareProp {
  dare: string;
  key: number;
}
function DareContainer({ dare, key }: dareProp) {
  return <div className="dare-box" key={key}>{dare}</div>;
}

export default DareContainer;
