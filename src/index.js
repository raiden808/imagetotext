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
  }else{
    renderLayout = 
    <>
      <h2>OCR Text</h2>
      <p>{yourText}</p>
      <button onClick={handleClickReset} >Scan Again</button>
    </>
  }

  return (
  	<div>
  		{renderLayout}
  	</div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));