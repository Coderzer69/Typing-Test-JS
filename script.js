let typedText = "";

function print(event) {
  typedText = event.target.value;

  // Check if text typed is 100% match
  if (typedText.length == 10) {
    if (typedText == "The quick!") {
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

// Getting access to the input element via its ID
const inputElement = document.getElementById("inp");

// Adding an event listener to the input element
inputElement.addEventListener("input", print);

const h2Element = document.querySelector("h2");
