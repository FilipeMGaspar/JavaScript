function tabuada(){
    alert('Vamos á tabuada')
    let num = document.getElementById('txtnum')
    let seletab = document.getElementById('seltab')

    if (num.value.length== 0){
        alert('[ERRO] Está em falta o Número! Impossivel Calcular Tabuada')
    }else{
        let ntab = Number(num.value)
        for(let cont=1; cont<=10;cont++){
            let mult = cont*ntab
            seletab.appendChild('option')
            seletab.setAttribute('value',`${cont} x ${ntab} = ${mult}` )
        }
    }
   /* for(let cont = 1; cont=10; cont++ ){

    }*/
    //seletab.setAttribute('selecte' )

}