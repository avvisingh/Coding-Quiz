const startButton = document.getElementById('startButton');
const quizSection = document.getElementById('quizSection');

const quizHTMLTemplate = '<div id="timer">This is Timer</div>' +
    '<div id="question-block"><div id="question">This is the question</div><div id="option1">Option 1</div><div id="option2">Option 2</div><div id="option3">Option 3</div><div id="option4">Option 4</div></div>' +
    '<div id="submit-button"><button id="submit">Submit Answer</button></div';

const timer = document.getElementById('timer');
const questionBlock = document.getElementById('question-block');
const question = document.getElementById('question');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');

startButton.addEventListener('click', () => {
    quizSection.innerHTML = quizHTMLTemplate;

    var preliminaryIndex = Math.floor(Math.random() * (Questions.length - 1));
    var questionset = Questions[preliminaryIndex];

    question.textContent = questionset.question;
    option1.textContent = questionset.correctOption;
    option2.textContent = questionset.option1;
    option3.textContent = questionset.option2;
    option4.textContent = questionset.option3;
});