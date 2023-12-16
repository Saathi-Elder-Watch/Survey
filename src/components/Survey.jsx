import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Survey.css';
import TextInput from "./TextInput";
import SingleMCQInput from "./SingleMCQInput";
import MultiMCQInput from "./MultiMCQInput";
import inputs from "./inputs";

export default function Survey() {

    const navigate = useNavigate();

    const [values, setValues] = useState({});
    let temp1 = {};
    inputs.forEach(inp => {
        temp1[inp.name] = true;
    });
    delete (temp1.undefined);
    const [isValid, setIsValid] = useState(temp1);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues((prevVal) => {
            return {
                ...prevVal,
                [name]: value
            }
        })
    }

    const handleMultipleChange = (e) => {
        let temp = { ...values };
        let key = e.target.name;
        if (temp[key] === undefined)
            temp[key] = [];
        if (e.target.checked) {
            temp[key].push(e.target.value);
        } else {
            temp[key] = temp[key].filter(ele => ele !== e.target.value);
        }

        setValues(temp);
    }

    function checkValid() {
        let valid = true;
        let count = 0;
        setIsValid(temp1);
        inputs.forEach((input) => {
            if (input.type !== "heading" && input.required === true) {
                if (values[input.content] === undefined || values[input.content].length === 0) {
                    valid = false;
                    setIsValid((preVal) => {
                        return {
                            ...preVal,
                            [input.name]: false

                        };
                    })
                    if (count === 0) {
                        let ele = document.getElementById(input.name);
                        ele.scrollIntoView({
                            behavior: 'smooth'
                        });
                        alert("Enter all the necessary fields");
                        count++;
                    }
                }
            }
        });
        return valid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        const api = [process.env.REACT_APP_API1, process.env.REACT_APP_API2, process.env.REACT_APP_API3, process.env.REACT_APP_API4, process.env.REACT_APP_API5];
        const ind = Math.floor(Math.random() * 5);

        if (checkValid()) {
            fetch(
                api[ind],
                {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        data: [
                            values
                        ]
                    })
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    navigate('/response')
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    return (
        <div className="survey-container container-fluid">
            <h1 className="survey-heading">Survey: At-Home Healthcare for the Elderly: Customer Expectations</h1>
            <p className="survey-description">
                Dear Participant,<br />
                Thank you for taking the time to participate in our At-Home Healthcare for the Elderly: Customer Expectations Survey. Your feedback is invaluable in helping us provide the best possible care for your loved ones. Please answer the following questions honestly and to the best of your ability. Your responses will assist us in understanding your expectations and preferences for at-home healthcare services.
            </p>
            <form id="survey" onSubmit={handleSubmit}>
                {inputs.map((inp) => {
                    if (inp.type === "heading") {
                        return (
                            <div key={inp.id}>
                                <h3 className="sub-heading">{inp.content}</h3>
                            </div>
                        )
                    } else if (inp.type === "text") {
                        return (
                            <TextInput
                                key={inp.id}
                                name={inp.name}
                                content={inp.content}
                                onchange={handleChange}
                                valid={isValid[inp.name]}
                                required={inp.required}
                            />
                        )
                    } else if (inp.type === "mcq") {
                        if (inp.multiple) {
                            return (
                                <MultiMCQInput
                                    key={inp.id}
                                    name={inp.name}
                                    content={inp.content}
                                    options={inp.options}
                                    onchange={handleMultipleChange}
                                    valid={isValid[inp.name]}
                                    required={inp.required}
                                />
                            )
                        } else {
                            return (
                                <SingleMCQInput
                                    key={inp.id}
                                    name={inp.name}
                                    content={inp.content}
                                    options={inp.options}
                                    onchange={handleChange}
                                    valid={isValid[inp.name]}
                                    required={inp.required}
                                />
                            )
                        }
                    }
                })}
                <div id="sub">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}