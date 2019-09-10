import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Tesseract } from "tesseract.ts";

const App = () => {
  // hook for text change
  const [yourText, setText] = useState("");
  //test
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

  // for test
  // let textHolder = stripText(require('./image/testocr.jpg'));
  // useEffect(() => {
  //   	// Update the document title using the browser API
  //   	//document.title = `You clicked ${count} times`;
  //   	// let textHolder = stripText(require('./image/testocr.jpg'));
  //   	//let textHolder = stripText(require('./image/testocr.jpg'));
  //   	//console.log(textHolder)
  //   	setText(textHolder)
  // 	},[textHolder]);

  return (
    <>
      <h1>Your Text</h1>
      <p>{yourText}</p>
      <input type="file" name="file" onChange={onChangeHandler} />
    </>
  );
};

const onChangeHandler = event => {
  // file object
  // console.log(event.target.files[0])
  //alert(stripText(event.target.files[0].name))

  console.log(event.target.files);
};

// return hook as a subcomponent
//const DisplayScan = (props)

const stripText = image => {
  let resultText = "";
  // OCR process
  Tesseract.recognize(image)
    .progress(progress => {
      //console.log('progress', progress);
    })
    .then(result => {
      //console.log('result', result);
      resultText = result.text;
      //console.log(resultText)
      Tesseract.terminate();
    });
  return resultText;
};

ReactDOM.render(<App />, document.getElementById("root"));
