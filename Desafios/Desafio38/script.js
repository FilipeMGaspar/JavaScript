let CxNum = document.querySelector('input#CxNum')

document.onload = iniciar()

function iniciar(){
    CxNum.focus()
    CxNum.value = ''
}

function Adicionar(){
    if(CxNum.value.length == 0){
        alert('!![ERRO]!! Número não foi informado!')
        iniciar()
    }else{
        alert ('Tudo ok podemos continuar!')
    }
}