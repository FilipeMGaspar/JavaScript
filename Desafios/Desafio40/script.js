let CxNome = document.querySelector('input#CxNome')
let vetNomes = []

document.onload = iniciar()

function iniciar(){
    CxNome.focus()
    CxNome.value = ''
}

function inserir(){

    if(CxNome.value.length==0){
        alert ('!![ERRO]!! Não foi indicado nenhum nome!')
        iniciar()
    }else{
        adicionarNaLista(CxNome.value)
    }
}

function adicionarNaLista(nome){
    let cDtlNomes = document.querySelector('select#cDtlNomes')
    let itenOption = document.createElement('option')

    let result = document.querySelector('div#result')

    vetNomes.push('nome')
    itenOption.text = `NOME: ${nome}`
    cDtlNomes.appendChild(itenOption)

    result.innerHTML = `<p>${vetNomes}</p>`
}