const startButton = document.getElementById("start-button");
const questionText = document.getElementById("question-text");
const rulesBlock = document.getElementById("rules-container");
const answerSpace1 = document.getElementById("answer-space-1");
const answerSpace2 = document.getElementById("answer-space-2");
const answerSpace3 = document.getElementById("answer-space-3");
const answerSpace4 = document.getElementById("answer-space-4");
const answerOptions = document.getElementsByClassName("options");
const nextContainer = document.getElementById("next-container");
const timer = document.getElementById("timer");

const questionSet = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    correct: "<script>",
    option1: "<scripting>",
    option2: "<js>",
    option3: "<javascript>",
  },
  {
    question:
      "What is the correct JavaScript syntax to change the content of the following HTML element: \n <p id='demo'>This is a demonstration.</p>",
    correct: "document.getElementById('demo').innerHTML = 'Hello World!';",
    option1: "document.getElementById('p').innerHTML = 'Hello World!';",
    option2: "document.getElementByName('p').innerHTML = 'Hello World!';",
    option3: "#demo.innerHTML = 'Hello World!';",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    correct: "Both the <head> section and the <body> section are acceptable",
    option1: "<head> section",
    option2: "<body> section",
    option3: "<footer> section",
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    correct: "<script src='xxx.js'>",
    option1: "<script name='xxx.js'>",
    option2: "<script href='xxx.js'>",
    option3: "<script xxx.js>",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    correct: "alert('Hello World!');",
    option1: "alertBox('Hello World!');",
    option2: "prompt('Hello World!');",
    option3: "msg('Hello World!');",
  },
  {
    question: "How do you create a function in JavaScript?",
    correct: "function myFunction() {//code}",
    option1: "function = myFunction()",
    option2: "function init myFunction() {//code}",
    option3: "function:myFunction()",
  },
  {
    question: "How do you call a function named 'myFunction'?",
    correct: "myFunction()",
    option1: "call myFunction()",
    option2: "myFunction(){}",
    option3: "The function is called when you declare it.",
  },
  {
    question: "How do you write an 'If' statement in JavaScript?",
    correct: "if (condition) {//Code to execute}",
    option1: "IF (condition) {//Code to execute}",
    option2: "if {condition} {//Code to execute}",
    option3: "IF {condition} {//Code to execute}",
  },
  {
    question: "How does a 'FOR' loop start?",
    correct: "for (i = 0; i < 4; i++) {//Code to execute}",
    option1: "for (i = 0; i < 5) {//Code to execute}",
    option2: "for (i = 1 to 5) {//Code to execute}",
    option3: "for (i <= 5; i++) {//Code to execute}",
  },
  {
    question: "How do you write multi-line comments in your JavaScript?",
    correct: "/* comments inside */",
    option1: "// comments inside //",
    option2: "<-- comments inside -->",
    option3: "[-- comments inside --]",
  },
];

nextContainer.style.display = "none";
let defaultNotDisplayed = [
  questionText,
  answerSpace1,
  answerSpace2,
  answerSpace3,
  answerSpace4,
  timer,
];

defaultNotDisplayed.forEach((item) => {
  item.style.display = "none";
});

let startQuiz = () => {
  startButton.style.display = "none";
  rulesBlock.style.display = "none";
  defaultNotDisplayed.forEach((item) => {
    item.style.display = "initial";
  });
  loadQuestionAndCheck();
};

startButton.addEventListener("click", startQuiz);

let loadQuestionAndCheck = () => {
  let questionOrder = [];
  //Quesiton order is initialised to an empty array
  //The below function will generate a random number between 0 and (questionSet.length -1) and will then push that number to the question Order array - first checking to see
  //whether or not questionOrder already has that number
  //The application will then display questions by iterating through each element within questionOrder
  for (let i = 0; i < questionSet.length; i++) {
    generateOrderIndex(questionOrder);
    console.log(questionOrder);
  }

  let indexed = [];
  let answerSpaces = [answerSpace1, answerSpace2, answerSpace3, answerSpace4];
  //indexed is initialised to an empty array
  //The below function will generate a random number between 1 and 4 and will then push that number to indexed - first checking to see whether or not indexed already contains that value.
  for (let i = 0; i < 4; i++) {
    generatePlacementIndex(indexed);
    console.log(indexed);
  }

  //This is the forEach loop which places the options in boxes in a randomised order
  questionOrder.forEach((index) => {
    let currentQuestion = questionSet[index];
    let currentQuestionArr = Object.values(currentQuestion);
    console.log(currentQuestionArr);
    questionText.innerHTML = currentQuestionArr[0];
    for (let p = 0; p < 4; p++) {
      let placement = indexed[p];
      answerSpaces[p].innerHTML = currentQuestionArr[placement];
    }
  });
  let timer = 60;
  countdown(timer);
};

let countdown = (timeLimit) => {
  timer.innerHTML = `You have ${timeLimit} seconds left!`;
  setInterval(() => {
    timeLimit--;
    timer.innerHTML = `You have ${timeLimit} seconds left!`;
  }, 1000);
};

let generateOrderIndex = (arr) => {
  let currentIndex = Math.floor(Math.random() * questionSet.length);
  console.log(currentIndex);
  if (arr.includes(currentIndex)) {
    generateOrderIndex(arr);
  } else {
    arr.push(currentIndex);
  }
};

let generatePlacementIndex = (arr) => {
  let placementIndex = Math.floor(Math.random() * 4) + 1;
  if (arr.includes(placementIndex)) {
    generatePlacementIndex(arr);
  } else {
    arr.push(placementIndex);
  }
};
