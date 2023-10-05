const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const allNewHeros = [...marvel_heros, ...dc_heros]; // ... is called spread operator, thsi is same as concat operator but this is widely used. It is better than concat because we can concat more than 2 array at a time. Eg const allNewHeros = [...marvel_heros, ...dc_heros, someNewArray, ...Another_array];

// console.log(allNewHeros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // flat is used to convert multi-dimentional array into 1-d array. we use depth of the array as a perameter. we can send any depth accordinng to our use but if we want any dimention array to get 1-d array we use infinity.


// console.log(another_array);
// console.log(real_another_array);



console.log(Array.isArray("Hitesh")) //used to check whether the value provided as an argument is an array or not.

console.log(Array.from("Hitesh")) // [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // give empty array []. we didn't define from how to make array out of object. ie. it didn't know if he had to make array from the key or the value.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]