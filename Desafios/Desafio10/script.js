
function mostrar(){
    let txtnum = document.querySelector('input#txtnum')
    let divresultado= document.querySelector('div#resultado')

    if(txtnum.value.length == 0){
        alert('!! [ERRO] !! O número de termos amostrar não foi indicado!')
        txtnum.focus()
    }else{
        let termo1 = 0
        let termo2 = 1

        if(Number(txtnum.value)<= 0){
            alert('!! [ERRO] !! O Número de Termos inserido não é válido!')
            txtnum.focus()
            txtnum.value = ''
        }else if(Number(txtnum.value) == 1){
            divresultado.innerHTML =`<p>Solicitou mostrar ${Number(txtnum.value)} termo da Sequência Fibonacci!</p>`
            divresultado.innerHTML += `${termo1} - Fim`
            txtnum.focus()
            divresultado.innerHTML +=`<p>A soma de ${Number(txtnum.value)} termo é : 0</p>`
            txtnum.value = ''
        }else{ 
            let soma = termo2 
            divresultado.innerHTML =`<p>Solicitou mostrar ${Number(txtnum.value)} termos da Sequência Fibonacci!</p>`
            divresultado.innerHTML += `${termo1} - ${termo2} - `
             /*
                                  termo3 = termo1+ termo2                 
                 0         1       1
                termo1 - termo2 - termo3
            */

            for(let conta = 2; conta<= Number(txtnum.value); conta++ ){
                let termo3 = termo1 + termo2
                divresultado.innerHTML += ` ${termo3} -`
                termo1 = termo2
                termo2 = termo3
                soma += termo3
            }
            divresultado.innerHTML += ' Fim'
            txtnum.focus()
            divresultado.innerHTML +=`<p>A soma dos ${Number(txtnum.value)} termos é : ${soma}</p>`
            txtnum.value = ''           
        }
        
    }
}