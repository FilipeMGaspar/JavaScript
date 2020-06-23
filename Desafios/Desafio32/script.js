function msg(val){
    alert (`Selecionou o número: ${val}`)
}


function mostraMsg(){
    let Cxval = document.querySelector('input#Cxval')
    alert (`Na caixa de testo estava o número ${Number(Cxval.value)}`)
    Cxval.focus()
    Cxval.value = ''
}