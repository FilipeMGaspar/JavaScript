let cxVal1 = document.querySelector('input#cxVal1')
let CxVal2 = document.querySelector('input#CxVal2')
let DivResultado = document.querySelector('div#resultado')

function iniciar(){
    cxVal1.focus()
    cxVal1.value = ''
    CxVal2.value = ''
}

function calcular(){

    if(cxVal1.value.length==0){
        alert ('!![ERRO]!! Valor 1 não foi informado!')
        iniciar()
    }else{
        if (verificaValor(Number(cxVal1.value))){
            if(verificaValor(Number(CxVal2.value))){
                DivResultado.innerHTML = ''
                calculaMMC(Number(cxVal1.value), Number(CxVal2.value))//Função para Calcular o MMC - mínimo múltiplo comum
                MDCcalculo(Number(cxVal1.value), Number(CxVal2.value))//Função para Calcular o MDC - máximo divisor comum
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

//Função para Calcular o MMC - mínimo múltiplo comum
function calculaMMC(valor1, valor2){
    let multval1 = 1
    let multval2 = 1
    let maior = 0 
    let mmc = 0

    if(valor1>valor2){
        maior = valor1
    }else{
        maior = valor2
    }    
    
    for(var c=1; c<=maior; c++){
        multval1 = valor1 * c
        for (var i=1; i<=maior; i++){            
            multval2 = valor2 * i
   
            if(multval1 == multval2){
                c = maior
                i = maior
                mmc = multval2
            }
        }
    }
    DivResultado.innerHTML += `<br><p>Mínimo Múltiplo Comum entre <strong>${valor1}</strong> e <strong>${valor2}</strong> é: <strong>${mmc}</strong></p>`
}

//Função para Calcular o MDC - máximo divisor comum
function MDCcalculo(val1, val2){
    let resto = 1
    let div = 0
    let mdc = 0

    while(resto!=0){
        if (val1>val2){
            resto = val1 % val2
            if(resto !=0){
                div = val2
                val2 = resto
                val1 = div
            }else{
                mdc = val2
            } 
        }else{
            resto = val2 % val1
            if(resto !=0){
                div = val1
                val1 = resto
                val2 = div
            }else{
                mdc = val1
            } 
        }
    }
    DivResultado.innerHTML += `<br><p>Máximo Divisor Comum entre <strong>${val1}</strong> e <strong>${val2}</strong> é: <strong>${mdc}</strong></p>`

    iniciar()
}