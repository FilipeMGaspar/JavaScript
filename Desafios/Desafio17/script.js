let CxNum = document.querySelector('input#CxNum')
let cSelOpinao = document.querySelector('select#cSelOpinao')

function iniciar(){
    CxNum.focus()
    CxNum.value=''
}

function Adicionar(){
    let cSelOpina = document.querySelector('select#cSelOpina')
    let valselresp = cSelOpina.options[cSelOpina.selectedIndex]
    
    if(CxNum.value.length==0){
        alert("!! [ERRO] !! Idade não informada!")
        iniciar()
    }else{
        if(verificaIdade(Number(CxNum.value))){
            alert(valselresp.text)
        }else{
            alert(`!! [ERRO] !! A Idade de ${Number(CxNum.value)} Anos. É inválida!`)
            iniciar()
        }
        
    }
}

function verificaIdade(Idade){

    if((Idade>0) && Idade<123){
        return true
    }else{
        return false
    }

}