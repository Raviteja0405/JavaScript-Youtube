const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObj) {
    // console.log(myObj[key]); //will get values
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}

// const prog = ["js", "rb", "py", "java", "cpp"]
// for (const key in prog) {
//     console.log(prog[key]);
// }

// const map = new Map(); //unique ...........
// map.set("IN", "India");
// map.set("USA", "United states");
// map.set("Fr", "France");
// map.set("IN", "India");

// for (const key in map) { // No output => map not iterable
//     console.log(key);
// }