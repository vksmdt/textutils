import React, { useState } from "react";

export default function Text(props) {

  const [text, setText] = useState("Enter text here");

  const handlePick = () => {
    let vikas = text.toUpperCase();
    setText(vikas);
    props.showAlert("Convert In Uppercase", "success");
  };
  const lowercases = () => {
    let vikas = text.toLowerCase();
    setText(vikas);
    props.showAlert("Convert In Lowercase", "success");
  };
  const cleartext = () => {
    let vikas = " ";
    setText(vikas);
    props.showAlert("Clear Text", "success");
  };
  const selectText = () => {
    let input = document.getElementById('exampleFormControlTextarea1');
    input.focus();
    input.select();
    props.showAlert("Select All Text", "success");
  }

  const copytext = () => {
    let textcopy = document.getElementById("exampleFormControlTextarea1");
    textcopy.select();
    navigator.clipboard.writeText(textcopy.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copy Text", "success");

  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }


  const Flettercapitalize = () => {

    let vikas = text.charAt(0).toUpperCase() + text.slice(1);

    setText(vikas)
  }

  const handleonChange = (e) => {
    setText(e.target.value);
  };


  return (
    <>
      <div>
        <div className="" style={{ color: props.mode === "light" ? "black" : "white" }}>
          <h1>{props.vikas} </h1> <br />
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleonChange}
            style={{ backgroundColor: props.mode === "light" ? "white" : "black", color: props.mode === "light" ? "black" : "white" }}
          />
        </div>
        <button disabled={text.length === 0} className="btn btn-dark btn-sm mx-2 my-2" onClick={handlePick}>
          Change To Uppercase
        </button>

        <button disabled={text.length === 0} className="btn btn-dark btn-sm mx-2 my-2" onClick={lowercases}>
          Change To Lowercase
        </button>

        <button disabled={text.length === 0} className="btn btn-dark btn-sm mx-2 my-2" onClick={cleartext}>
          Cleartext
        </button>
        <button disabled={text.length === 0} className="btn btn-dark btn-sm mx-2 my-2" onClick={selectText}>
          Select all
        </button>
        <button disabled={text.length === 0} className="btn btn-dark btn-sm mx-2 my-2" onClick={copytext}>
          Copy Text
        </button>
        <button disabled={text.length === 0} className="btn btn-dark btn-sm mx-2 my-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button disabled={text.length === 0} className="btn btn-dark btn-sm mx-2 my-2" onClick={Flettercapitalize}>
          first
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h1>Your Text Summery</h1>
        <p>

          {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} <b>Word</b> {text.length} <b>Characters</b>
        </p>
        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} <b>Minute read</b></p>
        <h2>Priview</h2>
        <p>
          {text.length > 0 ? text : "Enter Your Text"}
        </p>
      </div>
    </>
  );
}
