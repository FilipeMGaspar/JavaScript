let CxData = document.querySelector('input#CxData')

function FcSelecionar(){
    let dataRecebida = CxData.value;

    let ano = dataRecebida.slice(0,4)
    let mes = dataRecebida.slice(5,7)
    let dia = dataRecebida.slice(8,10)
    alert(`Ano selecionado ${ano}`)
    alert(`Mês selecionado ${mes}`)
    alert(`Dia Selecionado ${dia}`)
}