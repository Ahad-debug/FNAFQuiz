const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  Nollställ();
  visaFråga(shuffledQuestions[currentQuestionIndex]);
}

function visaFråga(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", väljAlternativ);
    answerButtonsElement.appendChild(button);
  });
}

function Nollställ() {
  TabortRättofel(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function väljAlternativ(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  visaRättoFel(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    visaRättoFel(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function visaRättoFel(element, correct) {
  TabortRättofel(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function TabortRättofel(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "What was Phone Guys favorite Animatronis",

    answers: [
      { text: " Foxy", correct: true },
      { text: "Chica", correct: false },
      { text: "Bonnie", correct: false },
      { text: "Freedy", correct: false },
    ],
  },
  {
    question:
      "Which two names are both mentioned in FnaF 2, and also on the gravestones?",
    answers: [
      { text: "Jeremy & Gabriel", correct: false },
      { text: "Gabriel & Susie", correct: false },
      { text: "Susie & Fritz", correct: false },
      { text: "Fritz & Jeremy", correct: true },
      { text: "Cassidy & Charlotte", correct: false },
    ],
  },
  {
    question: "Which animatronics crash your game?",
    answers: [
      { text: "Golden Freddy & Balloon Boy", correct: false },
      { text: "Golden Freddy & Nightmare", correct: true },
      { text: "Nightmare & Mangle", correct: false },
      { text: "Balloon Boy & Mangle", correct: false },
    ],
  },
  {
    question: "Who did the bite of 83? (Debatable!)",
    answers: [
      { text: "Baby (Circus Baby (SL))", correct: true },
      { text: "Fredbear", correct: true },
      { text: "Purple Guy", correct: false },
      { text: "Nightmare", correct: false },
    ],
  },
  {
    question: "Who is the man behind the slaughter?",
    answer: [
      { text: "Freedy", correct: false },
      { text: "FredBear", correct: false },
      { text: "Purple Guy", correct: true },
      { text: "Nightmare", correct: false },
    ],
  },
  {
    question: "Which animatronic is the best?",
    answer: [
      { text: "Freedy", correct: false },
      { text: "Bonnie( Nej Iman, han är inte bäst)", correct: true },
      { text: "Funtime Foxy", correct: true },
      { text: "Foxy", correct: false },
    ],
  },
];
