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
let val=[] // criaçaõ de variavel global

function adic(){
    let num = document.getElementById('txtnum')

    if(num.value.length == 0){
        alert(`\u{2639} [ERRO] Nenhum número detectado. Impossivel Adicionar! `)
    }else{
        let nr = Number(num.value)
        if(nr>=1 && nr<=100){            
            adiciona(nr)//função adiciona os valores ao Vetor e os itens ao select

        }else{
            alert(`\u{2639} [ERRO] Número Inválido. Insira entre 1 e 100`)
        }

    }
}

function fim(){
    
    let selnum =document.getElementById('selnum')

    if(val.length==0){
        alert("\u{2639} [ERRO] Nenhum Valor Detectado. Impossivel Finalizar")
    }else{
        alert('Tudo ok, falta bloco do programa.')
    }
}

function adiciona(numer){
    let selnum =document.getElementById('selnum')
    val.push(numer)    
    let item = document.createElement('option')
    item.text = `Valor ${numer} foi adicionado`    
    selnum.appendChild(item) 
}