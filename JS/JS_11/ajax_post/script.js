$("#enviar").on('click', ()=>{

  let nome = $("#nome").val()
  let cargo = $("#cargo").val()

  let dados = {
    name: nome,
    job: cargo
  }

  $.ajax({
    url: "https://reqres.in/api/users",
    type: "POST",
    contentType: 'application/json',
    data: JSON.stringify(dados),
    success: function(resposta){
      $("#resposta").text(JSON.stringify(resposta, null, 2))
    },
    error: function(erro){
      $("#resposta").text(`ERRO: ${erro}`)
    }
  })
})