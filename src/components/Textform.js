import react, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnClickUpper = () => {
    let textChange = text.toUpperCase();

    setText(textChange);
    props.showAlert("Converted to Upper Case!", "success");
  };

  const handleOnClickLower = () => {
    let textChange = text.toLowerCase();

    setText(textChange);
    props.showAlert("Converted to Lower Case!", "success");
  };
  const handleOnClear = () => {
    let textChange = "";
    console.log(text.split(" ").length, text);

    setText(textChange);
    props.showAlert("Text Cleared!", "success");
  };

  const handleOnCopy = () => {
    let textSelect = document.getElementById("myBox");
    textSelect.select();
    navigator.clipboard.writeText(textSelect.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard", "success");
  };

  const handleOnRemoveSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces Removed", "success");
  };
  return (
    <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#212529" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>

        <button
          disabled={text.length === 0}
          className="btn btn-primary"
          onClick={handleOnClickUpper}
        >
          Convert to Uppercase
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleOnClickLower}
        >
          Convert to Lowercase
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleOnClear}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleOnCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleOnRemoveSpace}
        >
          Remove Extra Space
        </button>
      </div>
      <div className="container">
        <h2 className="my-5">Text Summary</h2>
        <h3>Count</h3>
        <p>
          Text has{" "}
          {
            text.split("/s+/").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} Characters
        </p>
        <p>
          Average Time to read the content{" "}
          {0.008 *
            text.split("/s+/").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes
        </p>
        <h3>Preview</h3>
        <p>
          {text.length == 0 || text === "Enter text here"
            ? "Enter something in the textbox to preview it here"
            : text}
        </p>
      </div>
    </div>
  );
}

export default TextForm;
