function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
   // var hora = data.getHours();
   var hora =13;
    msg.innerHTML=`Agora são <strong>${hora}</strong> horas`;
    if(hora>=0 && hora<12){
        //Bom Dia
        img.src ='imgs/manha.png'; 
    }else if(hora>12 && hora<=18){
        //Boa Tarde
        img.src='imgs/tarde.png';
    }else{
        // Boa Noite
        img.src='imgs/noite.png';
        
    }
}