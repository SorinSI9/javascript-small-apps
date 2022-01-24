
let counter = document.getElementById('number');
let increaseButton = document.getElementById('counter__buton--add');
let decreaseButton = document.getElementById('counter__buton--lower');

let count = 0;

updateCounter();

increaseButton.addEventListener("click", () => {
    count++;
    if(count === 0) {
        counter.classList.remove('green','tomato')   
    } else if(count > 0) {
        counter.classList.add('green');
        counter.classList.remove('tomato');
    } 
    updateCounter();
});

decreaseButton.addEventListener("click", () => {
    count--;
    if(count === 0) {
        counter.classList.remove('green', 'tomato');
    } else if(count < 0) {
        counter.classList.remove('green');
        counter.classList.add('tomato');
    }
    updateCounter();

});

function updateCounter() {
    counter.innerHTML = count;
}