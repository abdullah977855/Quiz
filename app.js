const questionNumber = document.getElementById("question-number");
const question = document.getElementById("question-write");
const optionOne = document.getElementById("option-one");
const optionTwo = document.getElementById("option-two");
const optionThree = document.getElementById("option-three");
const optionFour = document.getElementById("option-four");
const quizProgress = document.getElementById("quiz-progress");
const quizProgressLabel = document.getElementById("quiz-progress-label");
const optionOneText = document.getElementById("option-one-text");
const optionTwoText = document.getElementById("option-two-text");
const optionThreeText = document.getElementById("option-three-text");
const optionFourText = document.getElementById("option-four-text");
const submitAndNextButton = document.getElementById("submit-next-button");
let quiz = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyperlinks and Text Markup Language",
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyper Tool Markup Language"
        ],
        correctOption: "Hyper Text Markup Language"
    },
    {
        question: "Which HTML element is used to define the largest heading?",
        options: [
            "<heading>",
            "<h6>",
            "<h1>",
            "<head>"
        ],
        correctOption: "<h1>"
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        options: [
            "<lb>",
            "<br>",
            "<break>",
            "<next>"
        ],
        correctOption: "<br>"
    },
    {
        question: "Which property is used in CSS to change the background color of an element?",
        options: [
            "color",
            "background-color",
            "bgcolor",
            "back-color"
        ],
        correctOption: "background-color"
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Computer Style Sheets",
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Colorful Style Sheets"
        ],
        correctOption: "Cascading Style Sheets"
    },
    {
        question: "Which CSS property controls the text size?",
        options: [
            "text-style",
            "font-size",
            "text-size",
            "font-style"
        ],
        correctOption: "font-size"
    },
    {
        question: "How do you display hyperlinks without an underline in CSS?",
        options: [
            "text-decoration: underline;",
            "text-decoration: none;",
            "decoration: no-underline;",
            "text-underline: none;"
        ],
        correctOption: "text-decoration: none;"
    },
    {
        question: "Which CSS property is used to create space around elements, outside of any defined borders?",
        options: [
            "padding",
            "spacing",
            "border",
            "margin"
        ],
        correctOption: "margin"
    },
    {
        question: "Which entry is NOT a valid JavaScript data type?",
        options: [
            "Number",
            "String",
            "Float",
            "Boolean"
        ],
        correctOption: "Float"
    },
    {
        question: "How do you create a function in JavaScript?",
        options: [
            "function:myFunction()",
            "function myFunction()",
            "create myFunction()",
            "void myFunction()"
        ],
        correctOption: "function myFunction()"
    },
    {
        question: "How do you write an IF statement in JavaScript?",
        options: [
            "if i = 5 then",
            "if (i == 5)",
            "if i == 5 then",
            "if i = 5"
        ],
        correctOption: "if (i == 5)"
    },
    {
        question: "How does a FOR loop start in JavaScript?",
        options: [
            "for (let i = 0; i <= 5; i++)",
            "for (let i = 0; i <= 5)",
            "for (i <= 5; i++)",
            "for i = 1 to 5"
        ],
        correctOption: "for (let i = 0; i <= 5; i++)"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        options: [
            "*",
            "=",
            "+",
            "-"
        ],
        correctOption: "="
    },
    {
        question: "Which semantic HTML element should contain the main navigation links?",
        options: [
            "<section>",
            "<header>",
            "<aside>",
            "<nav>"
        ],
        correctOption: "<nav>"
    },
    {
        question: "What does SQL stand for?",
        options: [
            "Structured Query Language",
            "Structured Question Language",
            "Simple Query Language",
            "Strong Query Language"
        ],
        correctOption: "Structured Query Language"
    }
]

let currentQuizNumber = 0;
let score = 0;
let totalQuiz = 15;
let findQuesionIndex = quiz[currentQuizNumber]

function displayQuiz() {
    findQuesionIndex = quiz[currentQuizNumber]
    question.innerText = findQuesionIndex.question;
    questionNumber.innerText = `Q${currentQuizNumber + 1}: `
    optionOneText.innerText = quiz[currentQuizNumber].options[0];
    optionTwoText.innerText = quiz[currentQuizNumber].options[1];
    optionThreeText.innerText = quiz[currentQuizNumber].options[2];
    optionFourText.innerText = quiz[currentQuizNumber].options[3];
    quizProgressLabel.innerText = `Quiz ${currentQuizNumber + 1} of ${totalQuiz}`;
}

submitAndNextButton.addEventListener("click", () => {
    if (!optionOne.checked && !optionTwo.checked && !optionThree.checked && !optionFour.checked) {
        alert("Please select one option.")
    } else {
        if (optionOne.checked && optionOneText.innerText == findQuesionIndex.correctOption) {
            score++;
        } else if (optionTwo.checked && optionTwoText.innerText == findQuesionIndex.correctOption) {
            score++;
        } else if (optionThree.checked && optionThreeText.innerText == findQuesionIndex.correctOption) {
            score++;
        } else if (optionFour.checked && optionFourText.innerText == findQuesionIndex.correctOption) {
            score++;
        }
        currentQuizNumber++;
        if(currentQuizNumber < totalQuiz){
            displayQuiz();
        }
        quizProgress.max = totalQuiz;
        quizProgress.value = currentQuizNumber + 1;
        optionOne.checked = false;
        optionTwo.checked = false;
        optionThree.checked = false;
        optionFour.checked = false;
        if (currentQuizNumber == 14) {
            submitAndNextButton.innerText = "Submit";
        }
        if(currentQuizNumber == 15){
            localStorage.setItem("score", JSON.stringify(score))
            localStorage.setItem("totalQuiz", JSON.stringify(totalQuiz))
            window.location.replace("./result.html")
        }
    }
})

displayQuiz();