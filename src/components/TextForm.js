import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    let newText = event.target.value;
    setText(newText);
  };

  const handleUpperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleTitleClick = () => {
    let newText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
  };

  const handleSentenceClick = () => {
    let sentence = text.toLowerCase().split(". ");
    for (let i = 0; i < sentence.length; i++) {
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    let newText = sentence.join(". ");
    setText(newText);
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "#000814" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#000814",
              color: props.mode === "light" ? "#000814" : "white",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpperClick}
        >
          UPPERCASE
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowerClick}
        >
          lowercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleTitleClick}
        >
          Title Case
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleSentenceClick}
        >
          Sentence case
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "#000814" : "white",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Enter your text above to preview it here"}
        </p>
      </div>
    </>
  );
}
