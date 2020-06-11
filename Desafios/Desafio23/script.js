let cSelDetalhes = document.querySelector('select#cSelDetalhes')
let cxSubTot = document.querySelector('input#cxSubTot')
let divResultado = document.querySelector('div#resultado')
let totPagamento = []


function addfruta(fruta){
    let qt = prompt("Quantos quilos?")

    if(qt==0){
        alert ('!![ERRO]!! Quantidade não indicada!')
    }else{
        if(qt<0){
            alert(`!![ERRO]!! Quantidade de ${qt}Kg não é válida`)
        }else{
           mostraDetalhes(qt, fruta)
        }    
    }
}


function mostraDetalhes(qtd, frut){
    let itemOption = document.createElement('option')
    let preco = 0

    itemOption.text =`${frut}   ${qtd}Kg`
    cSelDetalhes.appendChild(itemOption)
    preco = calculaPreco(qtd, frut)
    cxSubTot.value = `${preco}€`
    
}

function calculaPreco(qtdKg, qFruta){    
    let paga = 0
    let subtot = 0

    if ((qtdKg<5) && (qFruta==="Morango")){
        paga +=  2.50 * qtdKg
        //paga = paga.toFixed(2)
    }else{
        paga +=  2.20 * qtdKg
        //paga = paga.toFixed(2)
    }



    if((qtdKg<5)&&(qFruta==="Maçã")){
        paga +=  1.60 * qtdKg
        //paga = paga.toFixed(2)
    }else{
        paga +=  1.30 * qtdKg
       //paga = paga.toFixed(2)  
    }


    totPagamento.push(paga)

    /*for(pos in totPagamento){
        subtot += totPagamento[pos]
    }*/

    divResultado.innerHTML = `${totPagamento}` 
    return subtot    
}
