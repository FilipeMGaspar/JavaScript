let cJuros = document.querySelector('input#cJuros')

let cValEmpres = document.querySelector('input#cValEmpres')


function iniciar(){
    cValEmpres.focus()
    cValEmpres.value= ''
}

function ativaCxJuros(){
    if(verificaValorEmprestado(Number(cValEmpres.value))){
        cJuros.removeAttribute('readonly')
        cJuros.focus()
    }else{
        alert(`!! [ERRO] !! O Valor ${Number(cValEmpres.value)} não é válido para empréstimo. Valor minimo de 250€`)
        caixaDeJurosativa()
    }
}

function calcular(){
        
    if(cValEmpres.value.length == 0){
        alert ('!! [ERRO] !! Valor de Empréstimo não indicado.')
        iniciar()
    }else{
        if (cJuros.value.length == 0){
            alert('!! [ERRO] !! Valor de juros não indicado')
            cJuros.focus()
            cJuros.value= ''
        }else{
            if(validaJuros(Number(cJuros.value))){
                alert('tudo ok podemos continuar')
            }else{
                alert(`!! [ERRO] !! O valor ${Number(cJuros.value)} não é válido indique entre 2% e 26%.`)
                cJuros.focus()
                cJuros.value= ''
            }
        }
    }
}

function verificaValorEmprestado(Vempresta){
    if(Vempresta>=250){
        return true
    }else{
        return false
    }
}

function caixaDeJurosativa(){
    cValEmpres.value= '250'
    cJuros.removeAttribute('readonly')
    cJuros.focus()
}

function validaJuros(valorDosJuros){
    if(valorDosJuros>=2 && valorDosJuros<=26){
        return true
    }else{
        return false
    }
}