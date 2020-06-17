function gerar(){
    let num = 0
    let res = document.querySelector('div#res')

    num = Math.random() * 50
    num = num.toFixed(0)

    res.innerHTML = `<p>Número Aleatório: <strong>${num}</strong></p>`
}