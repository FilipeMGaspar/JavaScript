let selectnum = document.querySelector('select#selectnum')
let txtnun = document.querySelector('input#txtnun')
let valores = []

function iniciar(){
    txtnun.focus()
}

function inserir(){
    if(txtnun.value.length==0){
        alert ('!! [ERRO] !! Número não Informado!')
        txtnun.focus()
    }
    else{
        colocanalista(Number(txtnun.value))
    }
}

function colocanalista(recebenum){
    let item = document.createElement('option')
    item.text = `Adicionou o N.º: ${recebenum}`
    selectnum.appendChild(item)
    txtnun.focus()
    txtnun.value = ''
}