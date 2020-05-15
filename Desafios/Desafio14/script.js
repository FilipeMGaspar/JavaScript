let txtnum = document.querySelector('input#txtnum')
let selectIdade = document.querySelector('select#selectIdade')
let idade = []

function iniciar(){
    txtnum.focus()
    txtnum.value=''
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

    if(anoNascimento>=0){
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
        alert(`O ano ${anoNascimento} é inválido`)
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