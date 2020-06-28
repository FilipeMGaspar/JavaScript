let CxSeltab = document.querySelector('select#CxSeltab')

function iniciar(){
    for(let i=1; i<=10; i++){
        CxSeltab.appendChild(`<option value="${i}">${i}</otpion>`)
    }
}