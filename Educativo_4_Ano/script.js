//let conteudo = document.getElementById('conteudo')
let conteudo = document.querySelector('div#conteudo')

function carregar() {
    conteudo.innerHTML=''
    let imagem = document.createElement('img')
    imagem.setAttribute('id', 'foto')
    imagem.setAttribute('src', 'imagens/Pulagua.png')
    conteudo.appendChild(imagem)
}