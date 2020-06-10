let CxValor = document.querySelector('input#CxValor')
let vetValores = []

function iniciar(){
    CxValor.focus()
    CxValor.value=''
}

function adicionar(){

    if(CxValor.value.length==0){
        alert('!! [ERRO] !! Não foi indicado nenhum valor! ')
        iniciar()
    }else{
        colocarNaLista(Number(CxValor.value))
    }
}

function colocarNaLista(valor){
    let CselValAdd = document.querySelector('select#CselValAdd')

    let itemOption = document.createElement('option')

    itemOption.text = ` ${valor}`

    CselValAdd.appendChild(itemOption)
    
    vetValores.push(valor)       
    iniciar()
}