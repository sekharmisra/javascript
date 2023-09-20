for (let i=0; i<=10; i++){
    console.log(i)
}

const names = ["sekhar", "Kunjan", "Aarna"]

for (let j=0; j<names.length; j++){
    console.log(names[j])
}

for (let k=0; k<names.length; k++){
    if (names[k] === 'sekhar'){
        console.log(`Found Sekhar at index: ${k}`)
        break
    }
}

names.forEach(e => console.log(e))

names.forEach(e => {
    if (e.length <= 5){
        console.log(e)
    }
})

names.forEach(console.log)