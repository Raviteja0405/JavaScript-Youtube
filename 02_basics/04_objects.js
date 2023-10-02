// const tinderUser = new  Object()
const tinderUser = {}

tinderUser.id = "1323ab"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userFullname: {
            firstname : "mowa",
            lastname: "bro"
        }
    }
}
// console.log(regularUser.fullname.userFullname.firstname);//you will also use ? to check if present or not(just a info, you'll learn in future)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) //{} is optional, but recommended => which means {} i.e empty object is target and obj1,obj2 are source

// const obj3 = {...obj1, ...obj2} //spread operator(Most used)
// console.log(obj3);

const user = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "aasdf.com"
    }
]
console.log(user[0].email)
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));