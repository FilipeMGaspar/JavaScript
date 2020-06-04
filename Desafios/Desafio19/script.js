let CxA = document.querySelector('input#CxA')
let CxB = document.querySelector('input#CxB')
let CxC = document.querySelector('input#CxC')

function iniciar(){
    CxA.focus()
    CxA.value = ''
}

function reseolver(){
    if(CxA.value.length==0){
        alert('!! [ERRO] !! Equação incompleta! Valor de A não informado.')
        iniciar()
    }else{
        desblcCxB()
        if(CxB.value.length==0){
            alert('!! [ERRO] !!Equação incompleta! Valor de B não informado.')
        }else{
            desblcCxC()
            if(CxC.value.length==0){
                alert('!! [ERRO] !!Equação incompleta! Valor de C não informado.')
            }else{
                alert('Tudo ok podemos continuar')
            }
        }
    }
}

function desblcCxB(){
    CxB.removeAttribute('readonly')
    CxB.focus()
}

function desblcCxC(){
    CxC.removeAttribute('readonly')
    CxC.focus()
}