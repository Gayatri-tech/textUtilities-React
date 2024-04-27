import React, { useState } from "react";

export default function TextForm(props) {
  const { mode } = props;
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    let newText = event.target.value;
    setText(newText);
  };

  const handleCaseConversion = (conversionFunction, alertMessage) => {
    let newText = conversionFunction(text);
    setText(newText);
    props.showAlert(alertMessage, "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Textarea cleared", "success");
  };

  const toUpperCase = (str) => str.toUpperCase();
  const toLowerCase = (str) => str.toLowerCase();
  const toTitleCase = (str) =>
    str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  const toSentenceCase = (str) =>
    str
      .toLowerCase()
      .split(". ")
      .map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1))
      .join(". ");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor:
                mode === "dark"
                  ? "#000814"
                  : mode === "green"
                  ? "#132a13"
                  : mode === "purple"
                  ? "#3c1642"
                  : "white",
              color: mode === "light" ? "#000814" : "white",
            }}
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={() =>
            handleCaseConversion(toUpperCase, "Converted to UPPERCASE")
          }
        >
          UPPERCASE
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={() =>
            handleCaseConversion(toLowerCase, "Converted to lowercase")
          }
        >
          lowercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={() =>
            handleCaseConversion(toTitleCase, "Converted to Title Case")
          }
        >
          Title Case
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={() =>
            handleCaseConversion(toSentenceCase, "Converted to Sentence case")
          }
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
      <div className="container my-3">
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
