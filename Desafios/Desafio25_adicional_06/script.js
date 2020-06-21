let cx1 = document.querySelector('div#cx1')
let titCx1 = document.getElementById('titCx1')
let cx2 = document.querySelector('div#cx2')
let titCx2 = document.getElementById('titCx2')
let mudacx1 = false
let mudacx2 = false

function clicoucx1(){ 
    if (mudacx1 == false){   
        cx1.style.background = '#F7D1CD'
        cx1.style.color = '#000000'
        titCx1.innerHTML = `Clicou! \u{1F929}`
        alert ('Primeira caixa ativa! \u{1F914}')
        mudacx1 = true
        mudacx2 = false
    }
}

function focuscx2(){
    if((mudacx2 == false) && (mudacx1 == true)){
        cx1.style.background = '#DCC9B6'
        alert ('A Caixa 1 Perdeu o foco! \u{1F634}')
        titCx1.innerHTML = `Perdi o Foco! \u{1F97A}`
        titCx2.innerHTML = `\u{1F923} Hei!!!`
        mudacx1 = false
        mudacx2 = true        
    }
}