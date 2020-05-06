let resp= [ 'a', 'há']


function verificar(){
    let selresp = document.querySelector('select#selresp')
    let valselresp = selresp.options[selresp.selectedIndex]
    
    let selresp2 = document.querySelector('select#selresp2')
    let valresp2 = selresp2.options[selresp2.selectedIndex]

    alert('Entrei aki')
    alert (`Primeira parte ${valselresp.text}`)
    alert(`Segunda Parte ${valresp2.text}`)

}