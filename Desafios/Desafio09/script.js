let txtnum = document.querySelector('input#txtnum')
let selnum = document.querySelector('select#selnum')

function inserir(){
    
    if (txtnum.value.length == 0){
        alert('!! [ERRO] !! nenhum número informado.')
        txtnum.focus()
    }else{
        adicionarNaLista(Number(txtnum.value))
    }
}

function adicionarNaLista(num){

    let itemnr = document.createElement('option')
    itemnr.text = `Adicionei o Nº: ${num}`
    selnum.appendChild(itemnr)
    
    //alert(`Número ${num}`)
}