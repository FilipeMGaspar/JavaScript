let notaAluno = []
let txtnota = document.querySelector('input#txtNota') 
let divResultado = document.querySelector('div#resultado')

function registanotas(){
    if(txtnota.value.length == 0){
        alert('!! [ERRO] !! Nenhoma nota foi informada.')
        txtnota.focus()
    }else{
        verificaNota(Number(txtnota.value))
    }
}

function verificaNota(valNota){
    if(valNota < 0 || valNota > 10){
        alert(`!! [ERRO] !! A Nota indicada ${valNota} é Inválida insira de 0 a 10`)
        txtnota.focus()
        txtnota.value = ''
    }else{
        adicionaElemento(Number(txtnota.value))
    }
}

function adicionaElemento(recebNota){
    let selectNotas = document.querySelector('select#selectNotas')
    let itemNota = document.createElement('option')
    itemNota.text = `Recebi de nota: ${recebNota}`
    selectNotas.appendChild(itemNota)
    txtnota.value = ''
    txtnota.focus()
    notaAluno.push(recebNota)
    divResultado.innerHTML = ''
}

function calculaMedia(){

    if (notaAluno.length==0){
        alert('!! [ERRO] !! Sem notas adicionadas! Impossivel calcular a Média!')
        txtnota.focus()
    }else{
        
        let soma = 0
        let media = 0
        
        for(pos in notaAluno){
            soma += notaAluno[pos] 
        }
        media = soma/notaAluno.length
        sitacaoDoAluno(media)
    }
}

function sitacaoDoAluno(mediaDaNota){

    alert(`A média da sua nota ${mediaDaNota}` )

}
