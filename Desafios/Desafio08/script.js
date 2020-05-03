let notaAluno = []
let nota = document.querySelector('input#txtNota') 

function registanotas(){
    if(nota.value.length == 0){
        alert('!! [ERRO] !! Nenhoma nota foi informada.')
        nota.focus()
    }else{
        alert('Vamos continuar')
    }
}