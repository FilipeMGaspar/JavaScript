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
        if (verificaAno(Number(CxAnoNasc.value))){
            alert('Tudo ok podemos continuar!')
        }else{
            alert(`!! [ERRO] !! O Ano de ${Number(CxAnoNasc.value)} não é válido! `)
        }
        
    }

}

function verificaAno(AnoNascimento){
    
}