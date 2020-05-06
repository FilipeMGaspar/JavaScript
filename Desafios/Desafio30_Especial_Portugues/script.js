

function verificar(){
    let selresp = document.querySelector('select#selresp')
    let valselresp = selresp.options[selresp.selectedIndex]
    
    let selresp2 = document.querySelector('select#selresp2')
    let valselresp2 = selresp2.options[selresp2.selectedIndex]

    if(valselresp == 'a' && valselresp2 =='há'){
        alert(`Parabéns!!!`)
    }else{
        valselresp2.text = 'a'
        valselresp.text = 'a'        
        alert('!! [ERRO] !! Verifica de novo')
    }

}