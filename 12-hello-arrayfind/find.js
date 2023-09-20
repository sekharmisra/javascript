const user =[
    {"name": "Sekhar", "age": 12},
    {"name": "Kunjan", "age": 11},
    {"name": "Aarna", "age": 10}
    ]

    
    const find = user.find( e => e.name === "Aarna")
    console.log(find)

    const find1 = user.filter ( e => e.age >10 )
    console.log(find1)
