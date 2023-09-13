const user = {}
user.name = "Sekhar"
user.age = 40
user.hobbies = ["Reading", "Writing", "Sleeping!"]

const user1 = {}
user1.name = "Kunjan"
user1.age = 37

const schoolDetails = {}
schoolDetails.name = "Laurelwood!"
schoolDetails.grade = "6"
schoolDetails.Location = "Waterloo!"

const user2 = {}
user2.name = "Aarna"
user2.age = 11
user2.schoolDetails = schoolDetails

const userArray = []
userArray.push(user)
userArray.push(user1)
userArray.push(user2)

console.log(user2)
console.log(userArray)
console.log(`First user name is ${userArray[0].name}`)
