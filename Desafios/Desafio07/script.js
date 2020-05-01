
let valores = []
let num = document.getElementById('txtnum')


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
}

/* Falta a Função para finalizar */
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
                alert(`O NR: ${l[pos]} é PAR`)
            }

            let auxdiv = l[pos]
            for(let conta=1;conta<=l[pos];conta++){
                if(auxdiv %conta == 0){
                    nrdivisoes ++
                }
            }
            if(nrdivisoes == 2){
                alert(`O número ${l[pos]} é primo`)
            }else{
                alert(`O Número ${l[pos]} NÃO É PRIMO`)
            }
           
        }
        alert('Vamos trabalhar sempre.Vamos chatiar o pai e a mãe.Feliz dia da mãe \u{1F60D}')    
}