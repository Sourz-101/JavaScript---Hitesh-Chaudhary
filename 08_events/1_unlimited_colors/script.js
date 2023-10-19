// generate a random color

const randomColor =  function () {
    const hex = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += hex[Math.round(Math.random() * 16)];
    }
    return color;
};

let startColorChanging;

// for start button
document.querySelector('#start').addEventListener('click', () => {
    if (!startColorChanging) { //this condition will prevent to run multiple event at same time.

        startColorChanging = setInterval(() => {
            document.body.style.backgroundColor = randomColor();
        }, 1000);
    }
});   

// for stop button
document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(startColorChanging);
    startColorChanging = null; // this is to flush the value in the variable
    console.log('Stopped');
});




