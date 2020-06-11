let cSelDetalhes = document.querySelector('select#cSelDetalhes')
let cxSubTot = document.querySelector('input#cxSubTot')

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
    preco = calculaPreco(qtd)
    
}

/*


if ((qt<5) && (fruta==="Morango")){
    alert ('aki')
    preco +=  2.50 * qt
    alert (preco)
    cxSubTot.focus()
    cxSubTot.value = `${preco}€`
}

*/