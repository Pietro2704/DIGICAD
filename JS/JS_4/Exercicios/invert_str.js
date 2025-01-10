// Escreva um programa que receba uma string e retorne a string invertida.

// Jeito 1
let palavra = 'Palavra' // arvalaP
let palavraInvertida = palavra.split('').reverse().join('')
console.log(palavraInvertida) 

// Jeito 2
let mensagem = ''
for(let i = palavra.length -1; i >= 0; i--){
  mensagem += palavra[i]
}
console.log(mensagem)

// Jeito 3
let nome = "Palavra"
let invertida = ''
let i = nome.length - 1
while(i >= 0){
  invertida += nome[i]
  i--;
}
console.log(invertida)