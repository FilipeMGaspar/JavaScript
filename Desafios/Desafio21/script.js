let CxValor = document.querySelector('input#CxValor')
let DivResultado = document.querySelector('div#resultado')
let vetValores = []

function iniciar(){
    CxValor.focus()
    CxValor.value=''
    DivResultado.innerHTML = ''
}

function adicionar(){

    if(CxValor.value.length==0){
        alert('!! [ERRO] !! Não foi indicado nenhum valor! ')
        iniciar()
    }else{
        colocarNaLista(Number(CxValor.value))
    }
}

function colocarNaLista(valor){
    let CselValAdd = document.querySelector('select#CselValAdd')

    if (valorEstaNaLista(valor, vetValores)){
        let itemOption = document.createElement('option')
         itemOption.text = ` ${valor}`
        CselValAdd.appendChild(itemOption)    
        vetValores.push(valor)       
        iniciar()
    }else{
        alert(`!![ERRO]!! O Valor ${valor} já se encontra na lista!`)
        iniciar()
    }
}


function valorEstaNaLista(num, lstValores){
    if(lstValores.indexOf(num)==-1){
        return true
    }else{
        return false
    }
}

function ondenaCresEdecres(){
    if(vetValores.length==0){
        alert('!![ERRO]!! Não adicionou nenhum valor á lista!')
        iniciar()
    }else{
       ordemCrescente(vetValores)
       ordemDecrescente(vetValores)
    }
}

function ordemCrescente(listaDeValores){
    listaDeValores.sort(function(a, b){return a-b})
    DivResultado .innerHTML += `<p>Ordem Crescente: ${listaDeValores}</p>`
}

function ordemDecrescente(listaValores){
    listaValores.sort(function(a, b){return b-a})
    DivResultado.innerHTML += `<p>Ordem decrescente: ${listaValores}</p>`
}

/*
 Nas funções ordemCrescente e ordemDecrescente 
    utilizamos .sort(function(a, b){return b-a})
    function(a, b){return b-a} e sort(function(a, b){return a-b} que vão efectuar as comparações.

    Quando chamamos o método .sort() para comparar dois valores este retorna um valor que pode ser:
     ..: Negativo
     ..: Zero
     ..: Positivo
    
     Exemplo:

     Se no vetor tivermos o valor 10 e 15, quando o método .sort() chamar a função pra comparar function(a, b) a função vai ficar function(10, 15).

     a função function(10, 15) efectua o seguinte calculo return a-b neste exemplo ficaria 10 - 15 retornando o valor -5 valor negativo

     O método .sort() ao abter um valor negativo vai ordenar colocando colocando o 10 com menor que o 15

    Ordem cerscente:

        10 - 15 - .....
     
    Ordem Decerscente:
    
        15 - 10 - ......
*/