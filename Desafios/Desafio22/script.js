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
        alert('tudo ok Podemos continuar')
    }
}