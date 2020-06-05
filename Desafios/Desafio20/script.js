let CxData = document.querySelector('input#CxData')
let DivResultado = document.querySelector('div#resultado')

function FcSelecionar(){
    let dataRecebida = CxData.value;

    let ano = dataRecebida.slice(0,4)
    let mes = dataRecebida.slice(5,7)
    let dia = dataRecebida.slice(8,10)
    let m = mesSelecionado(mes)

    DivResultado.innerHTML = `<p>Data Selecionada ${dia}-${mes}-${ano}</p>`
    DivResultado.innerHTML +=`<p>Dia: ${dia}</p>`
    DivResultado.innerHTML += `<p>Mês: ${m}</p>`
    DivResultado.innerHTML += `<p>Ano: ${ano}</p>`
}

function mesSelecionado(mesInserido){
    switch (mesInserido){
        case '01':
            return 'Janeiro'
        break
        
        case '02':
            return 'Fevereiro'
        break

        case '03':
            return 'Março'
        break

        case '04':
           return 'Abril'
        break

        case '05':
           return 'Maio'
        break
        

    }
}