
let val=[] // criaçaõ de variavel global

function adic(){
    let num = document.getElementById('txtnum')

    if(num.value.length == 0){
        alert(`\u{2639} [ERRO] Nenhum número detectado. Impossivel Adicionar! `)
    }else{
        let nr = Number(num.value)
        if(nr>=1 && nr<=100){            
            adiciona(nr)//chamada da função adiciona os valores ao Vetor e os itens ao select
            num.value = ''
        }else{
            alert(`\u{2639} [ERRO] Número Inválido. Insira entre 1 e 100`)
        }

    }
}

function fim(){

    if(val.length==0){
        alert("\u{2639} [ERRO] Nenhum Valor Detectado. Impossivel Finalizar")
    }else{
        calcula()//chamada para a função que calcula a soma a média o maior e o menor, imprimindo na tela
    }
}

//função para adicionar valores ao array e adicionar elementos ao select
function adiciona(numer){

    let divres = document.getElementById('result')
    let selnum =document.getElementById('selnum')

    divres.innerHTML = ''

    val.push(numer)    
    let item = document.createElement('option')
    item.text = `Valor ${numer} foi adicionado`    
    selnum.appendChild(item) 
}

//Função para calcular a soma, a média, o maior e o menor dos elementos do vetor e o número de elementos inseridos no array
function calcula(){
    let divres = document.getElementById('result')
    let nrelem = val.length;

     if(nrelem== 1){
        divres.innerHTML = `<p> No total registámos 
    <strong>${nrelem}</strong> número</p>`
     }else{
        divres.innerHTML = `<p> No total registámos 
    <strong>${nrelem}</strong> números</p>`
     }   
    
    let soma = 0, media
    for (pos in val){
        soma += val[pos]//calculo da soma
        divres.innerHTML += `${val[pos]}; `//blobo de testes
    }
    media =soma/val.length//calculo da média
    
    divres.innerHTML += `<p> A soma é: ${
        soma} <p>`
    divres.innerHTML += `<p>A média é de: ${media}</p>`    
     /*
        Mostra o maior e o menor valor 
        
     */
    
}
