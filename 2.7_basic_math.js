//First way
function basicMathOps (operation, num1, num2) {
  switch (operation) {
    case '+':
      console.log(num1+num2);
      break;

      case '-':
      console.log(num1-num2);
      break;

      case '*':
      console.log(num1*num2);
      break;

      case '/':
      console.log(num1/num2);
      break;

      default:
        console.log('Not valid operation');
        break;

  }
}

//second way
const basicOp = (operation, value1, value2) => eval(value1+operation+value2);



basicMathOps('+', 4, 7);
basicMathOps('-', 15, 18);
basicMathOps('*', 5, 5);
basicMathOps('/', 49, 7);