let CxValor = document.querySelector('input#CxValor')
let vetValores = []

function iniciar(){
    CxValor.focus()
    CxValor.value=''
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
        alert('Tudo ok podemos continuar')
    }
}