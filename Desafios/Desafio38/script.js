let CxNum = document.querySelector('input#CxNum')
let cSelNum = document.querySelector('select#cSelNum')

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
        adicionarNaLista(Number(CxNum.value))
    }
}

function adicionarNaLista(num){
    let intenOption = document.createElement('option')

    intenOption.text = `Nº: ${num}`
    cSelNum.appendChild(intenOption)
}