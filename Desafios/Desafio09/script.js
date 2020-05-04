let txtnum = document.querySelector('input#txtnum')
let selnum = document.querySelector('select#selnum')
let btnCalc = document.querySelector('input#btnCalc')
let nrinserido = []

function iniciar(){
    btnCalc.style.display = 'none'
}

function inserir(){
    
    if (txtnum.value.length == 0){
        alert('!! [ERRO] !! nenhum número informado.')
        txtnum.focus()
    }else{
        adicionarNaLista(Number(txtnum.value))
    }
}

function adicionarNaLista(num){
    
   
    let btninsert = document.getElementById('btninsert')
    
    let itemnr = document.createElement('option')

    itemnr.text = `Adicionei o Nº: ${num}`
    selnum.appendChild(itemnr)
    txtnum.value = ''
    txtnum.focus()
    nrinserido.push(num)
    if(nrinserido.length == 5){
        txtnum.style.display = 'none'
        btninsert.style.display = 'none'    
    }
    
    //alert(`Número ${num}`)
}