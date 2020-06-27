let Cxval = document.querySelector('input#Cxval')

function iniciar() {
    Cxval.focus()
    Cxval.value = ''
}

function verificar(){
    if (Cxval.value.length == 0){
        alert('!![ERRO]!! Nenhum número foi informado!')
        iniciar()
    }else{
        alert ('Tudo ok podemos continuar')
    }
}