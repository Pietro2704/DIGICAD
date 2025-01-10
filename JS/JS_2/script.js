// Operadores Relacionais
// let a = 2
// let b = 3
// let c = 5
// let d = '5'
// let e = true
// let f = 2

// Maior
// console.log(a > b)         // false

// Maior ou igual
// console.log(a >= b)        // false

// Menor
// console.log(c < b)         // false

// Menor ou igual
// console.log(c <= b)        // false

// Igual
// console.log(c == d)        // true

// Estritamente igual
// console.log(c === d)       // false

// Diferente
// console.log(c != d)        // false

// Estritamente diferente
// console.log(c !== d)       // true

// Operadores Lógicos
// AND
// console.log(c == d && c <= b && a > b && c <= d) // false

// OR
// console.log(a > b || c == d) // true

// NOT
// console.log(!c < b) // true

// Condições
// let nota1 = Number(prompt('Digite a primeira nota:'))
// let nota2 = Number(prompt('Digite a segunda nota:'))
// let nota3 = Number(prompt('Digite a terceira nota:'))

// let media = (nota1 + nota2 + nota3) / 3
// alert(`Sua média é: ${media.toFixed(2)}`)

// Se a media for >= 7 -> Aprovado
// Senão Se a media for entre 5 E 6.9 -> Recuperação
// Senão -> Reprovado

// if (media >= 7) {
//   alert('Aprovado')

// } else if (media >= 5 && media < 7) {
//   alert('Recuperação')

// } else {
//   alert('Reprovado')
// }

let idade = Number(prompt('Qual a sua idade?'))
let categoria = ''

if(idade < 6){
  categoria = ''
}else if(idade >= 6 && idade <= 12){
  categoria = 'Infantil'
}else if(idade >= 13 && idade <= 17){
  categoria = 'Juvenil'
}else{
  categoria = 'Adulto'
}

if(categoria === ''){
  alert('Muito novo para competir')
}else{
  alert(`Como você tem ${idade} anos, sua categoria é ${categoria}`)
}