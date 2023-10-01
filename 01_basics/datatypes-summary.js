// Video 9

/* Ther are 2 types of datatypes:
    1. Primitive
    2. Non-Primitive


    1. Premitive (In Premitive datatype, direct reference of the address is not given. A copy of number is given)
        - String
        - Number
        - Boolean
        - null
        - undefined
        - Symbol
        - Bigint


    2. Non-Primitive (Also called Reference. Here direct reference of address of memory is given)
        - Array
        - Objects
        - Functions




    JavaScript is a DYNAMICALLY TYPED LANGUAGE. 
    This means that variable types are not explicitly declared, and the type of a variable can change during runtime. In JavaScript, you can assign values of different types to the same variable without any static type checking.

        eg:
        let x = 5; // x is a number
        x = "Hello"; // x is now a string
        x = [1, 2, 3]; // x is now an array


*/

    //Symbol

    let Id = Symbol('123');
    let anotherId = Symbol('123');

    console.log(Id === anotherId);

    console.log(Id);


    //bigint

    let bigNumber = 23473893459835893259834n; // we use 'n' at the end to convert this to a bigInt rather than a number. if we remove n from the end js will treat this as a number rather than a bigint.


    // Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);   // Symbol
console.log(typeof heros);       // object
console.log(typeof myObj);       // object
console.log(typeof myFunction);  // function

/*


TYPE OF VAL                                         RESULT
----------------------------------------------------------------
Undefined	                                        "undefined"
Null	                                            "object"
Boolean	                                            "boolean"
Number	                                            "number"
String	                                            "string"
Object(native and does not implement [[Call]])	    "object"
Object (native or host and does implement [[Call]])	"function"
Object (host and does not implement [[Call]])	    Implementation-defined  except may not be "undefined", "boolean", "number", or "string".
*/

// https://262.ecma-international.org/5.1/#sec-11.4.3




//---------------------------------------------------------------\\
//Video 9

/*
There are two types of memory
    1. Stack (Stack is used in Premitive data types)
            -When variable is defined in stack we get a copy of the variable

    2. Heap (Heap is used in Non-Premitive data types)
            -When variable is defined in Heap we get the reference of the variable



*/

let myName = 'Sachin';

let Fname = myName;

Fname = 'Sourabh';

console.log(myName); // Sachin
console.log(Fname);  // Sourabh

//Here we get the copy of the variable so when Fname ask for myName, myName send its copy to Fname. So when we change Fname the original name of myName remains same.

//////////////////////////////////////////////////////////////////
let stdOne = {
    name: 'Neha',
    age: 21
}

let stdTwo = stdOne;

stdTwo.name = 'Suraj';

console.log(stdOne.name); //Suraj
console.log(stdTwo.name); //Suraj

// Here the memory is stored in Heap. So when we ask for a variable the address of memory is shared, ie. pass by reference. So when stdTwo do some changes in the memory, it will also be reflected inn stdOne as both of them are pointing to same memory address.

