let CxNum = document.querySelector('input#CxNum')

function iniciar(){
    CxNum.focus()
    CxNum.value=''
}

function Adicionar(){
    let cSelOpina = document.querySelector('select#cSelOpina')
    let valselresp = cSelOpina.options[cSelOpina.selectedIndex]
    
    alert(valselresp.text)
}