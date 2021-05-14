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
    question: "Who is the man behind the slaughter?",
    answers: [
      { text: "Purple guy", correct: true },
      { text: "Freddy", correct: false },
      { text: "Nightmare", correct: false },
      { text: "Slender man", correct: false },
    ],
  },
  {
    question:
      "Which two names are both mentioned in FnaF 2, and also on the gravestones",
    answers: [
      { text: "Jeremy & Gabriel", correct: false },
      { text: "Gabriel & Susie", correct: false },
      { text: "Susie & Fritz", correct: false },
      { text: "Fritz & Jeremy", correct: true },
      { text: "Cassidy & Charlotte", correct: false },
    ],
  },
  {
    question: "Who did the bite of 83? (Debatable!)",
    answers: [
      { text: "Baby(Circus Baby)", correct: true },
      { text: "Purple Guy", correct: false },
      { text: "FredBear", correct: true },
      { text: "Nightmare", correct: false },
    ],
  },
  {
    question: "Which animatronic is the best?",
    answers: [
      { text: "Freedy", correct: false },
      { text: "Bonnie( Nej Iman, han är inte bäst)", correct: false },
      { text: "Funtime Foxy", correct: true },
      { text: "Foxy", correct: false },
    ],
  },
  {
    question: "Fick jag A?",
    answers: [
      { text: "Nej du kopierade koden", correct: false },
      { text: "Ja för Sebbe är en king", correct: true },
      { text: "*Freedy jumspscare*", correct: true },
    ],
  },
];
