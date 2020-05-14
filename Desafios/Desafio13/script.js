let txtnum = document.querySelector('input#txtnum')
let selnum = document.querySelector('select#selnum')
let multiplos = []

function iniciar(){
    txtnum.focus()
}

function inserir(){
   if(txtnum.value.length == 0){
       alert('!! [ERRO] !! Nenhum Número informado!')
       txtnum.focus()
       txtnum.value = ''
   }else{
     colocarNaLista(Number(txtnum.value))
   }
}

function colocarNaLista(numero){
    
}