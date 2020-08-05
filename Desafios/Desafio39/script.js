let CxSal = document.querySelector('input#CxSal')
let NrDeFilhos = document.querySelector('input#NrDeFilhos')

document.onload = iniciar()

function iniciar(){
    CxSal.focus()
    CxSal.value = ''
}

function Envia(){
    if(CxSal.value.length == 0){
        alert('!![ERRO]!! Salário não foi informado!')
        iniciar()
    }else{
        if (salariCorrecto(Number(CxSal.value))){
            adicionarNaLista(Number(CxSal.value),Number(NrDeFilhos.value))
        }else{
            alert (`!![ERRO]!! O salário de ${Number(CxSal.value)}€ não é válido`)
            iniciar()
         }
    }
}

function salariCorrecto(valorDoSalario){
    if(valorDoSalario > 0){
        return true
    }else{
        return false
    }
}

function adicionarNaLista(salario, numDeFilhos){
   let vetSalarios = []
   let vetFilhos = []
   let divresult = document.querySelector('div#result')

   vetSalarios.push(salario)

   vetFilhos.push(numDeFilhos)

    divresult.innerHTML = `<p> ${vetSalarios}€ </p>`
    divresult.innerHTML += `<p> ${vetFilhos} </p>`

}