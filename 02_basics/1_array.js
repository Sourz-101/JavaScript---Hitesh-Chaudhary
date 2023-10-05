// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) // add one element at the end
// myArr.push(7)
// myArr.pop() // remove the last element from the array

// myArr.unshift(9) // add one element at the beginning of the list
// myArr.shift()   // remove first element of the array




// console.log(myArr.includes(9)); // search in the array for the value passed 
// console.log(myArr.indexOf(3));  // returns a bool value

const newArr = myArr.join() // .join converts array into strings

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("Original: ", myArr);

// slice
const myn1 = myArr.slice(1, 3)
console.log('Slice(1, 3): ' + myn1);
console.log("Original ", myArr);


// splice
const myn2 = myArr.splice(1, 3)
console.log('Splice(1, 3): ' + myn2);
console.log("Original ", myArr);


/* Difference between slice and splice
    1. Slice dones not include the last value while Splice include the last value.
    2. Splice modify the original array but splice do not modify the original array.
*/