let txtnum = document.querySelector('input#txtnum')
let selnum = document.querySelector('select#selnum')
let divresultado = document.getElementById('resultado')
let btnverifica = document.querySelector('input#btnverifica')
let multiplos = []

function iniciar(){
    txtnum.focus()
}

function inserir(){
    divresultado.innerHTML = ''

   if(txtnum.value.length == 0){
       alert('!! [ERRO] !! Nenhum Número informado!')
       txtnum.focus()
       txtnum.value = ''
   }else{
     colocarNaLista(Number(txtnum.value))
   }
}

function colocarNaLista(numero){

    if(estaNaLista(numero, multiplos)){
        multiplos.push(numero)

        let itemOption = document.createElement('option')
        itemOption.text = `Adicionou o N.º: ${numero}`
        selnum.appendChild(itemOption)
        txtnum.focus()
        txtnum.value = ''
        btnverifica.style.display = 'block'
    }else{
        alert(`!! [ERRO] !! O nùmero ${numero} já se encontara na lista.`)
        txtnum.focus()
        txtnum.value = ''
    }
}

function estaNaLista(num, lista){
        if (lista.indexOf(num) == -1){
            return true
        }else{
            return false
        }
}

function encontar(){

    if(multiplos.length==0){
        alert('!! [ERRO] !! Lista vazia. Impossível encontar os multiplos de 3 e do 5!')
        txtnum.focus()
        txtnum.value = ''
    }else{
        vermultiplos(multiplos)        
    }
}


function vermultiplos(listaDeMultiplos){   
    let contamultiplos = 0

    for (pos in listaDeMultiplos){
        if(listaDeMultiplos[pos]%3 == 0 && listaDeMultiplos[pos] % 5 ==0){
            divresultado.innerHTML += ` ${listaDeMultiplos[pos]} -`
            contamultiplos ++
        }
    }
    if(contamultiplos>0){
        divresultado.innerHTML += ' FIM'
        divresultado.innerHTML += `<br>Foram encontrados <strong>${contamultiplos}</strong>. Multiplos de 3 e do 5`
        btnverifica.style.display = 'none'
    }else{
        divresultado.innerHTML += 'Não foram encontrados <strong>multiplos de 3 e do 5</strong>! <br> Por favor teste o número 15'
    }
}