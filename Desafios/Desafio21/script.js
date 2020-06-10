let CxValor = document.querySelector('input#CxValor')

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
    alert (`Recebi o valor ${valor}`)
}