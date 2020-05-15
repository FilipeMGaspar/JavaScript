let txtnum = document.querySelector('input#txtnum')
let selectIdade = document.querySelector('select#selectIdade')
let divresultado = document.querySelector('div#resultado')
let idade = []
anoAtual = new Date
let estouNoAno = anoAtual.getFullYear()

function iniciar(){
    txtnum.focus()
    txtnum.value=''
    divresultado.innerHTML = ''
}

function inserir(){
    if(txtnum.value.length==0){
        alert('!! [ERRO] !! Ano de Nascimento não foi informado!')
        iniciar()
    }else{
        colocaNalista(Number(txtnum.value))
    }
}

function colocaNalista(anoNascimento){
    let itemOption= document.createElement('option')
    let anoMinimo = estouNoAno - anoNascimento 
    if(anoMinimo <= 130 && anoNascimento<=estouNoAno){
        if (estaNaLista(anoNascimento, idade)){
            itemOption.text = `Inseriu o ano: ${anoNascimento}`
            selectIdade.appendChild(itemOption)
            idade.push(anoNascimento)
            iniciar()
        }else{
            alert(`O ano de ${anoNascimento} já se encontra na Lista!`)
            iniciar()
        }
    }else{
        alert(`O ano de ${anoNascimento} é inválido! ??? A sua idade seria de: ${anoMinimo} anos???`)
        iniciar()
    }
}

function estaNaLista(ano, LstIdade){
    if (LstIdade.indexOf(ano)==-1){
        return true
    }else{
        return false
    }
}

function maiorDeIdade(){
    if (idade.length==0){
        alert('!! [ERRO] !! Nenhum ano encontrado na lista!')
        iniciar()
    }else{
        voceTemAnos(idade)
    }
}

function voceTemAnos(listaIdade){

    let souMaior = 0
    let souMenor = 0

    for (pos in listaIdade){
        let anosdevida = estouNoAno - listaIdade[pos]
        if(anosdevida>=18){
            souMaior++
        }else{
            souMenor++
        }
    }
    imprimeresultados(souMenor, souMaior)
}


function imprimeresultados(menoridd, maioridd){
    let nrRegistos = idade.length
    divresultado.innerHTML += `<p>Dos ${nrRegistos} registos inseridos encontrei: </p>`
    
    if(maioridd>0){
        divresultado.innerHTML += `<p><strong>${maioridd}</strong> com mais de 18 anos. Indicado como: <mark style="background-color: green;color: white; padding: 3px;">Maior de Idade</mark></p>`
    }

    if(menoridd>0){
        divresultado.innerHTML += `<p><strong>${menoridd}</strong> com menos de 18 anos. Indicado como: <mark style="background-color: #894730; color: white; padding: 3px;">Menor de Idade</mark></p>`
    }
}