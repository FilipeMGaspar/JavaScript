let numtestes = document.querySelector('div#notas')

function registanotas(){
    let   NrTestes = document.getElementById('txtNrTestes')
    if(NrTestes.value.length == 0){
       alert('[ERRO] Não foi indicado o Número de Testes')
        NrTestes.focus()
    }else{
        if(Number(NrTestes.value)<0){
            alert(`[ERRO] O Número de Testes Indicado ${Number(NrTestes.value)} não é correcto.`)
            NrTestes.focus()
            NrTestes.value = ''
        }else{   
            alert (`A sua turma fez ${Number(NrTestes.value) } Testes`)
        }
    }
}