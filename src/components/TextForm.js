import React,{useState} from 'react'   // rfc shortcut to create 


export default function TextForm(props) {
    const handleUpclick = () =>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnchange = (event) =>{
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter here");
    // Text = "hero"  // wrong way to change the text
    // setText("new Text");

    return (
        <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpclick}>Convert to Uppercase</button>
    </div>
  )
}
