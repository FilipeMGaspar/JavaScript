let txtpeso = document.getElementById('txtpeso')
let txtaltura = document.querySelector('input#txtaltura')

function iniciar(){
    txtpeso.focus()
}


function calcular(){
    if(txtpeso.value.length == 0){
      alert('!! [ERRO] !! Valor d Peso não foi informado!')
      txtpeso.focus()
    }else if(txtaltura.value.length == 0){
        alert('!! [ERRO] !! Valor da Altura não foi informado!')
        txtaltura.focus()
    }else{
        alert('Todo ok podemos continuar')
    }
}