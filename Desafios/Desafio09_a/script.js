let divresultado = document.querySelector('div#resultado')
let txtnum = document.querySelector('input#txtnum')
let selnum = document.querySelector('select#selnum')
let btnCalc = document.querySelector('input#btnCalc')
let nrinserido = []
let expoente = []
let txtexp = document.getElementById('txtexp')

function iniciar(){
    btnCalc.style.display = 'none'
}

function inserir(){
    
    if (txtnum.value.length == 0 || txtexp.value.length == 0){
        alert('!! [ERRO] !! nenhum número informado.')
        txtnum.focus()
    }else{
        adicionarNaLista(Number(txtnum.value), Number(txtexp.value))
    }
}

function adicionarNaLista(num , exp){
    
   
    let btninsert = document.getElementById('btninsert')
    
    let itemnr = document.createElement('option')

    itemnr.text = `${num} elevado a: ${exp}`
    selnum.appendChild(itemnr)
    txtnum.value = ''
    txtexp.value = ''
    txtnum.focus()
    nrinserido.push(num)
    expoente.push(exp)
    if(nrinserido.length == 5){
        txtnum.style.display = 'none'
        txtexp.style.display = 'none'
        btninsert.style.display = 'none'
        btnCalc.style.display = 'block'    
    }
}

function calcular(){
    for(pos in nrinserido){
        divresultado.innerHTML += `<p>O número ${nrinserido[pos]} elevado a ${expoente[pos]} tem o valor de: ${Math.pow(nrinserido[pos], expoente[pos])}</p>`
    }
}