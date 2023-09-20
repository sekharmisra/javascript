function calculateTimeSpend(){

    const fromDate = new Date();
    for (let i=0; i < 10000000000; i++);
    const toDate = new Date();
    console.log(`Function took ${(toDate.getTime() - fromDate.getTime())/1000}`)
}

calculateTimeSpend()