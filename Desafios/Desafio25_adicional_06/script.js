let cx1 = document.querySelector('div#cx1')
let titCx1 = document.getElementById('titCx1')
let cx2 = document.querySelector('div#cx2')
let mudacx1 = false

function clicoucx1(){ 
    if (mudacx1 == false){   
        cx1.style.background = '#F7D1CD'
        cx1.style.color = '#000000'
        titCx1.innerHTML = `Clicou! \u{1F929}`
        alert ('Primeira caixa ativa! \u{1F914}')
        mudacx1 = true
    }
}

function focuscx2(){
    cx1.style.background = '#DCC9B6'
    alert ('A Caixa 1 Perdeu o foco! \u{1F634}')
    titCx1.innerHTML = `Perdi o Foco! \u{1F97A}`
    mudacx1 = false
}