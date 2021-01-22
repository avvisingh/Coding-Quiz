const startButton = document.getElementById("start-button");
const questionText = document.getElementById("question-text");
const answerSpace1 = document.getElementById("answer-space-1");
const answerSpace2 = document.getElementById("answer-space-2");
const answerSpace3 = document.getElementById("answer-space-3");
const answerSpace4 = document.getElementById("answer-space-4");


let questionAnswerBlocks = [questionText, answerSpace1, answerSpace2, answerSpace3, answerSpace4];

questionAnswerBlocks.forEach((item) => {
    item.style.display = 'none';
});

let startQuiz = () => {
    startButton.style.display = 'none';
    questionAnswerBlocks.forEach((item) => {
        item.style.display = 'initial';
    });
}

startButton.addEventListener('click', startQuiz);