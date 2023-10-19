const form = document.querySelector('form');

// const height = parseInt(document.querySelector('#height').value)
// this usecase will give you empty as form is not submitted yet


form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    let BMI = 0;

    const height = parseFloat((document.querySelector('#height')).value);

    const weight = parseFloat((document.querySelector('#weight')).value);

    const result = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please provide a valid height: ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please provide a valid weight: ${weight}`;
    }
    else{
        BMI = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>${BMI}</span>`;
    }

    
    const resultText = document.querySelector('.sliding-text');
    console.log(resultText);

    if(BMI == 0)
    resultText.innerHTML = '   .   .   .  ';
    else if(BMI < 18.6)
        resultText.innerHTML = 'UNDER WEIGHT';
    else if(BMI >= 18.6 && result <= 24.8)
        resultText.innerHTML = 'NORMAL RANGE';
    else if(BMI > 24.9)   
        resultText.innerHTML = 'OVERWEIGHT';



})