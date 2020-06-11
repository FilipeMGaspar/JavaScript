let cSelDetalhes = document.querySelector('select#cSelDetalhes')
let cxSubTot = document.querySelector('input#cxSubTot')

function addfruta(fruta){
    let qt = prompt("Quantos quilos?")
    let itemOption = document.createElement('option')
    let preco = 0

    itemOption.text =`${fruta}   ${qt}Kg`
    cSelDetalhes.appendChild(itemOption)

    if ((qt<5) && (fruta==="Morango")){
        alert ('aki')
        preco +=  2.50 * qt
        alert (preco)
        cxSubTot.focus()
        cxSubTot.value = `${preco}€`
    }

}