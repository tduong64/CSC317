const display= document.getElementById('display');

function toDisplay(input) {
    display.value += input;

}

function clearDisplay() {
    display.value="";
}

function percentage() {
  calculate();
  display.value = display.value / 100
}

function calculate() {

    if (/\/0(?!\d)/.test(display.value)) {
      display.value= "Error";
    }


    try{display.value= secureEval(display.value);

    }
    catch(error){
        display.value="Error"
    }
}


function deleteRecent() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}




function secureEval(expression) {
    const safePattern = /^[0-9+\-*/%.() ]+$/;
    if (!safePattern.test(expression)) {
      throw new Error("Invalid characters in expression.");
    }
    try {
      return Function('"use strict"; return (' + expression + ')')();
    } catch (e) {
      throw new Error("Error evaluating expression.");
    }
  }

  function flashButton(id) {
    const button = $(id);
    if (!button) return;
  
    button.classList.add("pressed");
    setTimeout(() => {
      button.classList.remove("pressed");
    }, 100);
  }

  function $(id) {
    return document.getElementById(id);
  }

  document.getElementById("plusMinus").addEventListener("click", () => {
    if (display.value !== "0") {
        display.value = (parseFloat(display.value) * -1).toString();
        updateDisplay();
    }
});




document.addEventListener("keydown", function(event) {

  const key = event.key;

   //todo define keyMap 
  const keyMap = {
    "0":"0",
    "1":"1",
    "2":"2",
    "3":"3",
    "4":"4",
    "5":"5",
    "6":"6",
    "7":"7",
    "8":"8",
    "9":"9",
    "*": "×",
    "+": "+",
    "-": "-",
    ".": ".",
    "/": "÷",
    "Enter": "=",
    "Esc": "AC",
    "backspace": "DEL"
};
  // Perform calculator logic

  if ("0123456789+-*/.%".includes(key)) {

    display.value += event.key;

  } else if (key === "Enter") {

    event.preventDefault(); // this prevents the form from being submitted

    calculate(display.value);

  } else if (key === "Escape") {

    clearDisplay();

  } else if (key === "Backspace") {

    deleteRecent();

  }

  // Apply visual feedback

  const btnId = keyMap[key]; // keyMap needs to be defined above

  if (btnId) {

    flashButton(btnId); // flashButton needs to be defined. I gave you this already.

  }
  
});
