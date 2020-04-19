function parimpar(num) {
    if(num%2==0){
        return 'par'
    }else{
        return 'impar'
    }
}

let res = parimpar(4) //chamadad da função
console.log(res)