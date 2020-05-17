let cNome  = document.querySelector('input#cNome')
let selNome = document.querySelector('select#selNome')
let pNome = document.querySelector('p#rcbNome')

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
    pNome.style.color = 'black'

    alert(`Nome recebido ${nome}`)
    
    let itemOption = document.createElement('option')
    itemOption.text = `-> ${nome}`
    selNome.appendChild(itemOption)
    nomes.push(nome)
    iniciar()
}

function inverte(){
  
    if(nomes.length == 0){
        pNome.style.color = 'red'
        alert('!! [ERRO] !! Lista de nomes vazia. Por favor insira.')
        iniciar()
    }else{
        alert('Tudo ok Podemos continuar')
    }
}