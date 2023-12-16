import React from "react";

export default function SingleMCQInput(props) {
    return (
        <div className="input-container" id={props.name}>
            <label className="text-label">{props.content} {props.required && <span style={{color:"red"}}>*</span>}</label><br />
            {!(props.valid) && <span className="error">This field is required!</span>}
            {props.options.map((opt, ind) => {
                return (
                    <div key={ind}>
                        <label className="mcq-label">
                            <input 
                                type="radio" 
                                name={props.content} 
                                onChange={props.onchange} 
                                value={opt}>
                            </input>
                            <span className="option">{opt}</span>
                        </label>
                    </div>
                )
            })}
        </div>
    );
}