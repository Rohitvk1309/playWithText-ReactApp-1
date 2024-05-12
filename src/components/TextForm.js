import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [previewText, setPreviewText] = useState(""); // State to store the modified text for preview
    const [wordCount, setWordCount] = useState(0); // State to store word count

    const handleUpclick = () => {
        let newText = text.toUpperCase();
        setPreviewText(newText); // Update the preview text
        props.showAlert("Converted to uppercase", "success");
    }

    const handleLoclick = () => {
        let newText = text.toLowerCase();
        setPreviewText(newText); // Update the preview text
        props.showAlert("Converted to lowercase", "success");
    }

    const handleclean = () => {
        setText(""); // Clear the original text
        setPreviewText(""); // Clear the preview text
        props.showAlert("Cleared text", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/\s+/).join(" ");
        setPreviewText(newText); // Update the preview text
        props.showAlert("Extra spaces removed", "success");
    }

    const handlecopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success");
    }

    const handleOnchange = (event) => {
        const newText = event.target.value; // Get the new text
        setText(newText);
        setWordCount(countWords(newText)); 
        setPreviewText(newText); 
    }

    function countWords(text) {
        // Split the text using a regular expression that captures word boundaries
        const words = text.match(/\b\w+\b/g);
        // Return the length of the array containing the matched words
        return words ? words.length : 0;
    }
    

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnchange}
                        style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
                        id="myBox"
                        rows="6"
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-1" onClick={handleUpclick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleLoclick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handlecopy}>Copy Text</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleclean}>Clear Text</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your Text Summary</h2>
                <p>{wordCount} words,{text.length} characters</p>
                <p>{0.008 * wordCount} Minutes read characters</p>
                <h2>Preview</h2>
                <p>{previewText.length > 0 ? previewText : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
