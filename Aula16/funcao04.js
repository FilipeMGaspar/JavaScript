//5! = 5*4*3*2*1

function factorial(num){
    let fat=1;
    for(let c=num; c>1; c--){
        fat*=c
    }
    return fat
}
console.log(factorial(5))
