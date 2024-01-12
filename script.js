// Get the button element
const button = document.querySelector('button');

// Get the element with the class to change color
const element = document.querySelector('.resume');

// Add a click event listener to the button
button.addEventListener('click', () => {
    // Check if the element is currently green
    if (element.style.backgroundColor === 'green') {
        // Change the color of the element back to normal
        element.style.color = '';
        element.style.backgroundColor = '';
        document.querySelector('hr').style.borderColor = '';
    } else {
        // Change the color of the element to green
        element.style.color = 'white';
        element.style.backgroundColor = 'green';
        document.querySelector('hr').style.borderColor = 'white';
    }
});
