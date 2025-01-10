/*
Escreva uma função chamada fizzBuzz que receba um número n e imprima números de 1 a n seguindo estas regras:

Se o número for divisível por 3, imprima "Fizz".
Se o número for divisível por 5, imprima "Buzz".
Se o número for divisível por 3 e 5, imprima "FizzBuzz".
Caso contrário, imprima o próprio número.
*/

// let num = -3
// let resultado = num < 0 ? "É menor que zero" : "Não é menor que zero"
// console.log(resultado)

// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     i % 3 == 0 && i % 5 == 0 ? console.log('FizzBuzz') :
//     i % 3 == 0 ? console.log('Fizz') :
//     i % 5 == 0 ? console.log('Buzz') :
//     console.log(i)
//   }
// }

// fizzBuzz(20)

/*
Calculadora Básica

Crie uma função chamada calculadora que receba três argumentos:
dois números e uma operação matemática (+, -, *, /). 

A função deve realizar a operação e retornar o resultado. Se a operação for inválida, retorne uma mensagem de erro.
*/

// function calculadora(x, y, op) {
//   let resposta

//   switch (op) {
//     case '+':
//       resposta = x + y
//       break

//     case '-':
//       resposta = x - y
//       break

//     case '*':
//       resposta = x * y
//       break

//     case '/':
//       resposta = x / y
//       break

//     default:
//       return 'Operação inválida'
//   }

//   return resposta
// }

// console.log(calculadora(5, 4, '%'))



// Arrow Functions

/*
function Soma(x, y){
  return x + y
}
let soma = Soma(8, 7)
console.log(soma)
*/

// function HelloWorld(){
//   return "Hello world!"
// }

const HelloWorld = () => "Hello world"

const Soma = (x, y) => x + y
let soma = Soma(7, 32)
console.log(soma)

const dobro = x => x * 2
console.log(dobro(10))

const multiplica = (x, y) => {
  const resultado = x * y
  return resultado
}
console.log(multiplica(10, 5))


const calculadora = (x, y, op) =>
  op === "+" ? x + y :
  op === "-" ? x-y : 
  op === "*" ? x*y :
  op === "/" ? x/y:
  "Operação Inválida"

console.log(calculadora(5,3,"-"))
console.log(calculadora(5,12,"+"))
console.log(calculadora(5,3,"%"))