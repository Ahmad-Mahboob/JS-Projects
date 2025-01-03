let questionHeading = document.querySelector(".question-no");
let question = document.querySelector(".question");
let optiona = document.querySelector(".optiona");
let optionb = document.querySelector(".optionb");
let optionc = document.querySelector(".optionc");
let optiond = document.querySelector(".optiond");
let optionaLabel = document.querySelector(".optiona-label");
let optionbLabel = document.querySelector(".optionb-label");
let optioncLabel = document.querySelector(".optionc-label");
let optiondLabel = document.querySelector(".optiond-label");
let submitButton = document.querySelector(".submit");

const actualAnswers = ["Islamabad", "Lahore", "Peshawar", "Karachi", "Quetta"];
const selectedAnswers = [];
let quesNo = 0;

function createQuiz() {
  if (quesNo < quizQuestions.length) {
    // Set up the question and options
    questionHeading.innerText = `Question No. ${quesNo + 1} of ${quizQuestions.length}`;
    question.innerText = quizQuestions[quesNo].question;
    optiona.value = quizQuestions[quesNo].optiona;
    optionb.value = quizQuestions[quesNo].optionb;
    optionc.value = quizQuestions[quesNo].optionc;
    optiond.value = quizQuestions[quesNo].optiond;
    optionaLabel.innerText = `a: ${quizQuestions[quesNo].optiona}`;
    optionbLabel.innerText = `b: ${quizQuestions[quesNo].optionb}`;
    optioncLabel.innerText = `c: ${quizQuestions[quesNo].optionc}`;
    optiondLabel.innerText = `d: ${quizQuestions[quesNo].optiond}`;
    
    // Update the button text
    submitButton.innerText = quesNo === quizQuestions.length - 1 ? "Submit" : "Next";
  } else {
    // Disable button and show results
    submitButton.disabled = true;
    checkResult();
  }
}

function checkAnswers() {
  let options = document.querySelectorAll(".options");
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      selectedAnswers.push(options[i].value);
      options[i].checked = false; // Uncheck for the next question
      break;
    }
  }
}

function checkResult() {
  let score = 0;
  for (let i = 0; i < actualAnswers.length; i++) {
    if (selectedAnswers[i] === actualAnswers[i]) {
      score++;
    }
  }
  console.log(`Your Score: ${score}/${actualAnswers.length}`);
}

// Button Event Listener
submitButton.addEventListener("click", () => {
  if (quesNo < quizQuestions.length) {
    checkAnswers();
    quesNo++;
    createQuiz();
  }
});

// Initialize the quiz
createQuiz();
