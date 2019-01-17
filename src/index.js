const keys = document.querySelectorAll("#keys div");
const input = document.getElementById("screen");
const operators = ["+", "-", "*", "/"];
let decimalAdded = false;

keys.forEach(key => {
  key.addEventListener("click", function(e) {
    const btnVal = this.textContent;
    if (btnVal === "C" || btnVal === "CE") showOutput("", "clear");
    else if (btnVal === "=") getSolution();
    else if (btnVal === "DEL") {
      input.textContent = input.textContent.replace(/.$/, "");
      decimalAdded = false;
    } else if (operators.includes(btnVal)) {
      checkIfOperatorAlreadyExist(btnVal);
    } else if (btnVal === ".") {
      if (!decimalAdded) {
        showOutput(".");
        decimalAdded = true;
      }
    } else showOutput(btnVal);
  });
});

function showOutput(value = "", type = "add") {
  decimalAdded = false;
  if (type === "eval") return (input.textContent = eval(value));
  if (type === "clear") return (input.textContent = "");
  input.textContent += value;
}

function getSolution() {
  decimalAdded = false;
  let equation = input.textContent;
  const lastChar = equation[equation.length - 1];
  if (!equation || equation === "0") return;
  if (operators.includes(lastChar) || lastChar === ".") {
    equation = equation.replace(/.$/, "");
  }
  showOutput(equation, "eval");
}

function checkIfOperatorAlreadyExist(btnVal) {
  decimalAdded = false;
  const inputVal = input.textContent;
  const lastChar = inputVal[inputVal.length - 1];

  if (inputVal !== "" && !operators.includes(lastChar)) {
    return showOutput(btnVal);
  }
  if (inputVal === "" && lastChar === "-") {
    return showOutput("-");
  }
  if (operators.includes(lastChar) && inputVal.length > 1) {
    input.textContent = inputVal.replace(/.$/, btnVal);
  }
}
