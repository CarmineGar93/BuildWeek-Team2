const name1 = document.getElementById('name1');
const form = document.getElementById('myForm');
let inputValue;

form.addEventListener('submit', function() {
    inputValue = name1.value;

    localStorage.setItem('vecienz', inputValue); 
});

