// Funções
function HelloWorld(){
  return 'Hello World'
}

function somar(num1, num2){
  return num1 + num2
}

function Tabuada(num){
  let mensagem = `Tabuada do ${num}\n`
  for(let i=0; i<=10; i++){
    mensagem += `${num} X ${i} = ${num * i}\n`
  }
  return mensagem
}

function soma_nums(comeco, fim){
  let soma = 0
  for(let i=comeco; i<=fim; i++){
    soma = soma + i
  }
  return soma
}

function soma_imps(comeco, fim){
  let soma = 0
  for(let i=comeco; i<=fim; i++){
    if(i % 2 != 0){
      soma = soma + i
    }
  }
  return soma
}

function par_impar(num){
  if(num % 2 == 0){
    alert('Par')
  }else{
    alert('Impar')
  }
}

function invert_str(palavra){
  let mensagem
  for(let i = palavra.length -1; i >= 0; i--){
    mensagem += palavra[i]
  }
  return mensagem
}

alert(
  Tabuada(
    Number(prompt('Digite um número'))
  )
)