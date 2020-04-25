//let conteudo = document.getElementById('conteudo')
let conteudo = document.querySelector('div#conteudo')
let questao = document.querySelector('div#questao')
let resp1 = document.querySelector('div#resp1')
let resp2 = document.querySelector('div#resp2')
function carregar() {
    conteudo.innerHTML=''
    conteudo.innerHTML+= `<p>Poluição Aquática!</p>`
    let imagem = document.createElement('img')
    imagem.setAttribute('id', 'foto')
    imagem.setAttribute('src', 'imagens/Pulagua.png')
    conteudo.appendChild(imagem)
    questao.innerHTML=`Quais são os principais poluentes da água? `
    resp1.innerHTML = '<p>Esgoto, Petroleo, Metais-pesados, Pesticidas, Óleo de cozinha, Etc...<p>'
    resp2.innerHTML = '<p>Esgoto, Resíduos Sólidos, Estações de Tratamento, Reciclagem, Rega Etc...<p>'

}