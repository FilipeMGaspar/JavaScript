

function verificar(){
    let selresp = document.querySelector('select#selresp')
    let valselresp = selresp.options[selresp.selectedIndex]
    
    let selresp2 = document.querySelector('select#selresp2')
    let valselresp2 = selresp2.options[selresp2.selectedIndex]

    let selresp3 = document.querySelector('select#selresp3')
    let valselresp3 = selresp3.options[selresp3.selectedIndex]

    let selresp4 = document.querySelector('select#selresp4')
    let valselresp4 = selresp4.options[selresp4.selectedIndex]

    let selresp5 = document.querySelector('select#selresp5')
    let valselresp5 = selresp5.options[selresp5.selectedIndex]

    let selresp6 = document.querySelector('select#selresp6')
    let valselresp6 = selresp6.options[selresp6.selectedIndex]

    let selresp7 = document.querySelector('select#selresp7')
    let valselresp7 = selresp7.options[selresp7.selectedIndex]

    let selresp8 = document.querySelector('select#selresp8')
    let valselresp8 = selresp8.options[selresp8.selectedIndex]

    let selresp9 = document.querySelector('select#selresp9')
    let valselresp9 = selresp9.options[selresp9.selectedIndex]

    let selresp10 = document.querySelector('select#selresp10')
    let valselresp10 = selresp10.options[selresp10.selectedIndex]

    let selresp11 = document.querySelector('select#selresp11')
    let valselresp11 = selresp11.options[selresp11.selectedIndex]

    let selresp12 = document.querySelector('select#selresp12')
    let valselresp12 = selresp12.options[selresp12.selectedIndex]
   
    let respondido = verrespostas(valselresp.text, valselresp2.text, valselresp3.text, valselresp4.text, valselresp5.text, valselresp6.text , valselresp7.text, valselresp8.text, valselresp9.text, valselresp10.text, valselresp11.text, valselresp12.text)

    if(respondido){
        alert(`Parabéns!!!`)
    }else{
        
        valselresp.text = 'a'   
        valselresp2.text = 'a'
        valselresp3.text = 'Há'   
        valselresp4.text = 'há' 
        valselresp5.text = 'a'
        valselresp6.text = 'há'
        valselresp7.text = 'há'
        valselresp8.text = 'há'
        valselresp9.text = 'há'
        valselresp10.text = 'A'
        valselresp11.text = 'há'
        valselresp12.text = 'Há'
        alert('!! [ERRO] !! Verifica de novo')
    }

}

function verrespostas(r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12){
     
    if(r1 === 'a' && r2 === 'a' && r3 === 'Há' && r4 === 'há' && r5 === 'a' && r6 === 'há' && r7 === 'há'  && r8 === 'há'   && r9 === 'há' && r10 === 'A' && r11 === 'há' && r12 === 'Há'){
        return true
    }else{
        return false
    }
}