let numtestes = document.querySelector('div#notas')

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
            mostraNaTela(Number(NrTestes.value))
        }
    }
}

function mostraNaTela(ntestes){
    numtestes.innerHTML = ''
    numtestes.innerHTML += `<h1>Gestor de Notas</h1>`
    numtestes.innerHTML += `<P>A sua turma fez ${ntestes} Testes.</p>`  
    alert (`A sua turma fez ${ntestes} Testes`)
}