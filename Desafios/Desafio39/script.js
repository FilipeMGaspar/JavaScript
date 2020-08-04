let CxSal = document.querySelector('input#CxSal')

document.onload = iniciar()

function iniciar(){
    CxSal.focus()
    CxSal.value = ''
}

function Envia(){
    if(CxSal.value.length == 0){
        alert('!![ERRO]!! Salário não foi informado!')
        iniciar()
    }else{
        
    }
}