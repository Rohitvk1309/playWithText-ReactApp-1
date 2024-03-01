import React,{useState} from 'react'   // rfc shortcut to create 


export default function TextForm(props) {

    // upper case
    const handleUpclick = () =>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    // lower case
    const handleLoclick =()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    // clean text
    const handleclean = () =>{
        let newText = ""
        setText(newText)
    }

    // remove Extra white spaces in text
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    // copy the text
    const handlecopy = ()=>{
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleOnchange = (event) =>{
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    // Text = "hero"  // wrong way to change the text
    // setText("new Text");

    return (
        <>
        <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleclean}>clean text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove white spaces</button>
    </div>
    <div className="container my-3">
        <h2>Your Text summary</h2>
        <p>{(text.split(" ").length)-1} words,{text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read characters</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
