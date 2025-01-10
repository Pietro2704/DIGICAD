// Jquery ()
/*
O Jquery é um biblioteca do JS leve e poderosa.
Facilita o desenvolvimento web
Simplifica o DOM
*/

// document.querySelector("#titulo")
let h1 = $('#titulo')
let p = $('#texto')
let botao = $('#botao')
let quadrado = $('#quadrado')

// h1.style.color = "red"
h1.css('color', 'red')

// function Funcao(){
//   // p.innerHTML = "alguma coisa"
//   p.text("Você clicou no botão, parabens")
// }

// botao.addEventLister('click', Funcao)
botao.on('click', () => p.text('Você clicou no botão, parabens'))
p.on('mouseenter', () => p.css('color', 'blue'))

quadrado.on('mouseenter', () => {
  quadrado.css('background-color', 'blue')
  quadrado.text('Entrou')
})
quadrado.on('mouseout', () => {
  quadrado.css('background-color', 'red')
  quadrado.text('Saiu')
})
quadrado.on('click', () => {
  quadrado.css('background-color', 'green')
  quadrado.text('Clicou')
})

// AJAX

/*
É uma técnica que permite uma comunicação ASSÍNCRONA com o servidor (enviar e receber dados sem recarregar a página)

Menor carga no servidor
Melhor desempenho e tempo de carregamento
Experiencia com o usuario fica mais interativa
*/
let btn = $('#carregarDados')

function carregarDados() {
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/users',
    type: 'GET',
    success: function (resposta) {
      $('#listaUsuarios').empty() // esvaziei minha lista

      resposta.forEach(usuario => {
        $('#listaUsuarios').append(`<li>${usuario.name}</li>`)
      })
    },

    error: function (erro) {
      alert('Não foi possivel carregar os dados')
      console.error(erro)
    }
  })
}

btn.on('click', carregarDados)