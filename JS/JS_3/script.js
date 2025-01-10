let a = 2
let b = 3
let c = 5
let d = '5'

// Operadores Matematicos
// console.log(c * d) // NaN (Not a Number)
// console.log(c % a) // 1 (Resto da divisão)
/*
adição
subtração
multiplicação
divisão
resto/módulo
*/

// Operadores Relacionais
// console.log(c == d) // true (5 == '5')
// console.log(c === d) // false (5 === '5')
// console.log(c != d) // false (5 != '5')
// console.log(c !== d) // true (5 !== '5')
/*
>
<
>=
<=
==
===
!=
!==
*/

// Operadores Lógicos
// console.log(!c == d && a != b) // false
// console.log(!c === d || a > c) // false
// console.log(!true) // false
/*
AND && E
OR || Ou
NOT ! Não

true = 1
false = 0
*/

// Condição
// Programa que descobre se o número é ímpar ou par
// let num = parseInt(5.45)
// if(typeof(num) == 'number'){

//   if( num < 10 ){
//     console.log('É menor que 10')
//   }else if(num > 10){
//     console.log('É maior que 10')
//   }else{
//     console.log(`Ele é 10`)
//   }

// }else{
//   console.log('Nem é um número')
// }

// Looping
// for
// for (let i = 0; i < 10; i++) {
//   if(i === 5){
//     break
//   }

//   console.log(`${i}. Olá`)
// }

// while
// let i = Number(prompt('Digite um número'))
// while(i != 10){
//   alert(`Olá`)
//   i = Number(prompt('Digite outro número'))
// }


// do....while
// let j = 11
// do{
//   console.log(`${j}. Olá`)
//   j++
// }while(j < 10)



// Desafio: Pedir para o usuario um número
// Retornar: a tabuada de 1 a 10

let num = Number(prompt('Digite um número:'))
let mensagem = `Tabuada do ${num}\n`

for(let i = 1; i <= 10; i++){
  let resultado = num * i
  mensagem += `${num} X ${i} = ${resultado}\n`
}
alert(mensagem)
