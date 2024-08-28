let principal = document.querySelector('#principal');

principal

principal.style.border = '2px solid green';
principal.style.border = '5px solid green';

let navEnlaces = document.querySelectorAll('.navigation a');
navEnlaces

navEnlaces.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        alert("Pushed a button " + this.textContent)
    });
});

document.querySelector('input[type=text]');

let submitButton = document.querySelector('input[type="submit"]');

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    let emailInput = document.querySelector('input[type=text]');
    alert(`Email para subscribirse: ${emailInput.value}`)
});

