let cNome  = document.querySelector('input#cNome')
let selNome = document.querySelector('select#selNome')

let nomes = []

function iniciar(){
    cNome.focus()
    cNome.value=''
}

function inserir(){
    if(cNome.value.length == 0){
        alert('!! [ERRO] !! Caixa de nome Vazia!')
        iniciar()
    }else{
        colocaNaLista(cNome.value)
    }
}

function colocaNaLista(nome){
    alert(`Nome recebido ${nome}`)
    
    let itemOption = document.createElement('option')
    itemOption.text = `-> ${nome}`
    selNome.appendChild(itemOption)
    nomes.push(nome)
    iniciar()
}

