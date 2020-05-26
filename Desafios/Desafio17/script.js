let cSelOpina = document.querySelector('select#cSelOpina')
let valselresp = cSelOpina.options[cSelOpina.selectedIndex]

function teste(){
    alert(valselresp.text)
}