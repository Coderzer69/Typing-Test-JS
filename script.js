const randomSentences = [
    "The cat jumped over the fence.",
    "She laughed loudly at the joke.",
    "Stars twinkled brightly in the sky.",
    "He forgot his keys at home.",
    "Rain fell softly on the rooftop.",
    "They walked slowly through the park.",
    "I found a coin on pavement.",
    "Music played quietly in the background.",
    "The dog barked at the stranger.",
    "He painted the wall bright blue."
];

// Getting access to the input element via its ID
const inputElement = document.getElementById("inp");
const questionElement = document.querySelector(".to_type");
const h2Element = document.querySelector("h2");
const currentQuestionDisplayer = document.querySelector("p");

// Adding an event listener to the input element
inputElement.addEventListener("input", checkTypo);

// Setting a default value of the question
questionElement.innerText = randomSentences[0];

let typedText;
let currentQuestion = 0;

function reset() {
    const randomNumber = Math.floor(Math.random() * randomSentences.length);
    questionElement.innerText = randomSentences[randomNumber];
    currentQuestion = randomNumber;
    currentQuestionDisplayer.innerText = currentQuestion;
}

function checkTypo(event) {
    typedText = event.target.value;

    // Check if text typed is 100% match
    if (typedText.length == randomSentences[currentQuestion].length) {
        if (typedText == randomSentences[currentQuestion]) {
            h2Element.innerText = "You Passed!";
            h2Element.style.background = "rgb(73, 135, 73)";
        } else {
            h2Element.innerText = "You Failed!";
            h2Element.style.background = "rgba(157, 73, 73, 1)";
        }
    } else {
        h2Element.innerText = "";
        h2Element.style.background = "transparent";
    }
}
