import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Tesseract } from "tesseract.ts";
import axios from 'axios'
import Upload from './components/upload'

const App = () => {
  // hook for text change
  const [yourText,setText] = useState("");

  const changeTextValue = (newOcrText) =>{
  	setText(newOcrText);
  }

  return (
  	<div>
  		<Upload  changeTextValue={changeTextValue}  />
  		<h2>OCR Text</h2>
  		<p>{yourText}</p>
  	</div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));