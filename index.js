const form = document.querySelector('form');
const result = document.getElementById('result');
const weightGuide = document.getElementById('weight-guide');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    let bmi = 0;

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = "Please give a valid height";
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = "Please give a valid weight";
    } else {
        bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`;
    }

    if (bmi < 18.6) {
        weightGuide.innerHTML = "Underweight ";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        weightGuide.innerHTML = "Normal Weight ";
    } else if (bmi > 24.9) {
        weightGuide.innerHTML = "Overweight ";
    }
});
