// Crie uma função chamada calculadora que receba três argumentos:
// dois números e uma operação matemática (+, -, *, /).
// A função deve realizar a operação e retornar o resultado.
// Se a operação for inválida, retorne uma mensagem de erro.

function calculadora(num1, num2, operacao){
  let result;
  if(operacao === '+'){
    result = num1 + num2
  }else if(operacao === '-'){
    result = num1 - num2
  }else if(operacao === '*'){
    result = num1 * num2
  }else if(operacao === '/'){
    result = num1 / num2
  }

  return result
}