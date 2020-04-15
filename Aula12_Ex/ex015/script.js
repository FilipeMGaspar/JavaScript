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
        var imagem = document.createElement('img');
        imagem.setAttribute('id','foto');
        if (fsex[0].checked){//
            gen = 'Masculino';
            if (idade>0 && idade<=2){
                //Bébe
            }else if(idade<12){
                //criança
            }else if(idade<18){
                //Adolecente
            }else if(idade<65){
                //Adulto
            }else{
                //idoso
            }

        }else if (fsex[1].checked){//
            gen = 'Feminino';
            if (idade>0 && idade<=2){
                //Bébe
            }else if(idade<12){
                //criança
            }else if(idade<18){
                //Adolecente
            }else if(idade<65){
                //Adulto
            }else{
                //idoso
            }
        }   
        result.style.textAlign = 'center';      
        result.innerHTML = `Você tem ${idade} anos! E é do género ${gen}!`
    }   

}