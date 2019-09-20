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

  //for test since hook is broken on extension yet
  //const [viewFile,setView] = useState("");


  //working
  // OCR process
  // Tesseract.recognize(require('./image/testocr.jpg'))
  //  		.progress(progress => {
  //    		console.log('progress', progress);
  //  		}).then(result => {
  //    	console.log('result', result);
  // change the hookstate
  //    	setText(result.text)
  //    	Tesseract.terminate();
  //  	});


  const onChangeHandler = (e) => {

    const fileObject = {
      ...yourFile,
      selectedFile:e.target.files[0]
    }
    setFile(fileObject)

    //for test
    //setView(e.target.files[0])

    //console.log(e.target.files[0])
    console.log(yourFile);
  };

  /*
  * in order for file to work, make sure server js is running on seperate window
  * node server.js
  */
  const onClickHandler = () =>{
    const data = new FormData()

    data.append('file',yourFile.selectedFile)
    axios.post("http://localhost:8000/", data, { 
    // receive two parameter endpoint url ,form data 
    })
    .then(res => { // then print response status
      console.log(res.statusText)
    })
  }

  return (
    <div className="form-group files">
      <h1>Your Text</h1>
      <p>{}</p>
      <input type="file" name="file" onChange={(e) =>onChangeHandler(e)} />
      <button type="button" class="btn btn-success btn-block" onClick={onClickHandler}>Upload</button> 
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
