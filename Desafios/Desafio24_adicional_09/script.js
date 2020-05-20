let cJuros = document.querySelector('input#cJuros')

let cValEmpres = document.querySelector('input#cValEmpres')


function iniciar(){
    cValEmpres.focus()
    cValEmpres.value= ''
}

function ativaCxJuros(){
    if(Number(cValEmpres.value)>=250){
        cJuros.removeAttribute('readonly')
        cJuros.focus()
    }else{
        alert(`!! [ERRO] !! O Valor ${Number(cValEmpres.value)} não é válido para empréstimo. Valor minimo de 250€`)
        cValEmpres.focus()
        cValEmpres.value= '250'
        cJuros.removeAttribute('readonly')
        cJuros.focus()
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
            if(Number(cJuros.value)>=2 && Number(cJuros.value)<=26){
                alert('tudo ok podemos continuar')
            }else{
                alert(`!! [ERRO] !! O valor ${Number(cJuros.value)} não é válido indique entre 2% e 26%.`)
                cJuros.focus()
                cJuros.value= '2'
            }
        }
    }
}