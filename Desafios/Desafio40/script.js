let CxNome = document.querySelector('input#CxNome')

document.onload = iniciar()

function iniciar(){
    CxNome.focus()
    CxNome.value = ''
}