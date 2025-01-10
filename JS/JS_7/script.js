/*
Contexto do Exercício:
Você é contratado por uma escola para criar um sistema simples de perguntas e respostas que será usado por estudantes no laboratório de informática. O sistema deve exibir uma pergunta e permitir que o estudante digite sua resposta em um campo de texto. Ao clicar em "Enviar", a aplicação deve verificar se a resposta está correta e mostrar uma mensagem de feedback.

Objetivo:
Criar uma página web interativa que use JavaScript para manipular o DOM e implemente a lógica de verificação da resposta.

Requisitos:
Crie uma página HTML com:
Um elemento <h1> para o título da atividade.
Um <p> para exibir a pergunta.
Um <input> para o estudante digitar a resposta.
Um botão Enviar.
Um elemento <div> para exibir o feedback (se a resposta está correta ou errada).
Use JavaScript para:
Manipular o DOM e capturar o valor digitado pelo usuário.
Comparar a resposta do usuário com a resposta correta.
Exibir uma mensagem de "Correto!" ou "Errado, tente novamente!" no <div>.









// Exercícios de Matriz

// Exercício 1: Notas de alunos

/*
Você é professor(a) e possui uma tabela com as notas de cada aluno em diferentes provas. Cada linha representa um aluno, e cada coluna é uma prova. Seu objetivo é calcular a média de notas de cada aluno para ver quem está acima da média.
*/


// Jeito 1
let notas = [
  ["A", 4, 8.5, 6, 5],
  ["B", 9, 7, 8.5, 6],
  ["C", 5.5, 6, 7.5, 8],
  ["D", 8, 9, 7, 8.5],
  ["E", 4, 7.5, 6, 5],
  ["F", 9, 8.5, 6, 10]
]
let media
for(let i=0; i<=notas.length-1; i++){
  media=0
  for(let j=; j<=notas[i].length-1; j++){
    if(j!==0){
      media += notas[i][j]
    }
  }
  console.log(`A média de ${notas[i][0]} é ${(media/4).toFixed(1)}`)
}



// Jeito 2

//Recebe um array de arrays notas como parÃ¢metro
function calculoMediaAlunos(notas){
  //Verifica se o array estÃ¡ vazio.
  if(!notas || notas.length === 0){
  return "NÃ£o ha notas para calcular a mÃ©dia."
  }
  //Criei um array medias para armazenar as mÃ©dias de cada aluno.
  let medias = []
  //Itera sobre cada aluno (linha) usando forEach
  notas.forEach(aluno => {
      // Calcula a soma das notas do aluno usando reduce
      let somaNotas = aluno.reduce((total, nota) => total + nota, 0)

      //Calcula a mÃ©dia dividindo a soma pela quantidade de notas.
      let media = somaNotas / aluno.length
      medias.push(media)
      
  });
  return medias
}
//Cria um array notasAlunos representando as notas de 6 alunos.
let notasAlunos = [
  [9, 9, 9, 8],
  [6, 5, 7, 6],
  [10, 9, 8, 8],
  [5,5, 5, 5,5, 8],
  [10, 9, 5, 6],
  [8, 6, 7, 8]
]
//Chama a funÃ§Ã£o calcularMediaAlunos passando o array de notas
let mediasCalculadas = calculoMediaAlunos(notasAlunos)

//console.log(mediasCalculadas)

function verificarAprovacao(media, notaMinima = 7){
  return media >= notaMinima ? "Aprovado" : "Reprovado"

}
mediasCalculadas.forEach(media => {
  //console.log(verificarAprovacao(media)) // teste de mesa
  console.log(`O resultado ${verificarAprovacao(media)},  ${media}`)
});




// Exercício 2: Tabela de produtos

/*
Você trabalha em uma loja e precisa analisar os produtos disponíveis. Cada produto tem informações como nome, preço e estoque, armazenadas em uma tabela. Seu objetivo é listar todos os produtos com preços acima de um determinado valor, para destacar as mercadorias de maior valor.
*/
