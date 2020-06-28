let CxSeltab = document.querySelector('select#CxSeltab')

function iniciar(){
    for(let i=1; i<=10; i++){
        let item = document.createElement('option')

        item.text = `${i}`
        item.value =`${i}`

        CxSeltab.appendChild(item)
    }
}

function calcularTabuada(){
    let divResultado = document.querySelector('div#resultado')
    let nrTabuada = Number(CxSeltab.value)
    alert (nrTabuada)
    divResultado .innerHTML = `<h2>Tabuada do ${nrTabuada}</h2>`
    for (let c=1; c<=10; c++){
        divResultado.innerHTML += `<p>${nrTabuada} x ${c} = </p>`
    }
}