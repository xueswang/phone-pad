import React from "react";

const Log = ({ logs }) => {
  return (
    <>
      {logs.map((log) => {
        const [number, position, stamp] = log;
        return (
          <div key={stamp} className="log">
            <p>user clicked {number} at position {position} logged with timestamp {stamp}</p>
          </div>
        );
      })}
    </>
  );
};

export default Log;
