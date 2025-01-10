/*
Desafio: Soma de números em um intervalo
Escreva um programa que some todos os números de um intervalo dado pelo usuário.
Use um loop para realizar a soma.
*/

let comeco = Number(prompt('Digite um comeco'))
let fim = Number(prompt('Digite um fim'))
let soma = 0

for(let i=comeco; i<=fim; i++){
  soma = soma + i
}
alert(soma)