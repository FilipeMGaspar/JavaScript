let txtpeso = document.getElementById('txtpeso')
let txtaltura = document.querySelector('input#txtaltura')
let divresultado = document.querySelector('div#resultado')

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
            calculaimc(Number(txtpeso.value), Number(txtaltura.value))
        }
    }
}

function calculaimc(peso , altura){
    let imc = peso / (altura*altura)
    let arredondaimc = imc.toFixed(2)//imc.toFixed(2) coloca o valor com duas casas décimais
    verSitucao(peso, altura, arredondaimc)    
}

function verSitucao(pesa, mede, imccalc){
   
    divresultado.innerHTML =`<p>Para o peso de ${pesa}Kg e altura de ${mede}m</p>`
    divresultado.innerHTML +=`<p>O seu IMC é de: ${imccalc}</p>`
    
    if(imccalc>=30){    
        divresultado.innerHTML += `<p>Sinto muito, mas o seu IMC é de ${imccalc}kg/m<sup>2</sup> O que indica: Obesidade</p>`    
    }

}