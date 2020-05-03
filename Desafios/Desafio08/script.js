let notaAluno = []
let nota = document.querySelector('input#txtNota') 

function registanotas(){
    if(nota.value.length == 0){
        alert('!! [ERRO] !! Nenhoma nota foi informada.')
        nota.focus()
    }else{
        verificaNota(Number(nota.value))
    }
}

function verificaNota(valNota){
    if(valNota < 0 || valNota > 10){
        alert(`!! [ERRO] !! A Nota indicada ${valNota} é Inválida insira de 0 a 10`)
        nota.focus()
        nota.value = ''
    }else{
        adicionaElemento(Number(nota.value))
    }
}

function adicionaElemento(recebNota){
    let selectNotas = document.querySelector('select#selectNotas')
    let itemNota = document.createElement('option')
    itemNota.text = `Recebi de nota: ${recebNota}`
    selectNotas.appendChild(itemNota)
    nota.value = ''
    nota.focus()
    notaAluno.push(recebNota)
    
    let divResultado = document.querySelector('div#resultado')
    divResultado.innerHTML = `${notaAluno}`
}

function calculaMedia(){
    if (notaAluno.length==0){
        alert('!! [ERRO] !! Sem notas adicionadas! Impossivel calcular a Média!')
        nota.focus()
    }else{
        alert('Todo ok podemos continuar')
    }
}

function estaNaLista(notaObtida , ntAluno){
   
}