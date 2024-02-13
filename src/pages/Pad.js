import React from "react";
import pads from "../data";

const Pad = ({ padClick }) => {
  return (
    <div className="keypad">
      {pads.map((pad) => {
        const [alphabet, number, position] = pad;
        return (
          <div key={number} className="key" onClick={()=>padClick(number, position)}>
            <p>{alphabet}</p>
            <h1>{number}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Pad;
