// Peça ao usuário dois números inteiros (início e fim de um intervalo).
// Some todos os números ímpares dentro desse intervalo e mostre o resultado.

let comeco = Number(prompt('Digite um comeco'))
let fim = Number(prompt('Digite um fim'))
let soma = 0

for(let i=comeco; i<=fim; i++){
  // verificar se é impar
  if(i % 2 != 0){
    soma = soma + i
  }
}
alert(soma)


