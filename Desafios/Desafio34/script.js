let Cxval = document.querySelector('input#Cxval')

function iniciar() {
    Cxval.focus()
    Cxval.value = ''
}

function verificar(){
    if (Cxval.value.length == 0){
        alert('!![ERRO]!! Nenhum número foi informado!')
        iniciar()
    }else{
        verificaNumeros(Number(Cxval.value))
    }
}

function verificaNumeros(num){
    let divResultado = document.querySelector('div#resultado')

    if (num<0){
        divResultado.innerHTML = `<h2>O número <span class='foco'>${num}</span> é um:</h2>`
        divResultado.innerHTML = `<p> <span class='foco'>Valor Negativo</span> </p>`
    }
}