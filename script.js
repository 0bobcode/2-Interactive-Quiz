let question = document.getElementById("question");
let optBtns = document.querySelectorAll(".answer-btn");
let feedback = document.getElementById("feedback");
let nextBtn = document.getElementById("nextBtn");
let answerContainer = document.getElementById("answer-container");

const questions = [
    {
        question: "Q1. What is full form of HTTPS?",
        options: ["1. Hyper Text Transfer Protocol Secure",
            "2. Hyper Text Translation Protocol Secured",
            "3. Highest Text Translator Perfected Secure",
            "4. Hyper Text Transfer Language Unsecure"],
        correctAnswer: 1
    },
    {
        question: "Q2. Define array.",
        options: ["1. It is a variable",
            "2. Programming language",
            "3. A data structure that stores elements of the same type",
            "4. A website that allows you to get fonts"],
        correctAnswer: 3
    },
    {
        question: "Q3. What is the purpose of CSS?",
        options: ["1. Structuring HTML documents",
            "2. Styling HTML documents",
            "3. Adding functionality to HTML documents",
            "4. Storing data in HTML documents"],
        correctAnswer: 2
    },
    {
        question: "Q4. Which HTML tag is used to create a hyperlink?",
        options: ["1. <a>",
            "2. <link>",
            "3. <hyperlink>",
            "4. <href>"],
        correctAnswer: 1
    },
    {
        question: "Q5. What is the use of the <head> tag in HTML?",
        options: ["1. To define the main content of the document",
            "2. To define the header of the document",
            "3. To contain metadata and links to scripts and styles",
            "4. To define a section in the document"],
        correctAnswer: 3
    },
    {
        question: "Q6. Which JavaScript method is used to write content into the HTML document?",
        options: ["1. document.write()",
            "2. document.create()",
            "3. document.display()",
            "4. document.show()"],
        correctAnswer: 1
    },
    {
        question: "Q7. What is the purpose of the `alt` attribute in the <img> tag?",
        options: ["1. To define the URL of the image",
            "2. To provide an alternative text for the image if it cannot be displayed",
            "3. To specify the alignment of the image",
            "4. To specify the width and height of the image"],
        correctAnswer: 2
    },
    {
        question: "Q8. Which of the following is used to add comments in JavaScript?",
        options: ["1. // for single-line comments",
            "2. /* for multi-line comments */",
            "3. Both 1 and 2",
            "4. <!-- for single-line comments -->"],
        correctAnswer: 3
    },
    {
        question: "Q9. What does JSON stand for?",
        options: ["1. JavaScript Object Notation",
            "2. Java Standard Object Notation",
            "3. Java Simple Object Network",
            "4. JavaScript Output Network"],
        correctAnswer: 1
    },
    {
        question: "Q10. Which of the following is not a JavaScript data type?",
        options: ["1. Number",
            "2. String",
            "3. Boolean",
            "4. Class"],
        correctAnswer: 4
    }
];

console.log(questions[0]);

let currentQuestionIndex = 0

function loadQuestion() {
    let currentQuestion = questions[currentQuestionIndex]
    document.getElementById("question").textContent = currentQuestion.question
    const optBtns = document.querySelectorAll(".answer-btn")
    optBtns.forEach((optBtn, index) => {
        optBtn.textContent = currentQuestion.options[index]
        optBtn.disabled = false
    });

    document.getElementById("feedback").textContent = "";
    document.getElementById("next-btn").style.display = "none";
}
function checkAnswser(selected) {
    let correct = questions[currentQuestionIndex].correctAnswer
    const feedback = document.getElementById("feedback")
    let buttons = document.querySelectorAll(".answer-btn")
    if (selected === correct) {
        feedback.textContent = "correct!";
        feedback.style.color = "green";
    }
    else {
        feedback.textContent = "WRONG!!!";
        feedback.style.color = "red";
    }
    buttons.forEach(button => {
        button.disabled = true
    })
    document.getElementById("next-btn").style.display = "inline-block";
}



function nextQuestion() {
    currentQuestionIndex++
    if (currentQuestionIndex < questions.length) {
        loadQuestion()
    }
    else {
        document.getElementById("question").textContent = "🏁Quiz Complete‼️‼️‼️‼️";
        document.getElementById("answer-container").style.display = "none";
        document.getElementById("next-btn").style.display = "inline-block";
    }
}
loadQuestion()