const btn = document.querySelectorAll('.button');
const body = document.querySelector('body');

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