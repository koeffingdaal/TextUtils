import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpCase = () => {
    // console.log("Converting to UpperCase" + text);
    console.log("Converting to UpperCase");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoCase = () => {
    // console.log("Converting to UpperCase" + text);
    console.log("Converting to UpperCase");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("Changed on UpperCase");
    setText(event.target.value);
  };

  const handleExtraSpaces = ()=>{
    let text = text.split(/[ ]+/);
    setText(text.join(" "));
  }

  const handleOnClear = (event) => {
    let newText = "";
    setText(newText);
  };

  const handleCopy = ()=>{
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode");


  const toggleStyle = ()=>{

    if (myStyle.color == 'black'){
        setMyStyle({
            color: 'white',
            backgroundColor: 'black'
        })
        setBtnText("Enable Light Mode");
    }
    else{
        setMyStyle({
            color: 'black',
            backgroundColor: 'white'
        })
        setBtnText("Enable Dark Mode");
    }

  }

  //let newText = "";

  const [text, setText] = useState("");
  return (
    <>
      <div>
        <h1 className="mb-3">{props.headerText}</h1>

        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            {props.labelText}
          </label>
          <textarea
            className="form-control"
            onChange={handleOnChange}
            id="myBox"
            rows="12"
            value={text}
            style = {myStyle}
          ></textarea>
        </div>

        <button className="btn btn-secondary mx-2" onClick={handleUpCase}>
          {props.buttonName1}
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleLoCase}>
          {props.buttonName2}
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleOnClear}>
          {props.buttonName3}
        </button>
        <button type="button" className="btn btn-warning mx-2" onClick={toggleStyle}>
            {btnText}
        </button>
        <button type="button" className="btn btn-warning mx-2" onClick={handleCopy}>
            {props.buttonName4}
        </button>
        <button type="button" className="btn btn-warning mx-2" onClick={handleExtraSpaces}>
            {props.buttonName5}
        </button>
      </div>

      <div className="container my-3">
        <h2>Your text Summary</h2>
        <p>
          {text.split(" ").length} Words {text.length} Character
        </p>
        <p>
          Maximum time to Read : {0.008 * text.split(" ").length} minutes to
          read
        </p>
        <p>
          Average time to Read : {0.004 * text.split(" ").length} minutes to
          read
        </p>
        <p>
          Minimum time to Read : {0.0025 * text.split(" ").length} minutes to
          read
        </p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  headerText: PropTypes.string,
  labelText: PropTypes.string,
};
