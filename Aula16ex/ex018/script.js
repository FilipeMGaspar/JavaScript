//Zona de variaveis globais
let val=[] // criaçaõ de variavel global do tipo array.
let divres = document.getElementById('result')
let num = document.getElementById('txtnum')

//função que verifica se a caixa de texto extá vazia  e que chama a função que adiciona os valores ao vetor e os apresenta na tela
function adic(){
   
    if(num.value.length == 0){
        alert(`\u{2639} [ERRO] Nenhum número detectado. Impossivel Adicionar! `)
    }else{
        let nr = Number(num.value)
        
            if(nr>=1 && nr<=100){  
                                 
                adiciona(nr)//chamada da função adiciona os valores ao Vetor e os itens ao select

            }else{
                alert(`\u{2639} [ERRO] Número Inválido. Insira entre 1 e 100`)
            }
    }
}


//função que verifica se o vetor (Array) já contem algum valor e no caso de já não estar vazio chama a função de calculo
function fim(){

    if(val.length==0){
        alert(`\u{2639} [ERRO] Nenhum Valor Detectado. Impossivel Finalizar`)
    }else{
        calcula()//chamada para a função que calcula a soma a média o maior e o menor, imprimindo na tela
    }
}


//função para adicionar valores ao array e adicionar elementos ao select
function adiciona(numer){
    let selnum =document.getElementById('selnum')

    let repet = val.indexOf(numer)//Verifica se o elemento se encontar no ARRAY
   
    divres.innerHTML = ''//Limpa a div onde surgem os resultados

    if(repet == -1){       
        val.push(numer)    
        let item = document.createElement('option')
        item.text = `Valor ${numer} foi adicionado`    
        selnum.appendChild(item)
        
    }else{
        alert(`\u{2639} [ERRO] O Número ${numer} já foi inserido`)
    }

    num.value = ''//limpa o valor contido na caixa de texto

    num.focus()//coloca o cursor a piscar dentro da caixa de texto
}


//Função para calcular a soma, a média, o maior e o menor dos elementos do vetor e o número de elementos inseridos no array
function calcula(){
    let nrelem = val.length
    
    if(nrelem== 1){
        divres.innerHTML = `<p> No total registámos 
    <strong>${nrelem}</strong> número</p>`
     }else{
        divres.innerHTML = `<p> No total registámos 
    <strong>${nrelem}</strong> números</p>`
     }
       
    
    let soma = 0, media
    let maior=val[0]//vamos iniciar o maior com o primeiro valor do vetor
    
    let menor = val[0] //vamos iniciar o menor com o primeiro valor do vetor

    for (pos in val){
        soma += val[pos]//calculo da soma

        //Bloco para verificar qual é o Maior valor dentro do array
        if(maior<val[pos]){
            maior = val[pos]
        }

        //Bloco para verificar qual é o Menor valor dentro do array
        if(menor>val[pos]){
            menor = val[pos]
        }

    }
    media =soma/val.length//calculo da média
    
    divres.innerHTML+=`<p>O <strong>Maior</strong> valor inserido foi: ${maior}</p>`

    divres.innerHTML+= `<p>O Menor valor inserido foi: ${menor}</p>`

    divres.innerHTML += `<p> A soma de todos os valores tem o valor de ${
        soma} <p>`
    divres.innerHTML += `<p>A média dos valores digitados é: ${media}</p>`    
    
}
