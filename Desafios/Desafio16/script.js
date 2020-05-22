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
        alert('Tudo ok podemos continuar')
    }
}