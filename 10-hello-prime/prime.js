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

console.log(isPrimeNumber(99))

function isPrimeLessThan(number){
    const primes = []
    const fromDate = new Date()

    for (let i = number -1; i > 1; i--){
        if (isPrimeNumber(i)) primes.push(i);
    }
    const toDate = new Date()
    console.log(`Took you ${toDate.getTime() - fromDate.getTime()}`)
    return {
        "primes": primes,
        "timetaken" : toDate.getTime() - fromDate.getTime()
    }
}
console.log(isPrimeLessThan(100000))