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
        var imagem = document.createElement('img');//cria um elemento de imagem dinâmicamente no html
        imagem.setAttribute('id','foto');//atribui o id="foto" <img src="" id=foto>
        if (fsex[0].checked){//
            gen = 'Masculino';
            if (idade>0 && idade<=2){
                //Bébe
                imagem.setAttribute('src', 'imgs/bebeM.png');
            }else if(idade<12){
                //criança
                imagem.setAttribute('src','imgs/criancaM.png');
            }else if(idade<18){
                //Adolecente
                imagem.setAttribute('src','imgs/adolecenteM.png');
            }else if(idade <30){
                //jovem adulto

            }else if(idade<65){
                //Adulto
                imagem.setAttribute('src','imgs/adultoM.png')
            }else{
                //idoso
                imagem.setAttribute('src','imgs/idosoM.png')
            }

        }else if (fsex[1].checked){//
            gen = 'Feminino';
            if (idade>0 && idade<=2){
                //Bébe
                imagem.setAttribute('src','imgs/bebeF.png');
            }else if(idade<12){
                //criança
                imagem.setAttribute('src','imgs/criancaF.png');
            }else if(idade<18){
                //Adolecente
                imagem.setAttribute('src','imgs/adolecenteF.png');
            }else if(idade <30){
                //jovem Adulto
            }else if(idade<65){
                //Adulto
                imagem.setAttribute('src','imgs/adultoF.png')
            }else{
                //idoso
                imagem.setAttribute('src','imgs/idosoF.png');
            }
        }   
        result.style.textAlign = 'center';      
        result.innerHTML = `Você tem ${idade} anos! E é do género ${gen}!`
        result.appendChild(imagem);//o appendChild adiciona o contúdo abaixo da informação anterior
    }   

}