function darkMode(){
  body.classList.toggle("dark-mode")
}

function Pintar(){
  for(let i=0; i < p.length;i++){
    p[i].style.color = "blue"
  }
}

function Entrar(){
  quadrado.style.backgroundColor = "blue"
  quadrado.innerHTML = "Entrou"
  quadrado.style.fontSize = "40px"
  quadrado.style.fontFamily = "Arial"
}

function Saiu(){
  quadrado.style.backgroundColor = "red"
  quadrado.innerHTML = "Saiu"
  quadrado.style.fontSize = "40px"
  quadrado.style.fontFamily = "Arial"
}

function Clicou(){
  quadrado.style.backgroundColor = "green"
  quadrado.innerHTML = "Clicou"
  quadrado.style.fontSize = "40px"
  quadrado.style.fontFamily = "Arial"
}

let h1 = document.querySelector("#titulo")
let p = document.querySelectorAll("p")
let body = document.querySelector("body")
let quadrado = document.querySelector('.quadrado')
let botao = document.querySelector("#botao")

quadrado.addEventListener('click', Clicou)
quadrado.addEventListener('mouseenter', Entrar)
quadrado.addEventListener('mouseout', Saiu)

p.forEach(element => {
  element.addEventListener('click', Pintar)
});

botao.addEventListener('click', darkMode)


let linhas = document.querySelectorAll('tr')
for(let i = 1; i < linhas.length; i++){
  let nome = linhas[i].cells[0].textContent
  let idade = parseInt(linhas[i].cells[1].textContent)

  if(idade < 18){
    console.log(`${nome} é menor de idade`)
  }

}

h1.innerHTML = "<em>Manipulando usando DOM</em>"
let escrito = h1.textContent