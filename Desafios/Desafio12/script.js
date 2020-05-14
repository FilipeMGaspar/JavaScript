let selectnum = document.querySelector('select#selectnum')
let txtnun = document.querySelector('input#txtnun')
let valores = []

function iniciar(){
    txtnun.focus()
}

function inserir(){
    if(txtnun.value.length==0){
        alert ('!! [ERRO] !! Número não Informado!')
        txtnun.focus()
    }
    else{
        colocanalista(Number(txtnun.value))
    }
}

function colocanalista(recebenum){
    let btninserir = document.querySelector('input#btninserir')
    let item = document.createElement('option')
   
    if(valores.length >= 0 && valores.length<5){
        if(estaNaLista(recebenum)){
            valores.push(recebenum)
            item.text = `Adicionou o N.º: ${recebenum}`    
            selectnum.appendChild(item)    
            txtnun.focus()
            txtnun.value = ''    
        }else{
            alert(`!! [ERRO] !! O Número ${recebenum} encontrado na lista!`)
            txtnun.focus()
            txtnun.value = ''
        }
    }else{
        btninserir.style.display = 'none'
        alert(`Limite de 5 números foi atingido! O número ${recebenum} não foi adicionado.`)
        txtnun.style.display = 'none'
    }
}

function estaNaLista(vernumnlista){
     let encontrado = valores.indexOf(vernumnlista)
    if(encontrado == -1){
        return true
    }else{
        return false
    }
}