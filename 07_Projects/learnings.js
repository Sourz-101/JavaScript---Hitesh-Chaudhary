// project 1
addEventListener('click', function (evt) {
    switch (evt.target.id) {
        case 'grey':
            body.style.backgroundColor = evt.target.id;
            break;
    
        case 'white':
            body.style.backgroundColor = evt.target.id;
            break;
    
        case 'blue':
            body.style.backgroundColor = evt.target.id;
            break;
    
        case 'yellow':
            body.style.backgroundColor = evt.target.id;
            break;
    
        default:
            break;
    }
})


// above code lisents to the click of the user and execute affter the click of the user


// Project 2

setInterval( () => {
    let time = new Date();
    console.log(time.toLocaleTimeString());
}, 1000)

// Above funciton execute the code inside after specified interval
