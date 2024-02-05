//vars
const text = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

//functions
const checkPalindrome = () => {
    const word = text.value;
    if (!word) alert("Please input a value");

    const cleanWord = removeNonAlphaNumericCharacters(word);
    const invertedWord = cleanWord.split("").reverse().join("");
    cleanWord === invertedWord ?
        result.innerText = `${word} is a palindrome`
        :
        result.innerText = `${word} is not a palindrome`;

};

const removeNonAlphaNumericCharacters = (word) => {
    const regex = /[^a-zA-Z0-9/s]/g
    return word.replace(regex, "").toLowerCase();
}

//events
button.addEventListener("click", checkPalindrome);