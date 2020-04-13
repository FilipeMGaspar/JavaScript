console.log('Condições Aninhadas');
var idade = 67;
console.log(`Você tem ${idade}`);
if (idade <16){
    console.log('No Brasil. Não vota.');
} else if(idade<18 || idade>65){
        console.log('No Brasil! O Voto opcional');
    } else {        
            console.log('No Brasil! O voto é Obrigatório');            
    }
    