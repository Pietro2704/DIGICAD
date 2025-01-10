// Classe Pessoa

// Atributos
// nome
// sexo
// peso

// Métodos
// engordar
// emagrecer



// Objetos
// José
// Masculino
// 70kg

// Maria
// Feminino
// 56kg



let pessoa_1 = {
  nome: "José",
  sexo: "M",
  peso: 71.5,

  engordar(peso){
    this.peso = this.peso + peso
  },
  emagrecer(peso){
    this.peso = this.peso - peso
  }
}

let pessoa_2 = {
  nome: "Maria",
  sexo: "F",
  peso: 56.5,

  engordar(peso){
    this.peso = this.peso + peso
  },
  emagrecer(peso){
    this.peso = this.peso - peso
  }
}

let pessoa_3 = {
  nome: "Pietro",
  sexo: "M",
  peso: 82.5,

  engordar(peso){
    this.peso = this.peso + peso
  },
  emagrecer(peso){
    this.peso = this.peso - peso
  }
}

let pessoa_4 = {
  nome: "Lucy",
  sexo: "F",
  peso: 66.5,

  engordar(peso){
    this.peso = this.peso + peso
  },
  emagrecer(peso){
    this.peso = this.peso - peso
  }
}

let pessoas = [pessoa_1, pessoa_2, pessoa_3, pessoa_4]

function renderPessoas(){
  const app = document.querySelector("#app")
  app.innerHTML = ""

  pessoas.forEach((pessoa, index) => {
    const card = document.createElement("div")
    card.classList.add("card")

    card.innerHTML = `
      <h2>${pessoa.nome}</h2>
      <p>Sexo: ${pessoa.sexo}</p>
      <p>Peso: ${pessoa.peso} KG</p>
      <button onclick="alterarPeso(${index}, 5)">+5 kg</button>
      <button onclick="alterarPeso(${index}, -5)">-5 kg</button>
    `
    app.appendChild(card)
  });
}


function alterarPeso(index, valor){
  const pessoa = pessoas[index]
  if(valor > 0){
    pessoa.engordar(valor)
  }else{
    pessoa.emagrecer(-valor)
  }
  renderPessoas()
}

renderPessoas()