let CxNum = document.querySelector('input#CxNum')
let cSelNum = document.querySelector('select#cSelNum')
let vetValores = []

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

    if (estanaLista(num, vetValores)){
        intenOption.text = `Nº: ${num}`
        cSelNum.appendChild(intenOption)
        vetValores.push(num)
        iniciar()
    }else{
        alert(`!![ERRO]!! O número ${num} já se encontra na lista!`)
        iniciar()
    }
}

function estanaLista(nr, lstValores){

    if(lstValores.indexOf(nr)==-1){
        return true
    }else{
        return false
    }
}