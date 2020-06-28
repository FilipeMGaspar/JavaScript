let CxSeltab = document.querySelector('select#CxSeltab')

function iniciar(){
    let intemOption = document.createElement('Option')
    for(let i=1; i<=10; i++){
        intemOption.text = `${i}`
        CxSeltab.appendChild(intemOption)
    }

}