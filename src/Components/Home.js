import React, { useState } from "react";

const Home = () => {
 
  const [text, setText] = useState("");
  const onChangeHandle = (e) => setText(e.target.value);
  const toUper = () => setText(text.toUpperCase());
  const toLower = () => setText(text.toLowerCase());
  const toCopy = () => navigator.clipboard.writeText(text);
  const toClear = () => setText("");
  function textCount() {return text.split(" ").filter((element) => {return element.length !== 0}).length};
  
  const removeExtraSpace =()=> {
    var newtext = text.split(" ").filter((element) => {return element.length !== 0})
        setText(newtext.join(" "));
  };

  const intoTitleCase = () => {
    var textBuffer = text.split(" ").filter((element) => {return element.length !== 0});
      let newText = textBuffer.map((currentValue) => {
      let newText =
        currentValue[0].toUpperCase() + currentValue.slice(1).toLowerCase();
      return newText;
    });
    setText(newText.join(" "));
  };

  

  return (
    <div className="container">
      <h1>Enter your text to analyze</h1>

      <div className="form">
        <textarea
          className={`form-control {}`}
          name="text"
          id="myText"
          value={text}
          onChange={onChangeHandle}
          rows="8"
          placeholder="enter your text here..."
        >
          {" "}
        </textarea>
      </div>

      <div className="m-3">
        <button type="button" className="btn btn-primary m-1" onClick={toUper}>
          Conver to upercase
        </button>
        <button
          type="button"
          className="btn btn-primary  m-1"
          onClick={toLower}
        >
          Conver to lower case
        </button>
        <button
          type="button"
          className="btn btn-primary  m-1"
          onClick={intoTitleCase}
        >
          Title Case
        </button>
        <button type="button" className="btn btn-primary  m-1" onClick={removeExtraSpace}>
        Remove extra space
        </button>
        <button type="button" className="btn btn-primary  m-1" onClick={toCopy}>
          Copy text
        </button>
        <button
          type="button"
          className="btn btn-primary  m-1"
          onClick={toClear}
        >
          Clear text
        </button>
      </div>
      <div className="container text-start my-2">
        <h2>Your text summary</h2>
        <p className="text-xl-start mx-3">
          {textCount()} words and {text.length} characters
        </p>
        <p className="text-xl-start mx-3">
          {0.008 * textCount()} Minutes required to read
        </p>
      </div>
      <div className="text-start my-3">
        <h2>Preview</h2>
        <pre className="mx-3">{text}</pre>
      </div>
    </div>
  );
};
export default Home;
