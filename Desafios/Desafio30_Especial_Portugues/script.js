let resp= [ 'a', 'há']
let selresp = document.querySelector('select#selresp')
let valselresp = selresp.options[selresp.selectedIndex]

function verificar(){
    alert('Entrei aki')
    alert (`VAmos lá verificar ${valselresp.text}`)

}