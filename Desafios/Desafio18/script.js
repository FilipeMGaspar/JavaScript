let CxAnoNasc = document.querySelector('input#CxAnoNasc')

function inicar(){
    CxAnoNasc.focus()
    CxAnoNasc.value=''
}

function FcAdicionar(){
    if(CxAnoNasc.value.length == 0){
        alert('!!! [ERRO] !!! Ano de nascimento não foi informado!')
        inicar()
    }else{
        alert('Tudo ok podemos continuar!')
    }

}