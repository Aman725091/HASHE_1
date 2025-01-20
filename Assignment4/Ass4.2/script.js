// Select the button and container
const button = document.getElementById('createDiv');
const container = document.getElementById('container');

// Add an event listener to the button
button.addEventListener('click', () => {
    // Create a new div element
    const newDiv = document.createElement('div');
    
    // Add content and class to the div
    newDiv.textContent = 'I am a dynamically created div!';
    newDiv.className = 'new-div';

    // Append the new div to the container
    container.appendChild(newDiv);
});
