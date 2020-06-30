let CxNum1 = document.querySelector('input#CxNum1')
let CxNum2 = document.querySelector('input#CxNum2')

document.onload = iniciar()

function iniciar(){
    CxNum1.focus()
    CxNum1.value = ''
}

function calcular(){
    let tCxSelOper = document.querySelector('select#tCxSelOper')
    
    if (CxNum1.value.length==0){
        alert ('!![ERRO]!! Valor numérico 1 não informado!')
        iniciar()
    }else{
        if(CxNum2.value.length == 0){
            alert ('!![ERRO]!! Valor numérico 2 não informado!')
            CxNum2.focus()
            CxNum2.value = ''
        }else{
            calculadora(Number(CxNum1.value), Number(CxNum2.value), tCxSelOper.value)
        }    
    }
    
}

function desbloqCxNum2(){
    CxNum2.removeAttribute('disabled')
}

function calculadora(nr1, nr2, op){
    let divResultado = document.querySelector('div#resultado')

    switch (op){
        case "+":
            divResultado.innerHTML = `<p>Soma de ${nr1} com ${nr2} igual a ${nr1+nr2} </p>`
            break
            
    }
}