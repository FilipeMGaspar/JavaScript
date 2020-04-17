
var agora = new Date()//Obtém a hora atual do cliente ou do servidor se for nodejs

var hora = agora.getHours()
console.log(`Agora são ${hora} horas`)
if (hora<12){
    console.log('Bom Dia')
}else if(hora <=18){
    console.log('Boa Tarde!')
}else{
    console.log('Boa noite!')
}