// script.js
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggleButton");
    const paragraph = document.getElementById("text");
  
    // Add a click event listener to the button
    toggleButton.addEventListener("click", () => {
      // Toggle the visibility of the paragraph
      if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
        toggleButton.textContent = "Hide";
      } else {
        paragraph.style.display = "none";
        toggleButton.textContent = "Show";
      }
    });
  });
  