const user = {
    username: 'Ravi', 
    loginCount : 8, 
    signedIn : true,

    getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`Username: ${this.username}`)
        // console.log(this)
    }

}

console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this) //{} -> is output here, but window will be output in the browser

function User(username, loginCount, isLoggedin){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedin = isLoggedin

    this.greeting = function (){
        console.log(`Welcome ${this.username}`);
    }

    // return this // this happends defaultly
}

// const userOne = User("Ravi",12, true)
// const userTwo = User("CAC", 11, false) //userOne will get over ridden by userTwo

const userOne = new User("Ravi",12, true) // new instance
const userTwo = new User("CAC", 11, false)
console.log(userOne.constructor); // [Function: User]
// console.log(userTwo);