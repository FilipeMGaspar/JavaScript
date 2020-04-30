
let valores = []

function inserir(){
    let num = document.getElementById('txtnum') 
    if(num.value.length == 0){
        alert('[ERRO] Nenhum Número detetado!')
    }else{
        let selnum = document.querySelector('select#selnum')
        let item = document.createElement('option')
        item.text = `Recebi: ${Number(num.value)}`
        selnum.appendChild(item)
        num.value = ''
        num.focus()
    }
}