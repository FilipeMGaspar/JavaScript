let CxAnoNasc = document.querySelector('input#CxAnoNasc')
let GenSelecionado = document.getElementsByName('Genero')
anoAtual = new Date
let estouNoAno = anoAtual.getFullYear()
let VetGeneros = []
let VetIdades = []


function inicar(){
    CxAnoNasc.focus()
    CxAnoNasc.value=''
}

function FcAdicionar(){
    if(CxAnoNasc.value.length == 0){
        alert('!!! [ERRO] !!! Ano de nascimento não foi informado!')
        inicar()
    }else{
        if (verificaAno(Number(CxAnoNasc.value))){
            if(RadioGeneroSelecionado()){
                colocarNalista(Number(CxAnoNasc.value), GenSelecionado)
            }else{
                alert('!! [ERRO] !! Género não foi indicado. (Feminino ou Masculino)!')
            }
        }else{
            alert(`!! [ERRO] !! O Ano de ${Number(CxAnoNasc.value)} não é válido! Voce teria ${estouNoAno - Number(CxAnoNasc.value)} Anos`)
        }
        
    }

}

function verificaAno(AnoNascimento){
    if((estouNoAno - AnoNascimento > 0)  && (estouNoAno - AnoNascimento < 130)){
        return true
    }else{
        return false
    }
}

function RadioGeneroSelecionado(){
    if ((GenSelecionado[0].checked==true) || (GenSelecionado[1].checked==true)){
       return true
   }else{
        return false
   }
}

function colocarNalista(AnoEmQueNasceu, LstGeneros){
    let cSelGenero = document.querySelector('select#cSelGenero')
    let itemOption = document.createElement('option')
    let AnosDeIdade 
    let Genero = '' 

    for(let pos=0; pos<LstGeneros.length; pos++){
            
        if(LstGeneros[pos].checked){
            Genero = LstGeneros[pos].value
        }
    }
    AnosDeIdade = estouNoAno - AnoEmQueNasceu 
    itemOption.text =`Idade: ${AnosDeIdade} | Gen: ${Genero}`
    cSelGenero.appendChild(itemOption)
    VetGeneros.push(Genero)
    VetIdades.push(AnosDeIdade)
    CxAnoNasc.focus()
    CxAnoNasc.value= ''
}

function FcVerificar(){
    if((VetIdades.length == 0) || VetGeneros.length==0){
        alert('!! [ERRO] !! Lista de detalhes Vazia!')
        inicar()
    }else{
        alert('Tudo ok Podemos continuar!')
    }
}