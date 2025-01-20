// Select buttons and the target div
const addStyleButton = document.getElementById('addStyle');
const removeStyleButton = document.getElementById('removeStyle');
const dynamicDiv = document.getElementById('dynamicDiv');

// Add style dynamically using JavaScript
addStyleButton.addEventListener('click', () => {
    // Apply inline styles directly
    dynamicDiv.style.backgroundColor = '#4caf50';
    dynamicDiv.style.color = 'white';
    dynamicDiv.style.padding = '20px';
    dynamicDiv.style.borderRadius = '10px';
    dynamicDiv.style.textAlign = 'center';
    dynamicDiv.style.fontSize = '1.2em';
});

// Remove style dynamically
removeStyleButton.addEventListener('click', () => {
    // Reset styles to their default values
    dynamicDiv.style = ''; // Removes all inline styles
});
