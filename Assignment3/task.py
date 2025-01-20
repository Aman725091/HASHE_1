#Q9) Write a function to count the number of words in a paragraph.

def count_words(paragraph):
    # Use split() to divide the paragraph into words
    words = paragraph.strip().split()
    return len(words)

# Example usage
paragraph = "This is a sample paragraph to test the word count function."
word_count = count_words(paragraph)

print(f"Number of words: {word_count}")

#Q10) Write a function to reverse a string.
#Input - Hello
#Outpur - olleH

def reverse_string(input_string):
    # Use slicing to reverse the string
    return input_string[::-1]

# Example usage
input_string = "Hello"
reversed_string = reverse_string(input_string)

print(f"Reversed string: {reversed_string}")

#Q11)