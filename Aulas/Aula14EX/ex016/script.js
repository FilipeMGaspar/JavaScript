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
        //alert('[ERRO] Estão em falta DADOS!')
        result.innerHTML = '[ERRO] Impossivel Contar. Faltam dados'
    }else{
        result.innerHTML = 'Estou a Contar:<br>'
        let inicio = Number(txtini.value)//conversão para valor numérico 
        let fim = Number(txtfim.value)
        let passo = Number(txtpasso.value)

        //utilizando o ciclo for

        if(passo <= 0){
            alert('[ERRO] Valor de Passo Incorrecto! Vou considerar ->Passo = 1')
            passo = 1
        }

        if(inicio < fim){
            for(let conta = inicio; conta <= fim; conta+=passo){//contagem crecente
                result.innerHTML += ` ${conta} \u{1F449} `//    \u{1F601    Formatação unicode pra o JavaScript
            }
        }else {           
            for (let cont = inicio; cont >= fim; cont -= passo){//contagem decrecente
                result.innerHTML += ` ${cont} \u{1F449} `
            }           
        }
        result.innerHTML += `\u{1F3C1}`     

        //utilizando o ciclo while

         /* if(txtini.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0){
            alert('![ERRO]! Estão em falta DADOS!')
          }else{
              let inicio = Number(txtini.value)
              let fim = Number(txtfim.value)
              let passo = Number(txtpasso.value)
              
              if(passo == 0){//no caso do passo ser indicado como ser será considerado 1
                    passo = 1
                    alert('O passo Indicado 0! Será Considerado 1.')
              }
              
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
          }*/            
        
    }
}