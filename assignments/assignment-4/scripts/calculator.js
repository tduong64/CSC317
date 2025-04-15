const display= document.getElementById('display');

function toDisplay(input) {
    display.value += input;

}

function clearDisplay() {
    display.value="";
}

function calculate() {
    try{display.value= secureEval(display.value);

    }
    catch(error){
        display.value="Error"
    }
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

  document.getElementById("plusMinus").addEventListener("click", () => {
    if (display.value !== "0") {
        display.value = (parseFloat(display.value) * -1).toString();
        updateDisplay();
    }
});

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
    "/": "÷",
    "Enter": "=",
    "Esc": "AC",
    "Backspace": "DEL"
};


document.addEventListener("keypress", (event) => {
  display.value += event.key;

  if (event.key == "Enter") {
    display.value= secureEval(display.value)
    
  }


});
