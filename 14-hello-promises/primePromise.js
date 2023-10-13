function isPrimePromise (number){
    return new Promise( (resolve, reject) => {
        if (number > 413158523)
            reject({"Error":"Number too large to consume"})
        else
            //resolve(isPrimeNumber(number));
            setTimeout(() => resolve(isPrimeNumber(number)), 0);
    } );
}

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


//isPrimePromise(413158526).then(r => console.log(r)).catch(e => console.log("Something went wrong!" + JSON.stringify(e)));

function testPromise(){
    console.log("First test");
    isPrimePromise(413158523)
    .then(console.log)
    .catch(console.error);

    console.log("Second test");
       isPrimePromise(413158523)
    .then(console.log)
    .catch(console.error);

    console.log("Third test");
       isPrimePromise(413158523)
    .then(console.log)
    .catch(console.error);

    console.log("Final test");
       isPrimePromise(413158523)
    .then(console.log)
    .catch(console.error);    
}

testPromise();
