import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Tesseract } from "tesseract.ts";
import axios from 'axios'

const App = () => {
  // hook for text change
  const [yourFile,setFile] = useState({
    selectedFile:null,
    loaded:0,
  });

  const [yourText,setText] = useState("")

  const onChangeHandler = (e) => {

    const fileObject = {
      ...yourFile,
      selectedFile:e.target.files[0]
    }
    setFile(fileObject)
  };

  /*
  * in order for file to work, make sure server js is running on seperate window
  * node server.js
  */
  const onClickHandler = () =>{
    const data = new FormData()

    data.append('file',yourFile.selectedFile)
    axios.post("http://localhost:8000/upload", data, { 
    // receive two parameter endpoint url ,form data 
    })
    .then(res => { // then print response status
      console.log(res.statusText)
    })

    Tesseract.recognize(require('./uploads/image.jpg'))
      .progress(progress => {
        console.log('progress', progress);
      }).then(result => {
      console.log('result', result);
      // change the hookstate
      setText(result.text)
      Tesseract.terminate();
    });
  }

  return (
    <div className="form-group files">
      <input type="file" name="file" onChange={(e) =>onChangeHandler(e)} />
      <button type="button" class="btn btn-success btn-block" onClick={onClickHandler}>Upload</button> 
      <h1>Your Text</h1>
      <p>{yourText}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));