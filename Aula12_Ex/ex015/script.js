function validar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var result = document.querySelector('div#result');

    if(fano.value.length == 0 || Number(fano.value)> ano){
        alert('[ERRO!] Verifique os dados e tente novamente');     
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value);
        
        //result.innerHTML = `Você tem ${idade} anos`
    }   

}