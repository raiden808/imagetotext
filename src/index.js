import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Tesseract } from "tesseract.ts";
import axios from 'axios'
import Upload from './components/upload'

const App = () => {
  // hook for text change


  const [yourText,setText] = useState("")

  return (
  
  );
};

ReactDOM.render(<App />, document.getElementById("root"));