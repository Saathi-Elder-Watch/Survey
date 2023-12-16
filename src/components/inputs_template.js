const inputs = [
    //example for heading
    {
        id: 1,
        type: "heading",
        content: "1. About You:"
    },
    //example for textbox
    {
        id: 2,
        type: "text",
        name: "q1",
        content: "a) Please mention your name"
    },
    //example for MCQ
    {
        id: 3,
        type: "mcq",
        name: "q2",
        content: "b) Age Group:",
        options: ["18-29 years", "30-45 years", "46-60 years", "61 years and above"],
        multiple: false //set as true if you want to enable multi-select
    },
    {
        id: 4,
        type: "mcq",
        name: "q3",
        content: "c) fruit:",
        options: ["apple", "banana", "waterMellon", "grapes"],
        multiple: true //set as true if you want to enable multi-select
    }
]

export default inputs;