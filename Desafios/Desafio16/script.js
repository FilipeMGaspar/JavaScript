let CinpAltura = document.querySelector('input#CinpAltura')
let Divresultado = document.querySelector('div#resultado')
let alturas = []
let generos = []

function iniciar(){
    CinpAltura.focus()
    CinpAltura.value=''
    Divresultado.innerHTML=''
}

function inserir(){
    if(CinpAltura.value.length==0){
        alert('!! [ERRO] !! Altura não foi informada.')
        iniciar()
    }else{
        if(verificaAltura(Number(CinpAltura.value))){
            SexoSelecionado()
        }else{
            alert(`!! [ERRO] !! A altura de ${Number(CinpAltura.value)} metros não é válida.`)
            iniciar()
        }
    }
}

function verificaAltura(altura){
    if(altura>0 && altura<3){
        return true
    }else{
        return false
    }
}

 function SexoSelecionado(){
     let sexoSele = document.getElementsByName('sexo')
     let sexo = ''   

    if ((sexoSele[0].checked==false) && (sexoSele[1].checked==false)){
         alert('!! [ERRO] !! Por favor Selecione o Sexo (Feminino ou Masculino)')
    }else{

        for(let pos=0; pos<sexoSele.length; pos++){
            
            if(sexoSele[pos].checked){
                sexo = sexoSele[pos].value
            }
        }
        colocarNalista(Number(CinpAltura.value) ,sexo) 
    }   
 }

 function colocarNalista(mede, genero){

    let cSelDetalhes = document.querySelector('select#cSelDetalhes')
    let itemOption = document.createElement('option')
    mede = mede.toFixed(2)
    itemOption.text=`Alt:${mede} | Gen: ${genero}`
    cSelDetalhes.appendChild(itemOption)

    alturas.push(mede)
    generos.push(genero)
    iniciar()
 }

 function verificar(){
     if((alturas.length == 0) && (generos.length == 0) ){
         alert('!! [ERRO] Lista de detalhes vazia. Impossivel Verificar.')
         iniciar()
     }else{
          maisAltoeMaisbaixo(alturas, generos)
     }
 }

 function maisAltoeMaisbaixo(lstAltura, lstgeneros){
    
    Divresultado.innerHTML ='<p>No total escontrei:<p>'
    Divresultado.innerHTML +=`<p>..: ${lstAltura.length} elemento(os)<p>`
    MaiorMenoraltura(lstAltura)
    numGenFemeGenMasc(lstgeneros)
 }

 function MaiorMenoraltura(LstdAlturas){
     let maiorAlt = LstdAlturas[0]
     let menorALt = LstdAlturas[0]

     for(ind in LstdAlturas){
        if(LstdAlturas[ind]>maiorAlt){
            maiorAlt=LstdAlturas[ind]
        }else if (menorALt<LstdAlturas[ind]){
            menorALt= LstdAlturas[ind]
        }
     }
     Divresultado.innerHTML +=`<p>Foram detetados:</p>`
     Divresultado.innerHTML+= `<p>..: ${maiorAlt}</p>`
     Divresultado.innerHTML+= `<p>..: ${menorALt}</p>`
 }

 function numGenFemeGenMasc(genFemouMasc){
    let NrDeFem = 0
    let NrDeMasc = 0

     for(pos in genFemouMasc){
         if(genFemouMasc[pos]==="Feminino"){
            NrDeFem++
         }else{
            NrDeMasc++
         }
     }
     
     Divresultado.innerHTML +=`<p>..: ${NrDeFem} do Sexo Feminino</p>`
     Divresultado.innerHTML +=`<p>..: ${NrDeMasc} do Sexo Masculino</p>`
 }