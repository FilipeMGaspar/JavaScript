let CxNome = document.querySelector('input#CxNome')

document.onload = iniciar()

function iniciar(){
    CxNome.focus()
    CxNome.value = ''
}

function inserir(){

    if(CxNome.value.length==0){
        alert ('!![ERRO]!! Não foi indicado nenhum nome!')
        iniciar()
    }else{
        adicionarNaLista(CxNome.value)
    }
}

function adicionarNaLista(nome){
    
}