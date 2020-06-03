let CxAnoNasc = document.querySelector('input#CxAnoNasc')
let GenSelecionado = document.getElementsByName('Genero')
let Divresultado = document.querySelector('div#resultado')
let CxPeso = document.querySelector('input#CxPeso')
anoAtual = new Date //objeto do tipo data
let estouNoAno = anoAtual.getFullYear() //obtem apenas o ano
let VetGeneros = []
let VetIdades = []
let VetPesos = []


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
            if(VerificaPeso(Number(CxPeso.value))){
                if(RadioGeneroSelecionado()){
                    colocarNalista(Number(CxAnoNasc.value), GenSelecionado, Number(CxPeso.value))
                }else{
                alert('!! [ERRO] !! Género não foi indicado. (Feminino ou Masculino)!')
                }
            }else{
                alert(`!! [ERRO] !! O peso de ${Number(CxPeso.value)} Kg. Não é válido.`)
            }

        }else{
            alert(`!! [ERRO] !! O Ano de ${Number(CxAnoNasc.value)} não é válido! Voce teria ${estouNoAno - Number(CxAnoNasc.value)} Anos`)
            inicar()
        }   
    }
}

function verificaAno(AnoNascimento){//Função para garator que não é indicada nenhuma idade menor que 0 e maior que 130
    if((estouNoAno - AnoNascimento > 0)  && (estouNoAno - AnoNascimento < 130)){
        return true
    }else{
        return false
    }
}

function DesblocCxpeso(){//Fução para desbloquear a caixa do peso
    if (verificaAno(Number(CxAnoNasc.value))){
        CxPeso.removeAttribute('readonly')
        CxPeso.focus()
    }
}


function VerificaPeso(Peso){//Função para verificar se o peso é maior que 0 
    if(Peso > 0){
        return true
    }else{
        return false
    }
}

function RadioGeneroSelecionado(){//Função para verificar se os botões de radio estao selecionados
    if ((GenSelecionado[0].checked==true) || (GenSelecionado[1].checked==true)){
       return true
   }else{
        return false
   }
}

function colocarNalista(AnoEmQueNasceu, LstGeneros, pesaEmKg){
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
    itemOption.text =`Idade: ${AnosDeIdade} | Gen: ${Genero} | Peso: ${pesaEmKg}`
    cSelGenero.appendChild(itemOption)
    VetGeneros.push(Genero)
    VetIdades.push(AnosDeIdade)
    VetPesos.push(pesaEmKg)
    CxAnoNasc.focus()
    CxAnoNasc.value= ''
    CxPeso.value = ''
}

function FcVerificar(){
    if((VetIdades.length == 0) || VetGeneros.length==0 || VetPesos.length == 0){
        alert('!! [ERRO] !! Lista de detalhes Vazia!')
        inicar()
    }else{
        MostrarResultado(VetIdades, VetGeneros, VetPesos)        
    }
}

function MostrarResultado(ListaIdades, ListaGeneros, listaDePeso){
    let totalHomens = 0, totalMulheres = 0 
    let somaIdadesH = 0, mediaIdadesH = 1, somaPesoFem = 0, mediaPesosFem = 1

    Divresultado.innerHTML = `<p>No total adicionou: ${ListaIdades.length} elementos</p>`
    for (pos in ListaGeneros){
        if(ListaGeneros[pos] == "Feminino"){
            totalMulheres ++
            somaPesoFem += Number(listaDePeso[pos])
        }else{
            totalHomens++
            somaIdadesH += Number(ListaIdades[pos])
        }
    }
    mediaIdadesH = somaIdadesH / totalHomens
    mediaIdadesH = mediaIdadesH.toFixed(2)
    mediaPesosFem = somaPesoFem/totalMulheres
    mediaPesosFem = mediaPesosFem.toFixed(2)
    Divresultado.innerHTML +=`<p>Pessoas do Género Feminino: ${totalMulheres}</p>`
    Divresultado.innerHTML += `<p>Pessoas do Género Masculino: ${totalHomens}</p>`
    Divresultado.innerHTML += `<p>Média de idades dos homens: ${mediaIdadesH} anos</p>`
    Divresultado.innerHTML += `<p>Média dos pesos das mulheres: ${mediaPesosFem}Kg </p>`
}