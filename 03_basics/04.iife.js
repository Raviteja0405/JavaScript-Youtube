// Immediately Invoked Function Expressions (IIFE)

// To remove pollution of global scope variables, we use iife

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
