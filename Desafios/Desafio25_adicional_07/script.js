let CxNota = document.querySelector('input#CxNota')
let DivResultado = document.querySelector('div#resultado')

document.onload = iniciar()

function iniciar(){
    CxNota.focus()
    CxNota.value = ''
}

function verificaNota(){
    if (CxNota.value.length ==0){
        alert('!![ERRO]!! Nenhuma nota Informada!')
        iniciar()
    }else{
        if(validaNotas(Number(CxNota.value))){
            classificaAlunos(Number(CxNota.value)) 
            iniciar()   
        }else{
            alert (`!![ERRO]!! A nota ${Number(CxNota.value)} não é válida! Indique entre 0 e 20 valores.`)
            iniciar()
        }
    }
}

function validaNotas(notas){
    if((notas>=0) && (notas<=20)){
        return true
    }else{
        return false
    }
}

function classificaAlunos(notaAluno){
    let avaliacao
    if((notaAluno>=0) && (notaAluno<10)){
        avaliacao = 'Insuficiente!'
    }else{
      if(notaAluno<14){
        avaliacao = 'Bom!'
      }else{
          avaliacao = 'Muito Bom!'
      }
    }
    DivResultado.innerHTML += `Com a nota de ${notaAluno} valores.`
    alert (avaliacao)
}