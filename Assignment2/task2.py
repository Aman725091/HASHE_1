
#2. Write a function to calculate which can add, subtract, multiply and divide two numbers. 
# Use switch inside function.

def calculator(a, b, operation):
    operations = {
        'add': a + b,
        'subtract': a - b,
        'multiply': a * b,
        'divide': a / b if b != 0 else "Division by zero error"
    }
    return operations.get(operation, "Invalid operation")

# Example usage
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))
op = input("Enter the operation (add, subtract, multiply, divide): ").strip().lower()

result = calculator(num1, num2, op)
print(f"The result is: {result}")
