let numtestes = document.querySelector('div#notas')

function registanotas(){
    alert('Iniciei o REgisto de notas')
    let NrTestes= document.querySelector('input#txtNrTestes')
    if(NrTestes.value.lenght == 0){
       alert('[ERRO] Impossivel iniciar')
    }else{
        alert (`A sua turma fez ${Number(NrTestes.value) } Testes`)
    }
}