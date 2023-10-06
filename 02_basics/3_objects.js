// Video 16

// Singleton
// Object.create

// Object Literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",  //This is how we define a symbol inside an object
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["full name"]) //If the key is a string then we can only access it with the square bracket.
console.log(JsUser["email"]) 
console.log(typeof JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) // This is used to make entire object immutable. We cannot freeze any single object member, entire object will get frozen
JsUser.email = "hitesh@microsoft.com" // doing this will not give error but the value of email will remain same
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // THis is used to access the members of current object
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());