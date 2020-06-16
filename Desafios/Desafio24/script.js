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
            if(verificaValor(Number(CxVal2.value))){
                alert ('Tudo ok podemos continuar')
            }else{
                alert (`!![ERRO]!! Valor 2: ${Number(CxVal2.value)} não é válido! Indique maior que 0.`)
                CxVal2.focus()
                CxVal2.value = ''
            }
        }else{
            alert (`!![ERRO]!! Valor 1: ${Number(cxVal1.value)} não é válido! Indique maior que 0.`)
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