let cxTitulo = document.querySelector('input#cxTitulo')

function iniciar(){
    cxTitulo.focus()
    cxTitulo.value = ''
}

function alterar(){
    if (cxTitulo.value.length==0){
        alert ('!![ERRO]!! Novo título não foi informado!')
        iniciar()
    }else{
        document.title = cxTitulo.value // document.title
    }
}