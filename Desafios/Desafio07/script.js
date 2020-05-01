
let valores = []
let num = document.getElementById('txtnum')
let divResult = document.querySelector('div#result')


function inserir(){
     
    if(num.value.length == 0){
        alert('[ERRO] Nenhum Número detetado!')
    }else{
        verNaLista(Number(num.value), valores)
    }
}

function adicionar(nr){

    let selnum = document.querySelector('select#selnum')
    let item = document.createElement('option')
    valores.push(nr)
    item.text = `Recebi: ${nr}`
    selnum.appendChild(item)
}


function verNaLista(n, l){

    let existe = l.indexOf(n)
    if(existe == -1){
        adicionar(n)
    }else{
        alert(`O Número ${n} já se encontra na lista`)
    }
    num.value = ''
    num.focus()
    divResult.innerHTML = ''
}

function termina(){
    if (valores.length == 0){
        alert('[ERRO] - Impossivel Terminar! Sem Valores na Lista')
    }else{
        calcula(valores)       
    }
}

function calcula(l){
    let somaPares = 0
    let somaprimos = 0 
    let nrdivisoes = 0

        for (pos in l){
           
            if(l[pos]%2 == 0){
                //Número PAR
                somaPares += l[pos]
            }

            let auxdiv = l[pos]
            for(let conta=1; conta<=l[pos];conta++){
                if(auxdiv % conta == 0){
                    nrdivisoes ++
                }
            }
            if(nrdivisoes == 2){
                somaprimos += l[pos]
            }
           nrdivisoes = 0
        } 
       mostraNaTela(somaPares, somaprimos) 
}
function mostraNaTela(par, primo){
    
   divResult.innerHTML += `<p>o Número de valores <strong>Inseridos</strong> e: ${valores.length}</p>`
   
    divResult.innerHTML += `<p>A soma dos Números <strong>Pares</strong> é: ${par}</p>`
   
    divResult.innerHTML += `<p>A soma dos números <strong>Primos</strong> é: ${primo}</p>` 
}