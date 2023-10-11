// Video 23


// this ->  this keyword refers to the current execution context, and its value can vary depending on how and where it's used.
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //this does not work with functions
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }


// Arrow function
    // this also dont work on arrow function
// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// This is calleed inplicite return: we use this when the body of the function just returns one line. Below function is same as above function


// const addTwo = (num1, num2) =>  num1 + num2
            // same
// const addTwo = (num1, num2) =>  (num1 + num2)

// if we want to return an object in this way then
const addTwo = (num1, num2) =>  ({name: 'Sourabh'});


console.log(addTwo(4, 5));