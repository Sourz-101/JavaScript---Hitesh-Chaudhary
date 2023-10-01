// Video 12

const score = 234;

let balance = new Number(100);

// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // used to set precision value

const otherNumber = 43.88;

// console.log(otherNumber.toPrecision(3)); //this is used to roundoff the number and the value that is passed in the funciton determine the length of the result. Also the result is a string;

// console.log(typeof(otherNumber.toPrecision(3)));


const hundreds = 1000000000;
// console.log(hundreds.toLocaleString('en-us')); // used to add comma at appropriate place in a long/big number. If we remove 'en-us' from the bracket then we'll get indiain number system commas




// ---------MATH----------- \\ 

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));


console.log(Math.random());
console.log(Math.floor((Math.random() * 10) + 1)); // random number b/w 0 to 9
console.log(Math.floor(((Math.random() * 10) + 1) / 3)); // code for random number between 0 to 3. 3 is exclusive


const min = 30;

const max = 50;

console.log(Math.floor((Math.random() * (max - min + 1)) + min));