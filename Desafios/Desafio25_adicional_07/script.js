let CxNota = document.querySelector('input#CxNota')

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
        }else{
            alert (`!![ERRO]!! A nota ${Number(CxNota.value)} não é válida! Indique entre 0 e 14 valores.`)
            iniciar()
        }
    }
}

function validaNotas(notas){
    if((notas>=0) && (notas<=14)){
        return true
    }else{
        return false
    }
}