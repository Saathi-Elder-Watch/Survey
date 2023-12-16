const inputs = [
    {
        id: 1,
        type: "heading",
        content: "1. About You:"
    },
    {
        id: 2,
        type: "text",
        name: "q1",
        content: "a) Please mention your name",
        required: true,
    },
    {
        id: 3,
        type: "mcq",
        name: "q2",
        content: "b) Age Group:",
        options: ["18-29 years", "30-45 years", "46-60 years", "61 years and above"],
        required: true,
        multiple: false
    },
    {
        id: 4,
        type: "mcq",
        name: "q3",
        content: "c) Relationship to the Elderly Individual:",
        options: ["Spouse", "Child", "Sibling", "Other"],
        required: true,
        multiple: false
    },
    {
        id: 5,
        type: "text",
        name: "q4",
        content: "d) Organisation:",
        required: false
    },
    {
        id: 6,
        type: "heading",
        content: "2. Experience with At-Home Healthcare:"
    },
    {
        id: 7,
        type: "mcq",
        name: "q5",
        content: "Have you previously used at-home healthcare services for an elderly family member?",
        options: ["Yes", "No"],
        required: true,
        multiple: false
    },
    {
        id: 8,
        type: "text",
        name: "q6",
        content: "If yes, please briefly describe your experience and the services provided:",
        required: false
    },
    {
        id: 9,
        type: "heading",
        content: "3. Expectations from the At-Home Healthcare Service:"
    },
    {
        id: 10,
        type: "mcq",
        name: "q7",
        content: "a) Which of the following services are you most interested in? (Select all that apply)",
        options: ["Medical Care", "Hygiene Care", "Companionship and Emotional Support", "Meal Preparation and Care", "Physical Therapy and Rehabilitation", "Housekeeping and Errands", "Other"],
        required: true,
        multiple: true
    },
    {
        id: 11,
        type: "mcq",
        name: "q8",
        content: "b) What qualities do you consider most important in a healthcare professional providing",
        options: ["Experience and Expertise", "Patience and Understanding", "Reliability and Punctuality", "Communication Skills", "Emergency Preparedness", "Cultural Sensitivity", "Other"],
        required: true,
        multiple: true
    },
    {
        id: 12,
        type: "heading",
        content: "4. Dealbreakers:"
    },
    {
        id: 13,
        type: "mcq",
        name: "q9",
        content: "a) What factors would deter you from choosing a specific at-home healthcare service?(Select all that apply)",
        options: ["High Cost of Services", "Lack of Qualified Staff", "Poor Reviews and Reputation", "Limited Availability of Services", "Inflexible Scheduling", "Lack of Personalized Care", "Unresponsive Customer Support", "Other"],
        required: true,
        multiple: true
    },
    {
        id: 14,
        type: "text",
        name: "q10",
        content: "b) Is there anything else that you consider a dealbreaker when it comes to choosing an at-home healthcare service?",
        required: false,
    },
    {
        id: 15,
        type: "heading",
        content: "5. Preferred Communication and Information:"
    },
    {
        id: 16,
        type: "mcq",
        name: "q11",
        content: "How would you prefer to receive information about at-home healthcare services and updates? (Select all that apply)",
        options: ["Email", "Phone Calls", "SMS/Text Messages", "Social Media", "In-Person Consultations", "Other"],
        required: true,
        multiple: true
    },
    {
        id: 17,
        type: "heading",
        content: "6. Payment:"
    },
    {
        id: 18,
        type: "mcq",
        name: "q12",
        content: "a) What is your preferred payment method for at-home healthcare services?",
        options: ["Credit Card", "Debit Card", "Health Savings Account (HSA)", "UPI", "Insurance Billing", "Other"],
        required: true,
        multiple: true
    },
    {
        id: 19,
        type: "heading",
        content: "7. Emergency Preparedness:",
    },
    {
        id: 20,
        type: "mcq",
        name: "q13",
        content: "a) How important is it for you that the at-home healthcare service has an emergency response plan in place?",
        options: ["Extremely Important", "Very Important", "Moderately Important", "Slightly Important", "Not Important at All"],
        required: true,
        multiple: false
    },
    {
        id: 21,
        type: "mcq",
        name: "q14",
        content: "b) Would you prefer a service that provides regular emergency drills and training for caregivers?",
        options: ["Yes", "No", "Not Sure"],
        required: true,
        multiple: false
    },
    {
        id: 22,
        type: "heading",
        content: "8. Customization and Personalization:"
    },
    {
        id: 23,
        type: "mcq",
        name: "q15",
        content: "a) How important is it for you that the at-home healthcare service offers customized care plans tailored to the individual needs of the elderly person?",
        options: ["Extremely Important", "Very Important", "Moderately Important", "Slightly Important", "Not Important at All"],
        required: true,
        multiple: false
    },
    {
        id: 24,
        type: "mcq",
        name: "q16",
        content: "b) Are you open to providing specific cultural or religious preferences to be incorporated into the care plan?",
        options: ["Yes", "No", "Not Sure"],
        required: true,
        multiple: false
    },
    {
        id: 25,
        type: "heading",
        content: "9. Communication and Updates:"
    },
    {
        id: 26,
        type: "mcq",
        name: "q17",
        content: "a) How frequently would you like to receive updates about your loved one's progress and well-being?",
        options: ["Daily", "Weekly", "Biweekly", "Monthly", "As Needed"],
        required: true,
        multiple: false
    },
    {
        id: 27,
        type: "heading",
        content: "10. Caregiver Training and Qualifications:"
    },
    {
        id: 28,
        type: "mcq",
        name: "q18",
        content: "a) What level of caregiver qualifications are you most comfortable with?",
        options: ["Certified Nursing Assistant (CNA)", "General Nurse and Midwife (GNM)", "Bachelor of Science in Nursing (B.Sc. Nursing)", "Healthcare Assistant (HCA) / Community Health Worker", "Non-medical Caregiver with Basic First Aid Training", "Non-medical Caregiver with extensive training in caregiving"],
        required: true,
        multiple: false
    },
    {
        id: 29,
        type: "mcq",
        name: "q19",
        content: "b) How important is it for you that the caregivers undergo background checks and regular training?",
        options: ["Extremely Important", "Very Important", "Moderately Important", "Slightly Important", "Not Important at All"],
        required: true,
        multiple: false
    },
    {
        id: 30,
        type: "heading",
        content: "11. Feedback and Complaint Resolution:"
    },
    {
        id: 31,
        type: "mcq",
        name: "q20",
        content: "a) How satisfied are you with the mechanisms in place for providing feedback or raising concerns about the service?",
        options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"],
        required: true,
        multiple: false
    },
    {
        id: 32,
        type: "text",
        name: "q21",
        content: "b) What improvements, if any, would you suggest regarding the feedback and complaint resolution process?",
        required: false,
    },
    {
        id: 33,
        type: "heading",
        content: "12. Service Duration:"
    },
    {
        id: 34,
        type: "mcq",
        name: "q22",
        content: "a) How long do you anticipate needing at-home healthcare services for your loved one?",
        options: ["Short-term (few weeks to a few months)", "Long-term (several months to a year)", "Ongoing (indefinite duration)", "Not Sure"],
        required: true,
        multiple: false
    },
    {
        id: 35,
        type: "mcq",
        name: "q23",
        content: "b) How long do you expect the at-home healthcare service in a day?",
        options: ["8 hours", "8-12 hours", "12-18 hours", ">18 hours"],
        required: true,
        multiple: false
    },
    {
        id: 36,
        type: "heading",
        content: "13. Safety Measures:"
    },
    {
        id: 37,
        type: "mcq",
        name: "q24",
        content: "a) How important are safety measures in the selection of an at-home healthcare service?",
        options: ["Extremely Important", "Very Important", "Moderately Important", "Slightly Important", "Not Important at All"],
        required: true,
        multiple: false
    },
    {
        id: 38,
        type: "text",
        name: "q25",
        content: "b) Are there specific safety features you would like to see implemented in your loved one's home? (Please specify)",
        required: false,
    },
    {
        id: 39,
        type: "heading",
        content: "14. Caregiver-Patient Matching:"
    },
    {
        id: 40,
        type: "mcq",
        name: "q26",
        content: "a) Do you prefer the same caregiver(s) consistently, or are you comfortable with a rotating team of caregivers?",
        options: ["Same Caregiver(s) Consistently", "Rotating Team of Caregivers", "No Preference"],
        required: true,
        multiple: false
    },
    {
        id: 41,
        type: "mcq",
        name: "q27",
        content: "b) Are you interested in caregiver profiles and backgrounds before the service starts?",
        options: ["Yes", "No", "Not Sure"],
        required: true,
        multiple: false
    },
    {
        id: 42,
        type: "heading",
        content: "15. Technology Integration:"
    },
    {
        id: 43,
        type: "mcq",
        name: "q28",
        content: "a) Are you open to the use of technology, such as telemedicine consultations and health monitoring apps, to enhance the caregiving experience?",
        options: ["Yes", "No", "Not Sure"],
        required: true,
        multiple: false
    },
    {
        id: 44,
        type: "text",
        name: "q29",
        content: "b) What specific technological features would you find beneficial in at-home healthcare services? (Please specify)",
        required: false,
    },
    {
        id: 45,
        type: "heading",
        content: "16. Family Involvement:"
    },
    {
        id: 46,
        type: "mcq",
        name: "q30",
        content: "a) How important is it for the at-home healthcare service to involve family members in the care planning and decision-making process?",
        options: ["Extremely Important", "Very Important", "Moderately Important", "Slightly Important", "Not Important at All"],
        required: true,
        multiple: false
    },
    {
        id: 47,
        type: "mcq",
        name: "q31",
        content: "b) Would you prefer regular family meetings or updates to discuss the care plan and progress?",
        options: ["Yes", "No", "Not Sure"],
        required: true,
        multiple: false
    },
    {
        id: 48,
        type: "heading",
        content: "17. Transition Planning:"
    },
    {
        id: 49,
        type: "mcq",
        name: "q32",
        content: "a) If your loved one's condition worsens, how important is it for the at-home healthcare service to assist in transitioning to higher levels of care, such as assisted living or nursing homes?",
        options: ["Extremely Important", "Very Important", "Moderately Important", "Slightly Important", "Not Important at All"],
        required: true,
        multiple: false
    },
    {
        id: 50,
        type: "text",
        name: "q33",
        content: "b) What specific support would you expect during such transitions? (Please specify)"
    },
    {
        id: 51,
        type: "heading",
        content: "18. Holistic Care:"
    },
    {
        id: 52,
        type: "mcq",
        name: "q34",
        content: "a) Do you believe in the importance of holistic care, including emotional well-being, social activities, and mental stimulation, in addition to medical and physical assistance?",
        options: ["Yes", "No", "Not Sure"],
        required: true,
        multiple: false
    },
    {
        id: 53,
        type: "text",
        name: "q35",
        content: "b) How do you think holistic care can be incorporated into the at-home healthcare services?"
    },
    {
        id: 54,
        type: "mcq",
        name: "q36",
        content: "c) Would you be interested in social events or support groups organized by the at-home healthcare service for both the elderly individuals and their families?",
        options: ["Yes", "No", "Not Sure"],
        required: true,
        multiple: false
    },
    {
        id: 55,
        type: "heading",
        content: "19. Language and Cultural Sensitivity:"
    },
    {
        id: 56,
        type: "mcq",
        name: "q37",
        content: "a) How important is it for the caregivers to be proficient in the native language of the elderly person and knowledgeable about their cultural practices?",
        options: ["Extremely Important", "Very Important", "Moderately Important", "Slightly Important", "Not Important at All"],
        required: true,
        multiple: false
    },
    {
        id: 57,
        type: "text",
        name: "q38",
        content: "b) Are there any specific cultural or language preferences you would like the caregivers to have?",
        required: false,
    },
    {
        id: 58,
        type: "heading",
        content: "20. Service Evaluation:"
    },
    {
        id: 59,
        type: "mcq",
        name: "q39",
        content: "a) How likely are you to participate in periodic surveys or evaluations to provide feedback on the quality of at-home healthcare services?",
        options: ["Very Likely", "Somewhat Likely", "Neutral", "Somewhat Unlikely", "Very Unlikely"],
        required: true,
        multiple: false
    },
    {
        id: 60,
        type: "text",
        name: "q40",
        content: "b) Is there anything else you believe is essential for us to know in understanding your expectations for at-home healthcare services?",
        required: false,
    },
    {
        id: 61,
        type: "heading",
        content: "21. Preferred Consultation Method:"
    },
    {
        id: 62,
        type: "mcq",
        name: "q41",
        content: "a) How would you prefer to have the initial consultation about at-home healthcare services?",
        options: ["In-Person Meeting", "Phone Call", "Video Call", "Email Correspondence", "Not Sure"],
        required: true,
        multiple: false
    },
    {
        id: 63,
        type: "heading",
        content: "22. Additional Comments:"
    },
    {
        id: 64,
        type: "text",
        name: "q42",
        content: "Is there anything else you would like to share or any specific requirements you have for at-home healthcare services?",
        required: false,
    },
];


export default inputs;