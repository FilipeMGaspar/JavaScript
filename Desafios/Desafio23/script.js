let cSelDetalhes = document.querySelector('select#cSelDetalhes')
let cxSubTot = document.querySelector('input#cxSubTot')
let divResultado = document.querySelector('div#resultado')
let totPagamento = []


function addfruta(fruta){
    let qt = prompt("Quantos quilos?")
    
    if((qt==0) || (qt== null)){
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
    colocaNalista(qtd, frut)  
    let preco = colocaNalista(qtd, frut)
    itemOption.text =`${frut}   ${qtd}Kg x ${preco}`
    cSelDetalhes.appendChild(itemOption)    
}

function colocaNalista(qtdKg, qFruta){    
    let paga = 0    

    if ((qtdKg<=5) && (qFruta==="Morango")){
        paga +=  2.50 * qtdKg
        paga = paga.toFixed(2)
        return 2.50
    }else{
        if ((qtdKg>5) && (qFruta==="Morango")){
            paga += 2.20 * qtdKg
            paga = paga.toFixed(2)
            return 2.20
        }
    }   

    if((qtdKg<=5)&&(qFruta==="Maçã")){
        paga +=  1.60 * qtdKg
        paga = paga.toFixed(2)
        return 1.60
    }else{
        if((qtdKg>5)&&(qFruta==="Maçã")){
            paga +=  1.30 * qtdKg
            paga = paga.toFixed(2) 
            return 1.30 
        }
    }

    totPagamento.push(paga) 
    
    calculaSubTotal(totPagamento) 
}


function calculaSubTotal(LstPagar){
    let subtot = 0
    
    // Linha abaixo é para testes
    divResultado.innerHTML = `${LstPagar}` 

    for(pos in LstPagar){
        subtot += Number(LstPagar[pos])
    }
    subtot = subtot.toFixed(2)

    cxSubTot.value = `${subtot}€`
}
