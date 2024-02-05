# Palindrome Checker

This is a simple web application that checks if a given word or phrase is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

## Features

- Input field: Enter a word or phrase to check if it's a palindrome.
- Check button: Click this button to check if the input is a palindrome.
- Result display: This area displays the result of the palindrome check.

## How It Works

The application uses JavaScript to handle user interactions and perform the palindrome check.

- `checkPalindrome()`: This function gets the value of the input field, removes non-alphanumeric characters, and checks if it's a palindrome. It updates the result display with the result.
- `removeNonAlphaNumericCharacters(word)`: This function removes non-alphanumeric characters from a word and converts it to lowercase.
- The check button has an event listener that calls `checkPalindrome()` when clicked.

## How to Use

1. Open the HTML file in a web browser.
2. Enter a word or phrase in the input field.
3. Click the "Check" button.
4. The result will be displayed in the result area.

## Future Improvements

- Add a clear button to clear the input field and result display.
- Improve the user interface for a better user experience.