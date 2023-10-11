// Video 24

// Immediately Invoked Function Expression (IIFE)

// When we build any function it may get problem from global scope pollutions. To get rid of global variable or any other kind of pollutions we use IIFE functions.

// Also IIFE funciton executes immediately

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();



( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');


// When there is more than one IIFE funcion in a file then it is mandatory to end IIFE statements with a semicolon;