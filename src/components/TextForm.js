import React,{useState} from 'react'   // rfc shortcut to create 


export default function TextForm(props) {

    // upper case
    const handleUpclick = () =>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase","success")
    }

    // lower case
    const handleLoclick =()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase","success")
    }

    // clean text
    const handleclean = () =>{
        let newText = ""
        setText(newText)
        props.showAlert("copied to cleared","success")
    }

    // remove Extra white spaces in text
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed","success")
    }
    // copy the text
    const handlecopy = ()=>{
        // var text = document.getElementById("myBox")
        // text.select();
        navigator.clipboard.writeText(text);
        props.showAlert("copied to clipboard","success")
    }

    const handleOnchange = (event) =>{
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    // Text = "hero"  // wrong way to change the text
    // setText("new Text");

    return (
        <>
        <div className="container" style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode ==='dark'?'#13466e':'white', color:props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="6"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpclick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoclick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handlecopy}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleclean}>clean text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove white spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h2>Your Text summary</h2>
        <p>{(text.split(/\s+/).length)-1} words,{text.length} characters</p>
        <p>{0.008 * (text.split(" ").filter((element)=>{return element.length!==0}).length)} Minutes read characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
