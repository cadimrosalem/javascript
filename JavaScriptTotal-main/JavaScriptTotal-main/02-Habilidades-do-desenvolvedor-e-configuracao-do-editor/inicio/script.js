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

function calculator(operation, x, y) {
  let result;

  switch (operation) {
    case "add":
      result = add(x, y);
      console.log("Resultado da adição:", result);
      break;
    case "subtract":
      result = subtract(x, y);
      console.log("Resultado da subtração:", result);
      break;
    case "multiply":
      // Vamos adicionar um breakpoint aqui para depuração
      result = multiply(x, y);
      console.log("Resultado da multiplicação:", result);
      break;
    case "divide":
      result = divide(x, y);
      console.log("Resultado da divisão:", result);
      break;
    default:
      console.log("Operação inválida");
  }
}

// Chame a função calculator com diferentes operações e valores
calculator("add", 10, 5);
calculator("subtract", 20, 8);
calculator("multiply", 7, 3);
calculator("divide", 100, 4);
