function tabuada(){
   
    let num = document.getElementById('txtnum')
    let seletab = document.getElementById('seltab')

    if (num.value.length == 0){
        alert('[ERRO] Está em falta o Número! Impossivel Calcular Tabuada')
    }else{
        num = Number(num.value)
        let cont=1
        while(cont<=10){
            let iten = document.createElement('option')//document.createElement('option') cria o elemento option
            iten.text=`${num} x ${cont} = ${num*cont}`
            seletab.appendChild(iten)//cria o objeto dentro da div
            cont++
        }
    }
   /* for(let cont = 1; cont=10; cont++ ){

    }*/
    //seletab.setAttribute('selecte' )

}