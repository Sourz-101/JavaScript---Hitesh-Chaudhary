// Vide0 13

let myDate = new Date();

// console.log(myDate); // 2023-10-02T05:55:46.223Z

// console.log(myDate.toString());  //Mon Oct 02 2023 11:28:35 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); //Mon Oct 02 2023
// console.log(myDate.toLocaleDateString()); //2/10/2023
// console.log(myDate.toLocaleString()); //2/10/2023, 11:28:35 am



let myCreatedDate = new Date(2023, 0, 21);
// In JS months starts with 0(yyyy, mm, dd)
// console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    day:"2-digit",
    
    
}));
