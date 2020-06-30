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
            divResultado.innerHTML = `<p><span class='foco'>${nr1}</span> + <span class='foco'>${nr2}</span> = <span class='foco'>${nr1+nr2}</span> </p>`
            break
        
        case "-":
            divResultado.innerHTML = `<p><span class='foco'>${nr1}</span> - <span class='foco'>${nr2}</span> = <span class='foco'>${nr1-nr2}</span> </p>`
            break
        
        case "x":
            divResultado.innerHTML = `<p><span class='foco'>${nr1}</span> x <span class='foco'>${nr2}</span> = <span class='foco'>${nr1*nr2}</span> </p>`
            break 
    }
}