import data from "./data.js";

const passwordElement = document.getElementById("password");
const regenerateButtonElement = document.getElementById("password-generator-button");
const copyButtonElement = document.getElementById("copy-option-button");
const messageElement = document.querySelector(".message");

const { capitalCaseAlphabets, smallCaseAlphabets, symbols, numbers } = data;
const TOTAL_ALPHABETIC_CHARACTERS = 26;
const TOTAL_SYMBOLIC_CHARACTERS = 30;
const TOTAL_NUMBERS = 10;

// Generates a password and inserts the value inside input element
function generatePassword() {
    let password = "";
    let iterator = 1;
    while (iterator <= 16) {
        if (iterator % 3 === 0) password += capitalCaseAlphabets[Math.floor(Math.random() * TOTAL_ALPHABETIC_CHARACTERS)];
        else if (iterator % 4 === 0) password += numbers[Math.floor(Math.random() * TOTAL_NUMBERS)];
        else if (iterator % 5 === 0) password += smallCaseAlphabets[Math.floor(Math.random() * TOTAL_ALPHABETIC_CHARACTERS)];
        else password += symbols[Math.floor(Math.random() * TOTAL_SYMBOLIC_CHARACTERS)];

        ++iterator;
    }

    passwordElement.value = password;
}

function copyPasswordToClipBoard() {
    navigator.clipboard.writeText(passwordElement.value);

    messageElement.style.display = "block";
    messageElement.innerText = "Copied to your clipboard";
    setTimeout(() => {
        messageElement.style.display = "none";
    }, 3000);
}

generatePassword();

regenerateButtonElement.addEventListener("click", generatePassword);
copyButtonElement.addEventListener("click", copyPasswordToClipBoard);
