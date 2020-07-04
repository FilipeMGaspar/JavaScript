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

function verificar(){
    if(vetValores.length == 0){
        alert('!![ERRO]!! A lista de detalhes não contém valores!')
        iniciar()
    }else{
        parOuImpar(vetValores)
    }
}

function parOuImpar(listaDeValores){
    let vetPares = []
    let vetImpares = []

    for (pos in listaDeValores){
        if (listaDeValores[pos]%2==0){
            vetPares.push(listaDeValores[pos])
        }else{
            vetImpares.push(listaDeValores[pos])
        }
    }

    mostraResultados(vetPares, vetImpares)
}

function mostraResultados(lstPar, LstImpar){
    let divResultado = document.querySelector('div#resultado')

    divResultado.innerHTML = `<h2>No total introduziu <span class='foco'>${vetValores.length}</span> números</h2>`
    divResultado.innerHTML += `<h3>Total de números pares: <span class='foco'>${lstPar.length}</span></h3>`
    divResultado.innerHTML += `<h4>São eles o Nr: <span clsss='foco'>${lstPar.sort(function(a, b){return a-b})}</span></h4>`
    
    divResultado.innerHTML += `<h3>Total de números impares: <span class='foco'>${LstImpar.length}</span<h3>`
    divResultado.innerHTML += `<h4>São eles o Nr: <span clsss='foco'>${LstImpar.sort(function(a, b){return a-b})}</span></h4>`
}
