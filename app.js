let firstNumber = document.getElementById("firstValue");
let secondNumber = document.getElementById("secondValue");
let signal = document.getElementById("signal");
// let total = document.getElementsByClassName("output").value;
// let result = 0;
// total = result.value;
// console.log("total " + total);
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

firstNumber = prompt("enter first ");

secondNumber = prompt("second Number");
if (firstNumber / secondNumber) {
  answer = firstNumber / secondNumber;
  console.log(answer);
}
