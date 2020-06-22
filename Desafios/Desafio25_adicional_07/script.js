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
        validaNotas(Number(CxNota.value))
    }
}

function validaNotas(notas){
    if((notas>=0) && (notas<=14)){
        
    }
}