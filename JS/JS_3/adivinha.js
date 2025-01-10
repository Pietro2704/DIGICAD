/*
Desafio: Jogo de Adivinhação de Números em JavaScript

Objetivo:
Crie um jogo de adivinhação de números usando JavaScript. 
O jogador tem algumas tentativas para adivinhar o número sorteado pelo computador entre 1 e 100.
Após cada tentativa, o jogo informará se o número escolhido é maior ou menor que o número sorteado e quantas tentativas ainda restam.
O jogo termina quando o jogador acerta o número ou fica sem tentativas.

Requisitos do Jogo:
O computador irá gerar um número aleatório entre 1 e 100 (inclusive).
O jogador deve escolher um número entre 1 e 100 para tentar adivinhar o número sorteado.
O jogador terá algumas tentativas para adivinhar o número correto.

Após cada tentativa, o computador informará:
Se o número do jogador é menor ou maior do que o número sorteado.
O número de tentativas restantes.

Se o jogador acertar o número, o jogo termina e uma mensagem será exibida: "Acertou!".
Se o jogador ficar sem tentativas, uma mensagem será exibida informando que o número correto era e o jogo será encerrado.
*/

// Computador escolhe um numero
let x = Math.floor(Math.random() * 100) + 1 // 0 -> 100

// colocar as vidas
let vidas = 7

// Começa a jogar -> looping
while(vidas > 0){
  // chute = Digite um numero
  let chute = parseInt(prompt(`Chute um número, você tem ${vidas} chance(s)`))
  // Verificar se acertei
  if(chute === x){
    alert("ACERTOU!!")
    break
  }else{
    vidas--
    // Verificar se vidas chegou em 0
    if(vidas === 0){
      alert(`Perdeu Playboy!! O número era ${x}`)
      break
    }
    // Verificar SE chute É MAIOR QUE O x
    if(chute > x){
      // Tente um numero menor
      alert(`Tente um número menor`)
    }else{
      // Tente um numero maior
      alert(`Tente um número maior`)
    }
  }
}
