function gerar(){
    let num = 0
    let res = document.querySelector('div#res')

    num = Math.floor(Math.random() * 50) // Math chamado floor(). Este método arredonda o número para baixo até o número inteiro mais próximo. Mesmo se o valor estiver acima de 0,5..

    res.innerHTML = `<p>Número Aleatório: <strong>${num}</strong></p>`
}