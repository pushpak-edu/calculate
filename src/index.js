import React, { useState } from "react";
import ReactDOM from "react-dom";
import { StrictMode } from 'react';

import "./styles.css";

function App() {

  const [inputValueOne, setInputValueOne] = React.useState("");
  const [inputValueTwo, setInputValueTwo] = React.useState("");
  const [result, setResult] = React.useState("");

  return (
    <div className="App">

      <p className="title">Maths Calculator by (Pushpak - 591)</p>

      <div className="numbers">
        <p className="numberTitle">
          <p className="subTitle">
            1st Number :
          </p>
        </p>
        <input 
        className="buttonStyle" 
        onChange={(e) => setInputValueOne(e.target.value)}
        value={inputValueOne}
        type="text">
        </input>
      </div>

      <div className="numbers">
        <p className="numberTitle">
          <p className="subTitle">
            2nd Number :
          </p>
        </p>
        <input className="buttonStyle" 
        onChange={(e) => setInputValueTwo(e.target.value)}
        value={inputValueTwo}
        type="text">
        </input>
      </div>

      <div className="numbers">
        <button className="buttonStyle" 
        onClick={() => setResult(inputValueOne * inputValueTwo)}
        type="button">Multiplication</button>
        <button className="buttonStyle" 
        onClick={() => setResult(inputValueOne / inputValueTwo)}
        type="button">Division</button>
      </div>


      <div className="numbers">
        <p className="numberTitle">
          <p className="subTitle">
            The Result is :
          </p>
        </p>
        <input className="buttonStyle"
         value={result} type="text">
        </input>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
<StrictMode>
  <App />
</StrictMode>, rootElement);
