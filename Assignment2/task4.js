// 4. Write a function to perform this. You are given two numbers n1 and n2.
//   You need to find the sum of the products of their corresponding digits.
// So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

 function sumOfProducts(n1, n2) {
    // Convert numbers to strings to work with digits
    const str1 = n1.toString().split("").reverse();
    const str2 = n2.toString().split("").reverse();
    
    const maxLength = Math.max(str1.length, str2.length);
    let sum = 0;

    for (let i = 0; i < maxLength; i++) {
        const digit1 = parseInt(str1[i] || 0, 10); 
        const digit2 = parseInt(str2[i] || 0, 10); 
        sum += digit1 * digit2;
    }

    return sum;
}

// Example usage
const n1 = 6;
const n2 = 34;
const result = sumOfProducts(n1, n2);
console.log(`The sum of products of corresponding digits is: ${result}`);
