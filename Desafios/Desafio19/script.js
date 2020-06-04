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
                calculaFormulaResolvente(Number(CxA.value), Number(CxB.value), Number(CxC.value))
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

function calculaFormulaResolvente(a, b, c){
    let dentroDaRaiz = 1
    dentroDaRaiz = (Math.pow(b, 2) - 4*a*c)
    if(dentroDaRaiz>0){
        alert (`Podemos continuar ${dentroDaRaiz}`)
    }else{
        alert('ERRO '+ dentroDaRaiz)
    }
    
    /* ()/2*a */

}