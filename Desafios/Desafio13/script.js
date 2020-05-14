let txtnum = document.querySelector('input#txtnum')
let selnum = document.querySelector('select#selnum')
let multiplos = []

function iniciar(){
    txtnum.focus()
}

function inserir(){
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
        alert('Tudo ok podemos continuar')
    }
}

