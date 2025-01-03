let questionHeading = document.querySelector(".question-no")
let question = document.querySelector(".question")
let optiona = document.querySelector(".optiona")
let optionb = document.querySelector(".optionb")
let optionc = document.querySelector(".optionc")
let optiond = document.querySelector(".optiond")
let optionaLabel = document.querySelector('.optiona-label')
let optionbLabel = document.querySelector('.optionb-label')
let optioncLabel = document.querySelector('.optionc-label')
let optiondLabel = document.querySelector('.optiond-label')
let questionArr = ["one", "two", "three", "four", "five"]
let questionArrNo = 0
let questionArrQues = questionArr[questionArrNo]
const actualAnswers = ['Islamabad', 'Lahore', 'Peshawar', 'Karachi', 'Quetta']
const selectedAnswers = []
let submitButton = document.querySelector('.submit')


// quizQuestions.questionArrQues.index
function createQuiz(){ if(quizQuestions[questionArrQues].index < Object.keys(quizQuestions).length){
    submitButton.innerText = "Next"

    questionArrQues = questionArr[questionArrNo]

questionHeading.innerText = `Question No. ${quizQuestions[questionArrQues].index} of ${Object.keys(quizQuestions).length} `
question.innerText = `${quizQuestions[questionArrQues].question}`
optiona.value = `${quizQuestions[questionArrQues].optiona}`
optionb.value = `${quizQuestions[questionArrQues].optionb}`
optionc.value = `${quizQuestions[questionArrQues].optionc}`
optiond.value = `${quizQuestions[questionArrQues].optiond}`
optionaLabel.innerText = `a:${quizQuestions[questionArrQues].optiona}`
optionbLabel.innerText = `b:${quizQuestions[questionArrQues].optionb}`
optioncLabel.innerText = `c:${quizQuestions[questionArrQues].optionc}`
optiondLabel.innerText = `d:${quizQuestions[questionArrQues].optiond}`
questionArrNo++
}else {
    submitButton.innerText = "Submit"
    submitButton.addEventListener("click", () => {
        submitButton.disabled = true
    })
    checkResult()
}


function checkResult(){
    if(JSON.stringify(selectedAnswers) == JSON.stringify(actualAnswers)){
        console.log("User have won")
    }
}
    
    
checkAnswers()
}
function checkAnswers(){
    let options = document.querySelectorAll(".options")
    for (let i = 0; i < options.length; i++) {
        if(options[i].checked){
            console.log(options[i].value)
            options[i].checked = false
            selectedAnswers.push(options[i].value)
        }
    }

    console.log(selectedAnswers)
    console.log(actualAnswers)
}
createQuiz()