// Video 11


// ther are two ways to initilize string

//1
const name = 'Sourabh';

const repo = 10;

// console.log(name + repo + ' Value');  // This is old way to write 

console.log(`My name is ${name} and my repo count is ${repo}`);



//2 - In this method we can get key value pair with each letter just like an array;
//priya
//01234
//and we also get other properties.
const anotherName = new String('Suryavansham');
console.log(anotherName);
// console.log(anotherName.length);
// console.log(anotherName.toUpperCase); // it only changes the copy of the code
// console.log(anotherName.indexOf('y'));
console.log(anotherName.charAt(2));

const newStr = anotherName.substring(0, 5); // Last value is not including. This ignores negative values
console.log(newStr);

const newStr2 = anotherName.slice(-8, 3);
console.log(newStr2);


const game = '   Valorant riot     ';
console.log(game);
console.log(game.trim()); //remove white spaces from beginning and end


const url = 'https://sourabh%website.com';

console.log(url.replace('%','-')); //https://sourabh-website.com
console.log(url.includes('sourabh')); //true


const gameName = 'valorant-fast-person-shooter';

console.log(gameName.split('-')); //[ 'valorant', 'fast', 'person', 'shooter' ]