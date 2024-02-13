import React from "react";

const History = ({ calls, deleteCall }) => {
  return (
    <>
      {calls.map((call) => {
        const { number, time, stamp } = call;
        return (
          <div key={time} className="history">
            <h3>{number}</h3>
            <p>{time}</p>
            <div className="delete" onClick={() => deleteCall(number, stamp)}>
              delete
            </div>
          </div>
        );
      })}
    </>
  );
};

export default History;
