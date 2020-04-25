//let conteudo = document.getElementById('conteudo')
let conteudo = document.querySelector('div#conteudo')

function carregar() {
    let imagem = document.createElement('img')
    imagem.setAttribute('id', 'foto')
    imagem.setAttribute('src', '')
    conteudo.innerHTML = `Maria Inês Gaspar`
}