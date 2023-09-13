function printTime(){
    console.log(new Date())
    setTimeout(printTime, 3000)
}

printTime()