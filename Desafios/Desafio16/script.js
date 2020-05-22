let CinpAltura = document.querySelector('input#CinpAltura')

function iniciar(){
    CinpAltura.focus()
    CinpAltura.value=''
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
    alert(`Você mede ${mede}m. E é do género ${genero}`) 
    /* cSelDetalhes */ 
    let cSelDetalhes = document.querySelector('select#cSelDetalhes')
    let itemOption = document.createElement('option')

    itemOption.text=`Alt->${mede} Gen->${genero}`
    cSelDetalhes.appendChild(itemOption)

 }