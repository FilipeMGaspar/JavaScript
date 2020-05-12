let txtpeso = document.getElementById('txtpeso')
let txtaltura = document.querySelector('input#txtaltura')

function iniciar(){
    txtpeso.focus()
}


function calcular(){
    if(txtpeso.value.length==0){
      alert('!! [ERRO] !! Valor do Peso não foi informado!')
      txtpeso.focus()
    }else if(txtaltura.value.length == 0){
        alert('!! [ERRO] !! Valor da Altura não foi informado!')
        txtaltura.focus()
    }else{
        if(Number(txtpeso.value)<=0){
            alert(`!! [ERRO] !! valor: ${Number(txtpeso.value)} para o Peso é incorreto!`)
            txtpeso.focus()
            txtpeso.value = ''
        }else if (Number(txtaltura.value)<=0 || Number(txtaltura.value)>=3){
            alert(`!! [ERRO] !! O valor: ${Number(txtaltura.value)} para a Altura é inválido!`)
            txtaltura.focus()
            txtaltura.value = ''
        }else{
           alert('tudo ok podemos continuar')
        }
    }
}