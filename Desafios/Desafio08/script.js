let numtestes = document.querySelector('div#notas')
let divResult = document.querySelector('div#resultado')

function registanotas(){
    let   NrTestes = document.getElementById('txtNrTestes')
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
        let txtnota = document.createElement('input')
        txtnota.setAttribute('type', 'number')
        txtnota.setAttribute('id' , `txtnota${c}`)
        numtestes.appendChild(txtnota)    
    }

    let selnotas = document.createElement('select')
    selnotas.setAttribute('id', 'selnotas')
    selnotas.setAttribute('size', `${ntestes}`)
    selnotas.style.width = '150px'
    numtestes.appendChild(selnotas)
   
    alert (`A sua turma fez ${ntestes} Testes`)

    divResult.innerHTML += `<p>A sua turma fez ${ntestes} Testes.</p>` 
}