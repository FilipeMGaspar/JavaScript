let CxA = document.querySelector('input#CxA')
let CxB = document.querySelector('input#CxB')
let CxC = document.querySelector('input#CxC')

function iniciar(){
    CxA.focus()
    CxA.value = ''
}

function FcResolver(){
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
    let x = 0, x1 = 0
    dentroDaRaiz = (Math.pow(b, 2) - 4*a*c)

    if(dentroDaRaiz>0){
        x = ((-b + (Math.sqrt(Math.pow(b, 2) - 4*a*c)))/2*a)
        x = x.toFixed(2)
        
        x1 = ((-b - (Math.sqrt(Math.pow(b, 2) - 4*a*c)))/2*a)
        x1 = x1.toFixed(2)
        mostrarResultados(x, x1)
    }else{        
        alert(`!! [ERRO] !! Impossivel calcular a Raiz Quadrada de ${dentroDaRaiz}`)
    }
}

function mostrarResultados(raiz, raiz1){
    let Divresultado = document.querySelector('div#resultado')
    
    let  sinalDeB, sinalDeC
   
    if (Number(CxB.value)>0){
        sinalDeB = '+'
    }else{
        sinalDeB = ''
    }
    if(Number(CxB.value)>0){
        sinalDeC = '+'
    }else{
        sinalDeC = ''
    }

    Divresultado.innerHTML += `<p>Para a equação ${Number(CxA.value)}X<sup>2</sup> ${sinalDeB} ${Number(CxB.value)}X ${sinalDeC} ${Number(CxC.value)} = 0<p>`
    if(raiz == raiz1){
        Divresultado.innerHTML += `Tem uma raíz<br> X = ${raiz}`
    }else{
        Divresultado.innerHTML += `Tem duas raízes:<br> x = ${raiz} <br> x<sub>1</sub> = ${raiz1}`
    }   

}