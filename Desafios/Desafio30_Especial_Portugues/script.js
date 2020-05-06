

function verificar(){
    let selresp = document.querySelector('select#selresp')
    let valselresp = selresp.options[selresp.selectedIndex]
    
    let selresp2 = document.querySelector('select#selresp2')
    let valselresp2 = selresp2.options[selresp2.selectedIndex]

    let selresp3 = document.querySelector('select#selresp3')
    let valselresp3 = selresp3.options[selresp2.selectedIndex]

    

   
    let respondido = verrespostas(valselresp.text, valselresp2.text, valselresp3.text)

    if(respondido){
        alert(`Parabéns!!!`)
    }else{
        valselresp.text = 'a'   
        valselresp2.text = 'a'
        valselresp3.text = 'Há'     
        alert('!! [ERRO] !! Verifica de novo')
    }

}

function verrespostas(r1, r2, r3){
    if(r1 == 'a' && r2 == 'a' && r3 == 'Há' ){
        return true
    }else{
        return false
    }
}