let cNome  = document.querySelector('input#cNome')
let selNome = document.querySelector('select#selNome')
let pNome = document.querySelector('p#rcbNome')
let divresultado = document.querySelector('div#resultado')
let btnIverter = document.querySelector('input#btnIverter')
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
    btnIverter.style.display = 'block'
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
    for (pos in vInverterNomes){
        divresultado.innerHTML += `<p>O nome <strong>${vInverterNomes[pos]}</strong> invertido fica. <bdo dir="rtl"><em>${vInverterNomes[pos]}</em> </bdo></p>`
    }
    pNome.focus()    
    btnIverter.style.display = 'none'

}
