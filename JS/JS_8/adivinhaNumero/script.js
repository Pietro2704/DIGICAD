let num = Math.floor(Math.random() * 100) + 1
let vidas = 7

let guessInput = document.querySelector("#guess-input")
let guessButton = document.querySelector("#guess-button")
let message = document.querySelector("#message")
let livesCount = document.querySelector("#lives-count")

function Jogar(){
  let chute = parseInt(guessInput.value)
  if(!chute || chute < 1 || chute > 100){
    message.innerHTML = "Por favor, insira um número válido"
    return
  }

  vidas--

  if(chute === num){

    message.innerHTML = "Parabéns!! Acertou"
    guessButton.disabled = true

  }else if(vidas > 0){
    message.innerHTML = chute < num ? "Tente um número maior" : "Tente um número menor"

  }else{
    message.innerHTML = `Perdeu Playboy, o número era ${num}`
    guessButton.disabled = true

  }

  livesCount.innerHTML = vidas

}

guessButton.addEventListener('click', Jogar)