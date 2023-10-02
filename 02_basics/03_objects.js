// singleton
//object.create

// object literals


const mySym = Symbol("key1")
const JsUser = {
    name: "Mowa",  //name word is a string
    "full name" : "MowaBro",
    age: 19, 
    [mySym]: "mykey1",  //without[] this will be a String, else it is Symbol.
    location: "jaipur",
    email: "mowa@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]);

// console.log(JsUser."full name");//not allowed
// console.log(JsUser["full name"])
// JsUser.email = "mowa@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "asdfadfasdf";
// console.log(JsUser["email"])
JsUser.greeting = function(){
    console.log("hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())