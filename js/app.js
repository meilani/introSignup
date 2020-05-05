const submit = document.querySelector('#submit');
const inputs = document.querySelectorAll('.input-field');

function validInput (e) {
    inputs.forEach(x => {
        if (x.validity.valid) {
            x.classList.remove('invalid-input');
            x.nextElementSibling.style.display = 'none';
        } else{
            x.classList.add('invalid-input');
            x.nextElementSibling.style.display = 'block';
        } 
    });
}

submit.addEventListener('click', validInput);