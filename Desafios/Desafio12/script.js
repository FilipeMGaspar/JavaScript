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
        alert('Todo ok podemos continuar')
    }
}