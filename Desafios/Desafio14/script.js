let txtnum = document.querySelector('input#txtnum')
let selectIdade = document.querySelector('select#selectIdade')

function iniciar(){
    txtnum.focus()
}

function inserir(){
    if(txtnum.value.length==0){
        alert('!! [ERRO] !! Ano de Nascimento não foi informado!')
        txtnum.focus()
    }else{
        colocaNalista(Number(txtnum.value))
    }
}

function colocaNalista(anoNascimento){
    let itemOption= document.createElement('option')

    if(anoNascimento>=0){
        itemOption.text = `Inseriu o ano de: ${anoNascimento}`
        selectIdade.appendChild(itemOption)
    }else{
        alert('')
    }

   
}