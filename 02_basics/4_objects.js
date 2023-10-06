// Video 17

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }


// const obj3 = Object.assign(obj1, obj2, obj4) // In this method object 1 will get updated with obj1+obj2+obj4

// const obj3 = Object.assign({}, obj1, obj2, obj4) // In this method obj1, obj2, obj4 will remain same/unchanged and the resulting obj3 will have all the values of other objects. This approach is better as it does not update other objects. 
// Its general syntax is const obj 3 = Object.assign(target, source). Above the target is empty object {}


const obj3 = {...obj1, ...obj2, ...obj4}; // This is the best approach to merge object




// console.log(obj3);




const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // this will return an array of keys from that object
console.log(Object.values(tinderUser));// this will return an array of values from that object
console.log(Object.entries(tinderUser)); // this will return an array of array where first entry will be keys and the second entry will be its value. Not widely used


console.log(tinderUser.hasOwnProperty('isLoggedIn')); // this used to check is there any property in the object 
