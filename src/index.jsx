import React, { useState } from "react";
import { render } from "react-dom";
import "./style.scss";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>{counter}</div>
      <button onClick={() => setCounter((count) => count + 1)}>
        Click TO add +1
      </button>
      ;
    </>
  );
}

render(<App />, document.getElementById("root"));
