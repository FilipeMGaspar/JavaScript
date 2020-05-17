let cNome  = document.querySelector('input#cNome')
let selNome = document.querySelector('select#selNome')
let pNome = document.querySelector('p#rcbNome')
let divresultado = document.querySelector('div#resultado')
let nomes = []

function iniciar(){
    cNome.focus()
    cNome.value=''
    divresultado.innerHTML = ''
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
        nomesInvertidos(nomes)
    }
}

function nomesInvertidos(vInverterNomes){
    alert ('entrei aki')
    for (pos in vInverterNomes){
        divresultado.innerHTML += `<p>${vInverterNomes[pos]} invertido fica. <bdo dir="rtl">${vInverterNomes[pos]} </bdo></p>`
    }
}
