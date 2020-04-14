function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
   // var hora = data.getHours();
   var hora =22;
    msg.innerHTML=`Agora são <strong>${hora}</strong> horas`;
    if(hora>=0 && hora<12){
        //Bom Dia
        img.src ='imgs/manha.png'; 
        document.body.style.background='#d4c59a';//muda a cor de fundo do corpo da página html
        
    }else if(hora>12 && hora<=18){
        //Boa Tarde
        img.src='imgs/tarde.png';
        document.body.style.background= '#f0a249';//muda a cor de fundo do corpo da página html
    }else{
        // Boa Noite
        img.src='imgs/noite.png';
        document.body.style.background='#35263f';
    }
}