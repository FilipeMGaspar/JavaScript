function contar(){

    //txtini
    var txtini = document.getElementById('txtini')//recebe o valor da caixa de texto Inicio do HTML
    var inicio = Number(txtini.value)//conversão para valor numérico 
       
    //txtfim
    var txtfim = document.getElementById('txtfim')//recebe o valor da caixa de texto fim do HTML 
    var fim = Number(txtfim.value)//conversão para valor numérico 
    
    //txtpasso
    var txtpasso = document.getElementById('txtpasso')//recebe o valor da caixa de texto passo do HTML
    var passo = Number(txtpasso.value)//conversão para valor numérico 
   
    //result
    var result = document.getElementById('result')//recebe o elemento <div< com id result
    result.innerHTML = ''
    if (inicio < fim){
        while (inicio < fim){                      
            result.innerHTML += `cresce${inicio}, `
            inicio = inicio + passo  
        }
    }else{
        while(fim <= inicio){           
            result.innerHTML += `decresce${inicio}; `
            inicio = inicio - passo
        }
    }

}