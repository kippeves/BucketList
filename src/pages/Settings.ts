// här är det bara level-up!
import { name, themes } from "../models/Dream.js";
import { logOut } from "../utils/Auth.js";

const nameInput = document.getElementById("name-input") as HTMLInputElement;
const themeList = document.getElementById("theme-list") as HTMLUListElement;
const logOutBtn = document.querySelector(".logout") as HTMLButtonElement;

nameInput.value = name;

if (themeList) {
    themes.forEach(theme => {
        const li = document.createElement("li");
        li.innerHTML = `<p>${theme}</p> <img src="../assets/images/trash_delete.png" />`;
        themeList.appendChild(li);
    });
}

// "logga ut"
logOutBtn?.addEventListener("click", logOut);