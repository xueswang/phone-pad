import React, { useEffect, useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { IoIosKeypad } from "react-icons/io";
import { TbReport } from "react-icons/tb";

import Pad from "./pages/Pad";
import History from "./pages/History";
import Log from "./pages/Log";

function App() {
  const [time, setTime] = useState(new Date());

  const [display, setDisplay] = useState("");
  const [calls, setCalls] = useState([]);

  const [panel, setPanel] = useState(0);

  const [logs, setLogs] = useState([]);

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, [time]);

  const padClick = (number, position) => {
    setDisplay((prev) => prev + number);
    setLogs([...logs, [number, position, new Date().getTime()]]);
  };

  const deleteLeft = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  const saveCall = () => {
    setCalls([
      ...calls,
      {
        number: display,
        time: new Date().toLocaleTimeString(),
        stamp: new Date().getTime(),
      },
    ]);
    setDisplay("");
  };

  const deleteCall = (number, stamp) => {
    setCalls(
      calls.filter((call) => {
        return call.number !== number || call.stamp !== stamp;
      })
    );
  };

  return (
    <div className="container">
      <header>
        <h5>{time.toLocaleString()}</h5>
      </header>

      <main>
        <section
          className="panel"
          style={panel === 0 ? { display: "block" } : { display: "none" }}>
          <h3 className="display">
            {display}
            <FaDeleteLeft onClick={deleteLeft} />
          </h3>
          <Pad padClick={padClick} />
          <div className="call" onClick={saveCall}>
            <div className="btn">
              <IoIosCall />
              <div>call</div>
            </div>
          </div>
        </section>
        <section
          className="panel"
          style={panel === 1 ? { display: "block" } : { display: "none" }}>
          <History calls={calls} deleteCall={deleteCall} />
        </section>
        <section
          className="panel"
          style={panel === -1 ? { display: "block" } : { display: "none" }}>
          <Log logs={logs} />
        </section>
      </main>

      <footer>
        <div className="btn" onClick={() => setPanel(1)}>
          <FaHistory />
          <div>History</div>
        </div>
        <div className="btn" onClick={() => setPanel(0)}>
          <IoIosKeypad />
          <div>Keypad</div>
        </div>
        <div className="btn" onClick={() => setPanel(-1)}>
          <TbReport />
          <div>Log</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
