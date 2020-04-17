function contar(){
    //txtini
    let txtini = document.getElementById('txtini')//recebe o valor da caixa de texto Inicio do HTML
       
    //txtfim
    let txtfim = document.getElementById('txtfim')//recebe o valor da caixa de texto fim do HTML 
    
    //txtpasso
    let txtpasso = document.getElementById('txtpasso')//recebe o valor da caixa de texto passo do HTML
       
    //result
    let result = document.getElementById('result')//recebe o elemento <div< com id result
    
    if (txtini.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0){
        alert('[ERRO] Estão em falta DADOS!')
    }else{
        result.innerHTML = 'Estou a Contar...'
        let inicio = Number(txtini.value)//conversão para valor numérico 
        let fim = Number(txtfim.value)
        let passo = Number(txtpasso.value)

        //utilizando o ciclo for
        for(let conta= inicio; conta<= fim; conta+=passo){
            result.innerHTML += ` ${conta} \u{1F449} `//\u{1F601    Formatação unicode pra o JavaScript
        }
        result.innerHTML += `\u{1F3C1}`
        /*
        utilizando o while
            if (inicio < fim){
                while (inicio <= fim){                      
                    result.innerHTML += `${inicio} \u{1F449} `
                    inicio = inicio + passo  
                }
                result.innerHTML += `\u{1F3C1}`
            }else{
                while(fim <= inicio){           
                    result.innerHTML += `${inicio} \u{1F449} `
                    inicio = inicio - passo
                }
                result.innerHTML += `\u{1F3C1}`
            }

        */
    }
    
    
    /*
    if(passo == 0){//no caso do passo ser indicado como ser será considerado 1
        passo = 1
        alert('O passo Indicado 0! Será Considerado 1.')
    }
    */

   /* 
   if (inicio < fim){
        while (inicio <= fim){                      
            result.innerHTML += `${inicio}, `
            inicio = inicio + passo  
        }
    }else{
        while(fim <= inicio){           
            result.innerHTML += `${inicio}, `
            inicio = inicio - passo
        }
    }
    */

}