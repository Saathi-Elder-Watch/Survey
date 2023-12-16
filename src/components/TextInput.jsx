import React from "react";


export default function TextInput(props){
    return (
        
        <div className="input-container" id={props.name}>
            <label className="text-label" htmlFor="">{props.content} {props.required && <span style={{color:"red"}}>*</span>}</label><br />
            {!(props.valid) && <><span className="error">This field is required!</span><br /></>}
            <input 
                type="text" 
                className="text-input" 
                name={props.content} 
                placeholder="Type here...." 
                onChange={props.onchange} 
                value={props.value}>
            </input>
        </div>
    );
}