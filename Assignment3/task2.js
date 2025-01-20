// Q1) Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.

let states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", 
    "Chhattisgarh", "Goa", "Gujarat", "Haryana", 
    "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", 
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", 
    "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", 
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

// Filter out states starting with vowels
let filteredStates = states.filter(state => !/^[AEIOUaeiou]/.test(state));

console.log(filteredStates);




// Q2) let str = 'I love my India'
// output expected = 'India my love I'
// Write code for this.


let str = 'I love my India';

// Split the string into words, reverse the array of words, and join them back into a string
let reversedStr = str.split(' ').reverse().join(' ');

console.log(reversedStr);


// Q3) let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice


let string = 'INDIA';

// Convert the string into an array of characters
let charArray = string.split('');

// Use splice to replace 'IA' with 'ONESIA'
charArray.splice(3, 2, 'O', 'N', 'E', 'S', 'I', 'A');

// Join the modified array back into a string
let output = charArray.join('');

console.log(output);



// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.

let str1 = "I am proud to be an Indian citizen";

// Normalize the string: convert to lowercase and remove non-alphabet characters
let cleanedStr = str1.toLowerCase().replace(/[^a-z]/g, '');

// Define vowel and consonant counters
let vowelsCount = 0;
let consonantsCount = 0;

// Loop through the string and count vowels and consonants
for (let char of cleanedStr) {
    if ('aeiou'.includes(char)) {
        vowelsCount++;
    } else {
        consonantsCount++;
    }
}

console.log(`Vowels: ${vowelsCount}`);
console.log(`Consonants: ${consonantsCount}`);


// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.

function correctfn(string, wrong, correct) {
    // Use replace with a regular expression to ensure it replaces the exact word
    let regex = new RegExp(`\\b${wrong}\\b`, 'g'); // Match the wrong word as a whole word, case-sensitive
    return string.replace(regex, correct);
}

// Example usage
let sentence = "I love my contry";
let updatedSentence = correctfn(sentence, "contry", "country");

console.log(updatedSentence); // Output: "I love my country"


// Q6) inputArr = [1,2,3,9,10,7,5,4,3]
// answer = [9, 10, 7]
// User array.filter and return numbers greater than 5.

let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];

// Use filter to get numbers greater than 5
let result = inputArr.filter(number => number > 5);

console.log(result); // Output: [9, 10, 7]


// Q7)
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
  ];
  
  // Use map to transform the array
  const output1 = students.map(student => {
    // Calculate the average score using reduce
    const totalScore = student.scores.reduce((sum, score) => sum + score, 0);
    const average = totalScore / student.scores.length;
  
    // Return the student object with name and average
    return { name: student.name, average: average };
  });
  
  console.log(output1);

//   Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.


function repeatedDigitSum(number) {
    while (number >= 10) { // Continue until the number is a single digit
        number = number
            .toString()          // Convert the number to a string
            .split('')           // Split into an array of digits
            .reduce((sum, digit) => sum + parseInt(digit), 0); // Sum the digits
    }
    return number; // Return the single digit
}

// Example usage
let result1 = repeatedDigitSum(456);
console.log(result1); 

  


