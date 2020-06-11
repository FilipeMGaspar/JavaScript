let cSelDetalhes = document.querySelector('select#cSelDetalhes')

function addfruta(fruta){
    let qt = prompt("Quantos quilos?")
    let itemOption = document.createElement('option')
    itemOption.text =`${fruta}   ${qt}Kg`
    cSelDetalhes.appendChild(itemOption)
    //alert (`Fruta: ${fruta} , Comprou ${qt}Kg`)
}