import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Tesseract } from "tesseract.ts";
import axios from 'axios'
import Upload from './components/upload'

const App = () => {
  // hook for text change
  const [yourText,setText] = useState("");
  let renderLayout;

  const changeTextValue = (newOcrText) =>{
  	setText(newOcrText);
  }

  const handleClickReset = () =>{
    window.location.reload(false);
  }

  if(yourText == ""){
    renderLayout = 
    <>
      <Upload  changeTextValue={changeTextValue}  />
    </>
  }else if(yourText == "loading"){
    renderLayout = 
    <>
      <div className="lds-dual-ring"></div>
    </>
  }else{
    renderLayout = 
    <>
      <p>{yourText}</p>
      <div className="btnWrapper">
        <button 
          className="btnScan" 
          onClick={handleClickReset}>
          Copy
        </button>
        <button 
          className="btnScan" 
          onClick={handleClickReset}>
          Scan Again
        </button>
      </div>
      
    </>
  }

  return (
  	<div className="container">
  		{renderLayout}
  	</div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));