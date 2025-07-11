import { initializeSettings } from '../services/App.js';



const form = document.querySelector("form");
const usernameField = document.getElementById("username") as HTMLInputElement;
const passwordField = document.getElementById("password") as HTMLInputElement;
const toggleIcon = document.querySelector(".toggle-password") as HTMLButtonElement;
const passwordErrorText = document.getElementById("password-error-message");
const usernameErrorText = document.getElementById("username-error-message");

let isPassword = true;
let passwordType = isPassword ? "password" : "text";
passwordField.type = passwordType;

const flipPassword = () => {
    isPassword = !isPassword;
    passwordField.type = isPassword ? "password" : "text";
}


toggleIcon?.addEventListener("click", _ => flipPassword())
form?.addEventListener("submit", e => {
    const invalidUsername = usernameField.value.trim().length === 0;
    const invalidPassword = passwordField.value.trim().length < 4;

    usernameErrorText!.style.display = invalidUsername ? "block" : "none";
    passwordErrorText!.style.display = invalidPassword ? "block" : "none";

    if (invalidUsername || invalidPassword) {
        e.preventDefault();
        return;
    }

    initializeSettings(usernameField.value);

});