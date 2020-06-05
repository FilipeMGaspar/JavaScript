let CxData = document.querySelector('input#CxData')
let DivResultado = document.querySelector('div#resultado')

function FcSelecionar(){
    let dataRecebida = CxData.value;

    let ano = dataRecebida.slice(0,4)
    let mes = dataRecebida.slice(5,7)
    let dia = dataRecebida.slice(8,10)

    DivResultado.innerHTML = `<p>Data Selecionada ${dia}-${mes}-${ano}</p>`
    DivResultado.innerHTML +=`<p>Dia: ${dia}</p>`
    DivResultado.innerHTML += `<p>Mês: ${mes}</p>`
    DivResultado.innerHTML += `<p>Ano: ${ano}</p>`
   /* alert(`Ano selecionado ${ano}`)
    alert(`Mês selecionado ${mes}`)
    alert(`Dia Selecionado ${dia}`)*/
}