let number1 = 0;
let number2 = 0;
let operator = "";
let newNumber = true;
let display = document.getElementById("display");
display.readOnly = true;

function updateDisplay(value) {
  let displayValue = String(value);
  if (displayValue.includes(".")) {
    displayValue = parseFloat(value)
      .toFixed(8)
      .replace(/\.?0+$/, "");
  }
  display.value = displayValue;
}

function clearDisplay() {
  display.value = "0";
}

function clearAll() {
  number1 = 0;
  number2 = 0;
  operator = "";
  newNumber = true;
  updateDisplay(0);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function power(a, b) {
  return a ** b;
}
function sqrt(a) {
  return Math.sqrt(a);
}

function sin(a) {
  return Math.sin(a);
}
function cos(a) {
  return Math.cos(a);
}

function tan(a) {
  return Math.tan(a);
}

function log(a) {
  return Math.log(a);
}

function ln(a) {
  return Math.log(a);
}

function exp(a) {
  return Math.exp(a);
}

function reciprocal(a) {
  return 1 / a;
}

function abs(a) {
  return Math.abs(a);
}

function percent(a) {
  return a / 100;
}

function calculate(a, b, op) {
  switch (op) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    case "^":
      return power(a, b);
    default:
      return b;
  }
}

function equals() {
  if (operator) {
    number2 = parseFloat(display.value);
    let result = calculate(number1, number2, operator);
    updateDisplay(result);
    number1 = result;
    operator = "";
    newNumber = true;
  }
}

function handleOperator(op) {
  if (operator && !newNumber) {
    number2 = parseFloat(display.value);
    number1 = calculate(number1, number2, operator);
    updateDisplay(number1);
  } else {
    number1 = parseFloat(display.value);
  }
  operator = op;
  newNumber = true;
}

function handleDecimal() {
  if (!display.value.includes(".")) {
    display.value += ".";
    newNumber = false;
  }
}

function handleBackspace() {
  display.value = display.value.slice(0, -1);
}

for (let i = 0; i <= 9; i++) {
  document.getElementById(`number-${i}`).addEventListener("click", () => {
    if (newNumber || display.value === "0") {
      display.value = i;
      newNumber = false;
    } else {
      display.value += i;
    }
  });
}

document
  .getElementById("operator-add")
  .addEventListener("click", () => handleOperator("+"));
document
  .getElementById("operator-subtract")
  .addEventListener("click", () => handleOperator("-"));
document
  .getElementById("operator-multiply")
  .addEventListener("click", () => handleOperator("*"));
document
  .getElementById("operator-divide")
  .addEventListener("click", () => handleOperator("/"));
document
  .getElementById("operator-power")
  .addEventListener("click", () => handleOperator("^"));

document
  .getElementById("operator-sin")
  .addEventListener("click", () => handleSingleOperand(sin));
document
  .getElementById("operator-cos")
  .addEventListener("click", () => handleSingleOperand(cos));
document
  .getElementById("operator-tan")
  .addEventListener("click", () => handleSingleOperand(tan));
document
  .getElementById("operator-log")
  .addEventListener("click", () => handleSingleOperand(log));
document
  .getElementById("operator-ln")
  .addEventListener("click", () => handleSingleOperand(ln));
document
  .getElementById("operator-sqrt")
  .addEventListener("click", () => handleSingleOperand(sqrt));
document
  .getElementById("operator-square")
  .addEventListener("click", () => handleSingleOperand((x) => power(x, 2)));
document
  .getElementById("operator-reciprocal")
  .addEventListener("click", () => handleSingleOperand(reciprocal));
document
  .getElementById("operator-abs")
  .addEventListener("click", () => handleSingleOperand(abs));
document
  .getElementById("operator-exp")
  .addEventListener("click", () => handleSingleOperand(exp));
document
  .getElementById("operator-percent")
  .addEventListener("click", () => handleSingleOperand(percent));

document.getElementById("operator-pi").addEventListener("click", () => {
  updateDisplay(Math.PI);
  newNumber = true;
});

document.getElementById("operator-e").addEventListener("click", () => {
  updateDisplay(Math.E);
  newNumber = true;
});

document.getElementById("operator-clear").addEventListener("click", clearAll);
document
  .getElementById("operator-decimal")
  .addEventListener("click", handleDecimal);
document.getElementById("operator-equals").addEventListener("click", equals);
document
  .getElementById("operator-backspace")
  .addEventListener("click", handleBackspace);
document.getElementById("operator-negate").addEventListener("click", () => {
  display.value = (-parseFloat(display.value)).toString();
});

function handleSingleOperand(operation) {
  const currentValue = parseFloat(display.value);
  const result = operation(currentValue);
  updateDisplay(result);
  number1 = result;
  newNumber = true;
}
