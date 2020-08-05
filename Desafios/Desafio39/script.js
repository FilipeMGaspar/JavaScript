let CxSal = document.querySelector('input#CxSal')
let NrDeFilhos = document.querySelector('input#NrDeFilhos')
let vetSalarios = []
let vetFilhos = []

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
    let mediaSalario = 0, mediaFilhos = 0
    let somaSalario = 0, SomaFilhos = 0
    let maiorSalario = 0
    let divresult = document.querySelector('div#result')

   vetSalarios.push(salario)

   vetFilhos.push(numDeFilhos)

    for (pos in vetSalarios){
        somaSalario += vetSalarios[pos]
        
        if(maiorSalario<vetSalarios[pos]){
            maiorSalario = vetSalarios[pos]
        }
    }

    mediaSalario = somaSalario/vetSalarios.length
    mediaSalario = mediaSalario.toFixed(2)
    divresult.innerHTML = `Para uma população de <strong>${vetSalarios.length}</strong> pessoas.`
    divresult.innerHTML += `<p>A Média de Salário é: <strong>${mediaSalario}</strong>€ </p>`

    for (ind in vetFilhos){
        SomaFilhos += vetFilhos[ind]
    }

    mediaFilhos = SomaFilhos/vetFilhos.length
    mediaFilhos = mediaFilhos.toFixed(2)
    divresult.innerHTML += `<p>A Média de Filhos é: <strong>${mediaFilhos}</strong> por habitante</p>`

    divresult.innerHTML += `<p>Maior Salário indicado: ${maiorSalario}€</p>` 
    //divresult.innerHTML += `<p> ${vetFilhos} </p>`

}