const startQuiz = document.querySelector("#start-btn");
const nextBtn = document.querySelector("#next-btn")
const quizContainer = document.querySelector("#quiz-questions");
const displayQuestions = document.querySelector("#question")
const displayAnswers = document.querySelector("#answer-btns")
const totalScoreText = document.querySelector('#score')

let shuffledQuestions, currentQuestionsIndex;

startQuiz.addEventListener("click",quizBegin)
nextBtn.addEventListener('click', () =>{
    currentQuestionsIndex++
    setNextQuestion(  )
})


function quizBegin(){
    console.log("start quiz")
    startQuiz.classList.add('hide')
    shuffledQuestions = questionsList.sort(()=> Math.random() - .5)
    currentQuestionsIndex = 0
    quizContainer.classList.remove('hide')
    setNextQuestion()
    
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionsIndex])
}

function showQuestion(question){
    displayQuestions.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',answerOptions)
        displayAnswers.appendChild(button)
    })
}

function resetState(){
    nextBtn.classList.add("hide")
    while (displayAnswers.firstChild){
        displayAnswers.removeChild(displayAnswers.firstChild)
    }
}

function answerOptions(e){
    const selectedButton  = e.target
    const correct = selectedButton.dataset.correct
    Array.from(displayAnswers.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionsIndex +1){
       nextBtn.classList.remove('hide')
    }else{
        startQuiz.innerText = 'stop'
        startQuiz.classList.remove('hide')
    }
} 


function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add('right-ans')
    } else{
        element.classList.add('wrong-ans')
    }
}

function clearStatusClass(element){
    element.classList.remove('right-ans')
    element.classList.remove('wrong-ans')
}

const questionsList = [
    {
        question:"what does HTML stand for?",
        answers: [
            { text:"Hypertext Markup Language", correct: true},
            { text:"Hypertest Markup Language", correct: false},
            { text:"Hypertext Markup Link", correct: false},
            { text:"Hypertest Mean language", correct: false}
        ]
    },
    {
        question:"how do you add an ordered list?",
        answers: [
            { text:"<li>", correct: false},
            { text:"<ul>", correct: false},
            { text:"<tr>", correct: false},
            { text:"<ol>", correct: true}
        ]
    },
    {
        question:"How do you insert comment in HTML?",
        answers: [
            { text:"//comments", correct: false},
            { text:"/*comments*/", correct: false},
            { text:"<!--comments-->", correct: true},
            { text:"//comments//", correct: false}
        ]
    },
    {
        question:"if HTML is to structure web page, then CSS is to...?",
        answers: [
            { text:"add comments to web page", correct: false},
            { text:"style web page", correct: true},
            { text:"add links to web page", correct: false},
            { text:"make web page interactive", correct: false}
        ]
    },
    {
        question:"what is the correct HTML element for line break?",
        answers: [
            { text:"<wbr>", correct: false},
            { text:"<linebreak>", correct: false},
            { text:"<lnbrk>", correct: false},
            { text:"<br/>", correct: true}
        ]
    }
]
