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
     let sexFem = document.getElementById('sexFem')
     let sexMasc = document.getElementById('sexMasc')
   
 }