let CinpAltura = document.querySelector('input#CinpAltura')
let Divresultado = document.querySelector('div#resultado')
let btnVerificar = document.querySelector('input#btnVerificar')
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
    btnVerificar.style.display ='block'
 }

 function verificar(){
     if((alturas.length == 0) && (generos.length == 0) ){
         alert('!! [ERRO] Lista de detalhes vazia. Impossivel Verificar.')
         if(CinpAltura.value.length!=0){
            CinpAltura.focus()
         }else{
            iniciar()
         }   
     }else{
          VerificaAlturasEGeneros(alturas, generos)
     }
 }

 function VerificaAlturasEGeneros(lstAltura, lstgeneros){
    
    Divresultado.innerHTML +=`<p>No total escontrei..: ${lstAltura.length} elemento(os)<p>`
    MaiorMenoraltura(lstAltura, lstgeneros)
    numGenFemeGenMasc(lstgeneros, lstAltura)
 }

 function MaiorMenoraltura(LstdAlturas, ListaDeGen){
     let maiorAlt = LstdAlturas[0]
     let menorALt = LstdAlturas[0]
     let sexoMalt = ListaDeGen[0] 
     let sexMbaixo = ListaDeGen[0]

     for(ind in LstdAlturas){
        if(LstdAlturas[ind] > maiorAlt){
           maiorAlt=LstdAlturas[ind]
           sexoMalt = ListaDeGen[ind]
        }else{ 
            if(LstdAlturas[ind] < menorALt){
                menorALt= LstdAlturas[ind]
                sexMbaixo = ListaDeGen[ind]
            }
        }
     }

     Divresultado.innerHTML +=`<p>Foram detetados:</p>`
     Divresultado.innerHTML+= `<p>Mais alto  ..: ${maiorAlt}m do sexo ${sexoMalt}</p>`
     Divresultado.innerHTML+= `<p>Mais baixo ..: ${menorALt}m do sexo ${sexMbaixo}</p>`
 }

 function numGenFemeGenMasc(LstgenFemouMasc, ListaDeAlturas){
    let NrDeFem = 0
    let NrDeMasc = 0
    let altFem = []

     for(pos in LstgenFemouMasc){
         if(LstgenFemouMasc[pos]==='Feminino'){
            NrDeFem++
            altFem.push(ListaDeAlturas[pos])
         }else{
            NrDeMasc++
         }
     }
     let somaAltFem = 0
     for(indice in altFem){
        somaAltFem = Number(altFem[indice]) + somaAltFem
     }

     let mediaAltFem = somaAltFem/altFem.length
     mediaAltFem = mediaAltFem.toFixed(2)

     Divresultado.innerHTML +=`<p>Média de Altura do Género Feminino ..: ${mediaAltFem}m</p>`
     Divresultado.innerHTML +=`<p>..: ${NrDeFem} elementos do Sexo Feminino</p>`
     Divresultado.innerHTML +=`<p>..: ${NrDeMasc} elementos do Sexo Masculino</p>`
     
     btnVerificar.style.display ='none'
     CinpAltura.focus()
     CinpAltura.value=''
 }