
let valores = []
let num = document.getElementById('txtnum')

function inserir(){
     
    if(num.value.length == 0){
        alert('[ERRO] Nenhum Número detetado!')
    }else{
        verNaLista(Number(num.value), valores)
    }
}

function adicionar(nr){

    let selnum = document.querySelector('select#selnum')
    let item = document.createElement('option')
    valores.push(nr)
    item.text = `Recebi: ${nr}`
    selnum.appendChild(item)
    num.value = ''
    num.focus()
}


function verNaLista(n, l){

    let existe = l.indexOf(n)
    if(existe == -1){
        adicionar(n)
    }else{
        alert(`O Número ${n} já se encontra na lista`)
    }
}