import React, { useState } from 'react';
import PropTypes from 'prop-types'





export default function Textform(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text)

        let newText = text.toUpperCase();
        setText(newText)
    };
    const handleOnChange = (event) => {
        setText(event.target.value)

    }

    const [text, setText] = useState('');


    return (
        <>
        <div>
            <h1>{props.heading}</h1>

            <div className="mb-3">
               
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: 'white'}} ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>convert to uppercase</button>
        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(' ').length} words and {text.length} characters</p>

        </div>
        </>
    )
}
