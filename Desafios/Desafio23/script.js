let cSelDetalhes = document.querySelector('select#cSelDetalhes')
let cxSubTot = document.querySelector('input#cxSubTot')

DivResultado = document.querySelector('div#resultado')


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
    let totPagamento = []
    let paga = 0
    let subtot = 0

    if ((qtdKg<5) && (qFruta==="Morango")){
        paga +=  2.50 * qtdKg
        totPagamento.push(paga)
       
        alert (`Tot a Pagar ${paga}`)

        for(pos in totPagamento){
            subtot += totPagamento[pos]
        }
        DivResultado.innerHtml
        return subtot       
    }
}
