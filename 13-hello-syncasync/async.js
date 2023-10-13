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

function isPrimeNumberAsync(number, callback){
    setTimeout(()=> callback(isPrimeNumber(number)), 0);
    console.log("Hey executed function! I will let you know once I am done!");
}

function testAsync(){
    console.log("First test");
    isPrimeNumberAsync(413158523, console.log);
    console.log("Second test");
    isPrimeNumberAsync(413158523, console.log);
    console.log("Third test");
    isPrimeNumberAsync(413158523, console.log);
    console.log("Final test");
    isPrimeNumberAsync(413158523, console.log);
}

//isPrimeNumberAsync(413158523, console.log)
testAsync();


