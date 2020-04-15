function validar(){
    var data = new Date();//cria uma variavel do tipo data
    var ano = data.getFullYear();//Obtém o ano completo ex: 2020
    var fano = document.getElementById('txtano');//Obtém o conteúdo da caixa de texto
    var result = document.querySelector('div#result');//obtém o conteúdo da div Resultado

    if(fano.value.length == 0 || Number(fano.value)> ano){
        alert('[ERRO!] Verifique os dados e tente novamente');     
    }else {
        var fsex = document.getElementsByName('radsex');//recebe o valor que vem do radiobutton
        var idade = ano - Number(fano.value);
        var gen = '';
        if (fsex[0].checked){//
            gen = 'Masculino';
        }else if (fsex[1].checked){//
            gen = 'Feminino';
        }        
        //result.innerHTML = `Você tem ${idade} anos! E é do género ${gen}!`
    }   

}