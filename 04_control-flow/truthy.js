// const userEmail = "h@mowa.ai"
// const userEmail = ""
const userEmail = [];

if (userEmail) {
  console.log("Got User email");
} else {
  console.log("Don't have user email");
}

/*
// falsy values

false, 0 , -0, BigInt 0n, "", null, undefined, NaN

//truthy values => every thing else falsy
"0", "false"," ",[],{},function(){}


*/
if (userEmail.length === 0) {
  console.log("Array is empty");
}
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("object is empty");
}
//Remember
// false == 0 =>true
// false == '' =>true
// 0 == '' =>true

//Nullish Coalescing Operator(??): null undefined
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;//we generally don't give 10 like that we generally call some  function which may return any values if it returns that will be taken into val1
// val1 = undefined ?? 115;
// val1 = null ?? 10 ?? 20


console.log(val1);

// Terniary Operator
// condition ?true:false 

const iceTeaPrice = 50
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")