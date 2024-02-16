import React,{useState} from 'react'

export default function Testform(props) {
  const [text,setText]= useState("Enter text here")

  const onChangeHandler=(event)=>{
    setText(event.target.value)
  }

  const toUpper=()=>{
    let newText=text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to Uppercase!", "success");
  }

  const toLower=()=>{
    let newText=text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to Lowercase!", "success");
  }
  const clear=()=>{
    setText("");
    props.showAlert("Text Cleared!", "success");
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(text); 
    props.showAlert("Copied to Clipboard!", "success");
    props.showAlert("Copied to Clipboard!", "success");
}
const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra spaces removed!", "success");
  props.showAlert("Extra spaces removed!", "success");
}
  return (
    <div>
        <div className="mb-3">
          <h1>{props.heading} </h1>
            <textarea className="form-control" value={text} onChange={onChangeHandler} id="exampleFormControlTextarea1" rows="15"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={toUpper}>Convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={toLower}>Convert to lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clear}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy to clipboard</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <div>
          <h2>Your text Summary</h2>
          <p>{text===""?"0":text.split(" ").length} words and {text.length} Character</p>
          <p>{.008 *(text===""?"0":text.split(" ").length)} Minutes read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:'Nothing to preview!!'}</p>
        </div>
    </div>
  )
}
