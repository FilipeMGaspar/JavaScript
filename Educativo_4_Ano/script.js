//let conteudo = document.getElementById('conteudo')
let conteudo = document.querySelector('div#conteudo')
let questao = document.querySelector('div#questao')

function carregar() {
    conteudo.innerHTML=''
    conteudo.innerHTML+= `<p>Poluição Aquática!</p>`
    let imagem = document.createElement('img')
    imagem.setAttribute('id', 'foto')
    imagem.setAttribute('src', 'imagens/Pulagua.png')
    conteudo.appendChild(imagem)
    questao.innerHTML=`Quais são os principais poluentes da água? `

}