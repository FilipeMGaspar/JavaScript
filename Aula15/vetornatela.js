let valores = [8, 1, 7, 4, 2, 9]
valores.sort() // Coloca o vetor por ordem crecente
/*
    Forma padrão 
    
    console.log(valores) //pouco elegente   
*/

/*
    Forma incorrecta

    console.log(valores[0])
    console.log(valores[1])
    console.log(valores[2])
    console.log(valores[3])
    console.log(valores[4])
    console.log(valores[5])
*/

/*
    //utilizando o ciclo For
    for(let pos=0;pos<=valores.length;pos++){
        console.log(`A possição ${pos} tem o valor ${valores[pos]}`)
    }
*/

// Forma simplifacada para SOMENTE vetores e objetos

for(let pos in valores){//para cada posição na variavel valores[] array
    console.log(`A posição ${pos} tem o valor ${valores[pos]} `)
}

//procurar valores dentro de vetores 

let pos = valores.indexOf(3) //procura o valor 7 dentro do vetor se o valor não for encontrado é devolvido -1

if(pos == -1){
    console.log('O valor 3 não foi Encontrado')
}else{
    console.log(`O valor 7 está na posição ${pos} do vetor`)
}
