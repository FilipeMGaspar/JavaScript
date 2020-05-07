

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
   
    let respondido = verrespostas(valselresp.text, valselresp2.text, valselresp3.text, valselresp4.text, valselresp5.text, valselresp6.text , valselresp7.text)

    if(respondido){
        alert(`Parabéns!!!`)
    }else{
        
        valselresp.text = 'a'   
        valselresp2.text = 'a'
        valselresp3.text = 'Há'   
        valselresp4.text = 'há' 
        valselresp5.text = 'a'
        valselresp6.text = 'há'
        alert('!! [ERRO] !! Verifica de novo')
    }

}

function verrespostas(r1, r2, r3, r4, r5, r6, r7){
   /*
    alert(`Resposta 1: ${r1} seguida de: ${r2}`)
    alert(`Resposta 2: ${r3}`)
    alert(`Resposta 3: ${r4}`)
    alert(`Resposta 4: ${r5}`)
    alert(`Resposta 5: ${r6}`)
    alert(`Resposta 6: ${r7}`)
    */
    
    if(r1 === 'a' && r2 === 'a' && r3 === 'Há' && r4 === 'há' && r5 === 'a' && r6 === 'há' && r7 === 'há'){
        return true
    }else{
        return false
    }
}