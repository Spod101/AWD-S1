const button = document.querySelector('.button');
const container = document.querySelector('.container');
const upper = document.querySelector('.upper-section');
const line = document.querySelector('.line');

let isButtonClicked = false;

button.addEventListener('click', () => {
    if (isButtonClicked) {
        container.style.backgroundColor = 'white';
        upper.style.backgroundColor = '';
        upper.style.color = '';
        line.style.backgroundColor = '';
        isButtonClicked = false;
    } else {
        container.style.backgroundColor = '#FDFFAB';
        upper.style.backgroundColor = '#4F6F52';
        upper.style.color = '#D2E3C8';
        line.style.backgroundColor = '#FDFFAB';
        isButtonClicked = true;
    }
});
