let cSelDetalhes = document.querySelector('select#cSelDetalhes')
let cxSubTot = document.querySelector('input#cxSubTot')
let divResultado = document.querySelector('div#resultado')
let cxDesconto = document.querySelector('input#cxDesconto')
let cxTotal = document.querySelector('input#cxTotal')
let desconto = 0
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
    let preco = 0   

    if ((qtd<=5) && (frut==="Morango")){
        preco = 2.50 
        
    }else{
        if ((qtd>5) && (frut==="Morango")){
            preco = 2.20           
        }
    }   

    if((qtd<=5)&&(frut==="Maçã")){
        preco = 1.60         
    }else{
        if((qtd>5)&&(frut==="Maçã")){
            preco = 1.30 
        }
    }
    
    itemOption.text =`${frut}  ${qtd}Kg  x  ${preco}€`
    cSelDetalhes.appendChild(itemOption)
    colocaNalista(qtd, frut)      
}

function colocaNalista(qtdKg, qFruta){    
    let paga = 0    

    if ((qtdKg<=5) && (qFruta==="Morango")){
        paga +=  2.50 * qtdKg
        paga = paga.toFixed(2)
    }else{
        if ((qtdKg>5) && (qFruta==="Morango")){
            paga += 2.20 * qtdKg
            paga = paga.toFixed(2)
        }
    }   

    if((qtdKg<=5)&&(qFruta==="Maçã")){
        paga +=  1.60 * qtdKg
        paga = paga.toFixed(2)
    }else{
        if((qtdKg>5)&&(qFruta==="Maçã")){
            paga +=  1.30 * qtdKg
            paga = paga.toFixed(2)  
        }
    }

    totPagamento.push(paga) 
    
    calculaSubTotal(totPagamento) 
}


function calculaSubTotal(LstPagar){
    let subtot = 0
    let desc = 0
    let total = 0
    
    // Linha abaixo é para testes
    divResultado.innerHTML = `${LstPagar}` 

    for(pos in LstPagar){
        subtot += Number(LstPagar[pos])
    }

    if(subtot>25){
        desc = subtot*(10/100)
        desc = desc.toFixed(2)
    }

    subtot = subtot.toFixed(2)

    total = subtot - desc
    total = total.toFixed(2)
    
    cxSubTot.value = `${subtot}€`
    cxDesconto.value = `${desc}€`
    cxTotal.value = `${total}€`

}
