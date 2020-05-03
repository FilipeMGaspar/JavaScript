let numtestes = document.querySelector('div#notas')
let divResult = document.querySelector('div#resultado')
let NrTestes = document.getElementById('txtNrTestes')

function registanotas(){
    
    if(NrTestes.value.length == 0){
       alert('[ERRO] Número de Testes. Não preenchido!!!')
        NrTestes.focus()
    }else{
        if(Number(NrTestes.value)<0){
            alert(`[ERRO] O Número de Testes Indicado ${Number(NrTestes.value)} não é correcto.`)
            NrTestes.focus()
            NrTestes.value = ''
        }else{ 
            mostraFormDeNotas(Number(NrTestes.value))
        }
    }
}

function mostraFormDeNotas(ntestes){
    
    numtestes.innerHTML = ''
    
    numtestes.innerHTML += `<h1>Gestor de Notas</h1>`
   
    for(let c=1; c<=ntestes; c++){
        let lblnota = document.createElement('label')
        let txtnota = document.createElement('input')
        lblnota.setAttribute('for', `txtnota${c}`)
        lblnota.innerText = `${c}ª Nota: `
        txtnota.setAttribute('type', 'number')
        txtnota.setAttribute('id' , `txtnota${c}`)
        txtnota.style.width = '60px'
        txtnota.style.marginRight = '25px'
        txtnota.style.marginBottom = '15px'
        numtestes.appendChild(lblnota)
        numtestes.appendChild(txtnota)    
    }

    numtestes.innerHTML +='<br>'
    let btnAdiciNota = document.createElement('input')
    btnAdiciNota.setAttribute('type' , 'button')
    btnAdiciNota.setAttribute('value', 'Calcular Média')
    btnAdiciNota.setAttribute('onclick', 'verificaNotas()')
    numtestes.appendChild(btnAdiciNota)
}

function verificaNotas(){
   // alert('O botão Calcular Média foi clicado')
    let nrtestes = Number(NrTestes.value)
    let nomevar = []

    for (let con = 1; con <= nrtestes ; con++){
        alert('O botão Calcular Média foi clicado')
       nomevar.push(`txtnota${con}`)
        //alert(nomevar[c])
    }
    
    divResult.innerHTML += `Variaveis Criadas ${nomevar}`

    //alert(`Calculo da Média de Notas fez ${nrtestes} testes`)

}



function teste(numT){

    numtestes.innerHTML += '<br>'
    let selnotas = document.createElement('select')
    selnotas.setAttribute('id', 'selnotas')
    selnotas.setAttribute('size', `${numT}`)
    selnotas.style.width = '150px'
    selnotas.style.marginTop = '15px'
    numtestes.appendChild(selnotas)
   
    alert (`A sua turma fez ${numT} Testes`)

    divResult.innerHTML += `<p>A sua turma fez ${numT} Testes.</p>` 

}