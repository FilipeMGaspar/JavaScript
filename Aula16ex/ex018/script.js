/*
Adicionar Números entre 1 e 100 validando 

o botão Adicionar adiciona o valor a um array

Apresentando num <select> <option></option> </select>

botão finalizar:
    apresenta o total de valores no Array
    Mostra o maior e o menor valor 
    a Soma de  todo os valores
    e a média dos valores no array

Adicionando novo valor válido através do botão Adicionar    limpa a informação apresentada na segunda div

No caso de a caixa de texto onde o número é adicionado estar vazia vai ser emitido um erro

O programa verifica se tentar finalizar sem dados introduzidos emite o Alerta de ERRO

*/
function adic(){
    let num = document.getElementById('txtnum')

    let res = document.getElementById('result')

    if(num.value.length == 0){
        alert('[ERRO] Nenhum número detectado. Impossivel Adicionar!')
    }else{
        alert('Tudo OK!')
    }
}