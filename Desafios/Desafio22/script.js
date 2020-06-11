let cSelPalavraInv = document.querySelector('select#cSelPalavraInv')
let Cxpalavra = document.querySelector('input#Cxpalavra')

function iniciar(){
    Cxpalavra.focus()
    Cxpalavra.value=''
}

function inverter(){
    if(Cxpalavra.value.length==0){
        alert('!![ERRO]!! Nenhuma palavra foi indicada!')
        iniciar()
    }else{
        inverteColocaNaLista(Cxpalavra.value)
    }
}

function inverteColocaNaLista(palavra){
    let intemOption = document.createElement('option')
    intemOption.text = palavra.split('').reverse().join('') // função nativa do java script para inverter uma string (ordem de caracteres)
    cSelPalavraInv.appendChild(intemOption)
}