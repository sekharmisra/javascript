const user =[
{"name": "Sekhar", "age": 12},
{"name": "Kunjan", "age": 11},
{"name": "Aarna", "age": 10}
]

console.log(user)
user.forEach( u => console.log(u.name))
user.forEach( u => console.log(u.age))

const userNames = user.map(e => e.name)
console.log(userNames)

const userAges = user.map(e => e.age)
console.log(userAges)