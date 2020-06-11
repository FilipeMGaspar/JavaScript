let cSelDetalhes = document.querySelector('select#cSelDetalhes')
let cxSubTot = document.querySelector('input#cxSubTot')

function addfruta(fruta){
    let qt = prompt("Quantos quilos?")
    let itemOption = document.createElement('option')
    itemOption.text =`${fruta}   ${qt}Kg`
    cSelDetalhes.appendChild(itemOption)

    if ((qt<5) && (fruta==="Morango")){
        alert ('aki')
        let preco = 2.50 * qt
        alert (preco)
        cxSubTot.value = 'Coisa chata'
    }

}