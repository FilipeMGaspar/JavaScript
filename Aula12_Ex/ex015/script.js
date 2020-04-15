function validar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var result = document.querySelector('div#result');

    if(Number(fano.value)> ano){
        alert('[ERRO!] Ano inválido!');     
    }
    if (fano.value.length == 0){
        alert('[ERRO] Nenhum ano Introduzido!');    
    }
    
}