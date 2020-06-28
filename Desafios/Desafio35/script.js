let CxSeltab = document.querySelector('select#CxSeltab')

function iniciar(){
    for(let i=1; i<=10; i++){
        let item = document.createElement('option')

        item.text = `${i}`
        item.value =`${i}`

        CxSeltab.appendChild(item)
    }
}

function calcularTabuada(){
    
}