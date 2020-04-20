
let val=[] // criaçaõ de variavel global

function adic(){
    let num = document.getElementById('txtnum')

    if(num.value.length == 0){
        alert(`\u{2639} [ERRO] Nenhum número detectado. Impossivel Adicionar! `)
    }else{
        let nr = Number(num.value)
        if(nr>=1 && nr<=100){            
            adiciona(nr)//função adiciona os valores ao Vetor e os itens ao select

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

function adiciona(numer){
    let divres = document.getElementById('result')
    let selnum =document.getElementById('selnum')

    divres.innerHTML = ''

    val.push(numer)    
    let item = document.createElement('option')
    item.text = `Valor ${numer} foi adicionado`    
    selnum.appendChild(item) 
}

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

     /*
        Mostra o maior e o menor valor 
        a Soma de  todo os valores
        e a média dos valores no array
     */
    
}