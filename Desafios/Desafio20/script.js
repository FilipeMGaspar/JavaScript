let CxData = document.querySelector('input#CxData')

function FcSelecionar(){
    let anoRecebido = CxData.value;

    let ano = anoRecebido.slice(0,4);

    alert(`Ano selecionado ${ano}`)
}