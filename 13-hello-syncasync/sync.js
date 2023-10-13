function isPrimeNumber(number){
    let j = 0;
    for (let i=2; i < number; i++){       
        j++;
        if (number % i === 0){
            return {
                "isPrime" : false,
                "divisibleBy": i,
                "iterations": j
            }
        }    
    }
    return {
        "isPrime": true
    }
}
function test(){
    console.log("First test");
    console.log(isPrimeNumber(413158523));
    console.log("Second test");
    console.log(isPrimeNumber(413158523));
    console.log("Third test");
    console.log(isPrimeNumber(413158523));
    console.log("Final test");
    console.log(isPrimeNumber(413158527));
}

test();



