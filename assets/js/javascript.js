const name1 = document.getElementById('name1');
const form = document.getElementById('myForm');
const btnPromise = document.getElementById('btnPromise');
const promise = document.getElementById('promise');

btnPromise.style.opacity = '0.5';

let inputValue;

form.addEventListener('submit', function() {
    inputValue = name1.value;

    localStorage.setItem('vecienz', inputValue);
    
    form.reset();
});


name1.addEventListener('input', function(){
    if (name1.value !== '' && promise.checked === true){
        btnPromise.style.opacity = '1';
    } else {
        btnPromise.style.opacity = '0.5'
    }
})

promise.addEventListener('input', function(){
    if (name1.value !== '' && promise.checked === true){
        btnPromise.style.opacity = '1';
    } else {
        btnPromise.style.opacity = '0.5'
    }
})
