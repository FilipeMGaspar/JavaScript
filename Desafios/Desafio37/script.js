let CxNum1 = document.querySelector('input#CxNum1')

document.onload = iniciar()

function iniciar(){
    CxNum1.focus()
    CxNum1.value = ''
}

function calcular(){
    let tCxSelOper = document.querySelector('select#tCxSelOper')
    if (CxNum1.value.length==0){
        alert ('!![ERRO]!! Valor numérico não informado!')
        iniciar()
    }
    
}