// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

// for (const iterator of object) {

// }
// this can be applied for arrays,str also

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

//Maps
const map = new Map(); //unique ...........
map.set("IN", "India");
map.set("USA", "United states");
map.set("Fr", "France");
map.set("IN", "India");

// console.log(map);

// for (const [key, value] of map) {  //destructure
//   console.log(key, ":-", value);
// }

const myObj={
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, value] of myObj) {
//     console.log(key, ":-", value);
// } ==> error (obj not iterable using this)

