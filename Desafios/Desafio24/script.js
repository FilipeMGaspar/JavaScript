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
        if (verificaValor(Number(cxVal1.value))){
            alert('OK')
        }else{
            alert (`!![ERRO]!! O valor ${Number(cxVal1.value)} não é válido! Indique maior que 0.`)
            iniciar()
        }
    }
}

function verificaValor(valor){
    if(valor > 0){
        return true
    }else{
        return false
    }
}

function desblocCxVal2(){
    CxVal2.removeAttribute('disabled');
    CxVal2.focus()
}   