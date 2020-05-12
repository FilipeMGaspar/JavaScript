let txtpeso = document.getElementById('txtpeso')
let txtaltura = document.querySelector('input#txtaltura')

function iniciar(){
    txtpeso.focus()
}


function calcular(){
    if(txtpeso.value.length == 0){
      alert('!! [ERRO] !! Valor do Peso não foi informado!')
      txtpeso.focus()
    }else if(txtaltura.value.length == 0){
        alert('!! [ERRO] !! Valor da Altura não foi informado!')
        txtaltura.focus()
    }else{
        if(Number(txtpeso.value)<=0){
            alert(`!! [ERRO] !! Valor ${Number(txtpeso.value)} para o peso é incorreto!`)
            txtpeso.focus()
            txtpeso.value = ''
        }else{
           alert('tudo ok podemos continuar')
        }
    }
}