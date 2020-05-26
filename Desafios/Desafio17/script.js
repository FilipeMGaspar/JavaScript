

function Adicionar(){
    let cSelOpina = document.querySelector('select#cSelOpina')
    let valselresp = cSelOpina.options[cSelOpina.selectedIndex]
    
    alert(valselresp.text)
}