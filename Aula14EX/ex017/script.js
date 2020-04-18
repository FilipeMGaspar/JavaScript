function tabuada(){
   
    let num = document.getElementById('txtnum')
    let seletab = document.getElementById('seltab')

    if (num.value.length == 0){
        alert('[ERRO] Está em falta o Número! Impossivel Calcular Tabuada')
    }else{
        num = Number(num.value)
        let cont=1
        seletab.innerHTML = ''//limpa a área da tabuada
        
        //utilizando o Ciclo While

        /*while(cont<=10){
            
            let iten = document.createElement('option')//document.createElement('option') cria o elemento (<option></option>)
            
            iten.text=`${num} x ${cont} = ${num*cont}`//cria o texto a apresentar pelo option
            
            iten.value=`tab${cont}`//cria o valor para o envio para o servidor no caso do PHP

            seletab.appendChild(iten)//cria o objeto dentro do <select> <option>  1x1=1 </option> </select> e sucessivamente
            cont++
        }*/

        //utilização do ciclo For
        for(let conta=1; conta<=10;conta++){
            //vamos criar o elemento option <option></option>
            let iten = document.createElement('option')
            
            //vamos escrever dentro do <option> iten.text </option>
            iten.text=`${num} x ${conta} = ${num*conta} `

            //vamos atribuir o elemento value ao option <option value="iten.value"> iten.text </option>
            iten.value=`tab${conta}`

            /*
                vamos adicionar os elementos dentro da tag: 
                <select id="seltab">
                    <option value="iten.value"> iten.text </option>
                </select>
            */
           seletab.appendChild(iten)
        }

    }  

}