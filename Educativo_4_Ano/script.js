//let conteudo = document.getElementById('conteudo')
let conteudo = document.querySelector('div#conteudo')
let questao = document.querySelector('div#questao')
let resp1 = document.querySelector('div#resp1')
let resp2 = document.querySelector('div#resp2')
let resp3 = document.querySelector('div#resp3')
let resp4 = document.querySelector('div#resp4')

function carregar() {
    conteudo.innerHTML=''
    conteudo.innerHTML+= `<p>Poluição Aquática!</p>`
    let imagem = document.createElement('img')
    imagem.setAttribute('id', 'foto')
    imagem.setAttribute('src', 'imagens/Pulagua.png')
    conteudo.appendChild(imagem)
    questao.innerHTML=`Quais são os principais poluentes da água? `
    resp1.innerHTML = '<p>Esgoto, Petroleo, Metais-pesados, Pesticidas, Óleo de cozinha, Etc...<p>'
    resp2.innerHTML = '<p>Esgoto, resíduos sólidos, estações de tratamento, reciclagem Etc...<p>'
    resp3.innerHTML = '<p>Fumo, barulho excessivo, um Livro, Estações de Tratamento, Etc...<p>'
    resp4.innerHTML=`<p>Beber água, fazer limonada, fechar a torneira </p>`
}

function verificar(n){
   switch (n){
       case 1:
           resp1.style.background = 'green'
           resp2.style.display = 'none'
           resp3.style.display = 'none'
           resp4.style.display = 'none'
           break        
        case 2:
            resp2.style.background = 'red'
            break            
        case 3:
            resp3.style.background = 'red'
            break
        case 4:
            resp4.style.background = 'red'
            break    
        
       default:
           break
   }
 
}