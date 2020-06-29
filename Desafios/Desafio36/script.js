let CxNum = document.querySelector('input#CxNum')
let divReseultado = document.querySelector('div#resultado')

document.onload = iniciar()

function iniciar(){
    CxNum.focus()
    CxNum.value = ''
}

function calcular(){
    if(CxNum.value.length==0){
        alert ('!![ERRO]!! Valor não informado!')
        iniciar()
    }else{
        let val = Number(CxNum.value)
        let fat = 1
        
        for(let i=1; i<=val; i++){
            fat *= i
        }
        divReseultado.innerHTML = `${val}! = ${fat}`
    }
}