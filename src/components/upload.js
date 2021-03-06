import React, { useState, useEffect } from "react";
import { Tesseract } from "tesseract.ts";
import axios from 'axios'

const Upload = ({changeTextValue}) =>{

	const [yourFile,setFile] = useState({
	    selectedFile:null,
	    loaded:0,
	});

	const onChangeHandler = (e) => {
    	const fileObject = {
	      ...yourFile,
	      selectedFile:e.target.files[0]
	    }
	    setFile(fileObject)

	    console.log(e.target.files[0])
	};

	/*
	* in order for file to work, make sure server js is running on seperate window
	* node server.js
	*/
  	const onClickHandler = () =>{

  		if(yourFile.selectedFile == null){
  			alert("Empty");
  			return;
  		}

  		ocrProcess(yourFile.selectedFile);
	}

	const ocrProcess = (selectedFile) =>{
		const data = new FormData()
	    data.append('file',selectedFile)
	    axios.post("http://localhost:8000/upload", data, { 
	    // receive two parameter endpoint url ,form data 
	    })
	    .then(res => { // then print response status
	      console.log(res.statusText)
		    // add delay to reduce unecesarry reload.
		    setTimeout(function () {
		    	Tesseract.recognize(require('../uploads/image.jpg'))
		      	.progress(progress => {
		        	console.log('progress', progress);

		        	changeTextValue("loading");

		      	}).then(result => {
			      console.log('result', result);
			      Tesseract.terminate();

			      changeTextValue(result.text);
		    	});
		    }, 1000);
	    })
	}

  	return (
	  	<div className="form">
	  		<div className="file-upload-wrapper">
	      		<input 
	      			className="fileUpload" 
	      			type="file" 
	      			name="file" 
	      			onChange={(e) =>onChangeHandler(e)} 
	      		/>
	    	</div>
	    	<div className="btnWrapper">
	        <button 
	          className="btnScan upload" 
	          onClick={onClickHandler}>
	          Upload
	        </button>
	      </div>
	    </div>
  	)

}

export default Upload