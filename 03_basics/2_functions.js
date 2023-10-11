// video 21

// let a = 10;
// const b = 20;
// var c = 30;

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a); //error
// console.log(b); //error
// console.log(c); //will execute






// video 22

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

// hoisting
console.log(addone(5)) // this is called hoisting

function addone(num){ // hoisting can only be done at these type of fun.
    return num + 1
}



addTwo(5);  // error
const addTwo = function(num){ // this type of function declaration does not support hoisting
    return num + 2
}


