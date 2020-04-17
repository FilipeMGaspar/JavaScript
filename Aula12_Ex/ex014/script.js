function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   //var hora =20
    msg.innerHTML=`<p>Agora são <strong>${hora}</strong> horas.</p>`
    if(hora>=7 && hora<12){
        //Bom Dia
        msg.innerHTML +='<p><strong>Bom Dia!</strong></p>'
        img.src ='imgs/manha.png' 
        document.body.style.background='#d4c59a'//muda a cor de fundo do corpo da página html
        
    }else if(hora>12 && hora<20){
        //Boa Tarde
        msg.innerHTML+='<p><strong>Boa tarde!</strong></p>'
        img.src='imgs/tarde.png'
        document.body.style.background= '#f0a249'//muda a cor de fundo do corpo da página html
    }else{
        // Boa Noite
        msg.innerHTML+='<p><strong>Boa Noite!</strong></p>'
        img.src='imgs/noite.png'
        document.body.style.background='#35263f'
    }
}