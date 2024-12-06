// const question = document.getElementById("question")
const optButton = document.getElementsByClassName("answer-button")


const questions = [
    {
        question: "Q1.what is full form of https",
        options: ["hyper text transfer protocall secure", "hyper text translation protocal secured", "highest text translator perfected secure", "hyper text transfer language unsecure"],
        correctAnswer: 1
        
    },
    {
        question: "Q2. define array",
        options: ["it is an varible","programming language","a data structure that stores elements of the same type","a website that allows you to get fonts"],
        correctAnswer: 3
    }
]

let currentQuestionIndex = 0

function loadQuestion(){
    // question. = questions.question
    document.getElementById("question").textContent = "questions.question"
    optButton.forEach(
        (optButton,index)=>{
            optButton.textContent = questions.options[index]
            optButton.disabled = false
        }
    )
}

loadQuestion()