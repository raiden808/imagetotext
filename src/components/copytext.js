import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";


const CopyText = ({textValue}) =>{

	const handleCopyClick = () =>{
		const el = document.createElement('textarea');
	    el.value = textValue;
	    document.body.appendChild(el);
	    el.select();
	    document.execCommand('copy');
	    document.body.removeChild(el);
	}

	return(
		<button className="btnScan" onClick={handleCopyClick} >Copy</button>
	)
}

export default CopyText