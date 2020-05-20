let cJuros = document.querySelector('input#cJuros')

let cValEmpres = document.querySelector('input#cValEmpres')


function iniciar(){
    cValEmpres.focus()
    cValEmpres.value= ''
}

function ativaCxJuros(){
    cJuros.removeAttribute('readonly')
}

function calcular(){
        
    if(cValEmpres.value.length == 0){
        alert ('!! [ERRO] !! Valor de Empréstimo não indicado.')
        iniciar()
    }else{
        alert('tudo ok podemos continuar')
    }
}