let firstNumber = document.getElementById("firstValue");
let secondNumber = document.getElementById("secondValue");
let signal = document.getElementById("signal");
let result = 0;
function calculate(event) {
  event.preventDefault();

  Number(firstNumber.value);
  Number(secondNumber.value);
  switch (signal.value) {
    case "+":
      result = Number(firstNumber.value) + Number(secondNumber.value);
      document.getElementById("answer").innerHTML = result;
      break;
    case "-":
      restextContentOutputult = firstNumber.value - secondNumber.value;
      document.getElementById("answer").innerHTML = result;
      break;
    case "*":
      result = firstNumber.value * secondNumber.value;
      document.getElementById("answer").innerHTML = result;
      break;
    case "/":
      result = firstNumber.value / secondNumber.value;
      document.getElementById("answer").innerHTML = result;
      break;
    case "%":
      result = firstNumber.value % secondNumber.value;
      document.getElementById("answer").innerHTML = result;
      break;
    default:
      return 0;
  }
}
