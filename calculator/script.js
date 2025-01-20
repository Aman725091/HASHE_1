// script.js
document.addEventListener("DOMContentLoaded", () => {
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const output = document.getElementById("output");
  
    const addButton = document.getElementById("add");
    const subtractButton = document.getElementById("subtract");
    const multiplyButton = document.getElementById("multiply");
    const divideButton = document.getElementById("divide");
  
    // Helper function to display result
    function calculate(operation) {
      const val1 = parseFloat(num1.value);
      const val2 = parseFloat(num2.value);
  
      if (isNaN(val1) || isNaN(val2)) {
        output.textContent = "Invalid input!";
        return;
      }
  
      let result = 0;
      switch (operation) {
        case "add":
          result = val1 + val2;
          break;
        case "subtract":
          result = val1 - val2;
          break;
        case "multiply":
          result = val1 * val2;
          break;
        case "divide":
          if (val2 === 0) {
            output.textContent = "Cannot divide by zero!";
            return;
          }
          result = val1 / val2;
          break;
      }
  
      output.textContent = result;
    }
  
    // Event listeners for buttons
    addButton.addEventListener("click", () => calculate("add"));
    subtractButton.addEventListener("click", () => calculate("subtract"));
    multiplyButton.addEventListener("click", () => calculate("multiply"));
    divideButton.addEventListener("click", () => calculate("divide"));
  });
  