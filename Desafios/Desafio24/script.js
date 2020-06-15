let cxVal1 = document.querySelector('input#cxVal1')
let CxVal2 = document.querySelector('input#CxVal2')

function iniciar(){
    cxVal1.focus()
    cxVal1.value = ''
}

function calcular(){

    if(cxVal1.value.length==0){
        alert ('!![ERRO]!! Valor 1 não foi informado!')
        iniciar()
    }else{
        alert ('Tudo ok podemos continuar')
    }
}