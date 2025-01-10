let num = Number(prompt('Digite um número:'))
let mensagem = `Tabuada do ${num}\n`

for(let i =1; i<=10; i++){
  mensagem += `${num} X ${i} = ${num * i}\n`
}
alert(mensagem)
/*
num X 1 = resultado
num X 2 = resultado
num X 3 = resultado
num X 4 = resultado
*/