// här är det bara level-up!
import { UserSettings } from "../models/App.js";
import { addTheme, loadThemes, removeTheme } from "../services/Themes.js";
import { getUsername, setUsername } from "../services/User.js";
import { logOut } from "../utils/Auth.js";

const nameInput = document.getElementById("name-input") as HTMLInputElement;
const themeList = document.getElementById("theme-list") as HTMLUListElement;
const addThemeBtn = document.querySelector(".add-theme button") as HTMLButtonElement;
const changeNameBtn = document.querySelector(".change-name button") as HTMLButtonElement;
const logOutBtn = document.querySelector(".logout") as HTMLButtonElement;

let themes: string[];
let username: string;


loadThemes().then(t => {
    themes = t
    refreshItems();
});

getUsername().then(name => {
    nameInput.value = name;
    username = name;
})

changeNameBtn.addEventListener("click", e => {
    e.preventDefault();
    const nameValue = nameInput.value.trim();
    if (nameValue.length > 0 && nameValue !== username) {
        setUsername(nameValue)
        username = nameValue;
    }
})

addThemeBtn?.addEventListener("click", async e => {
    e.preventDefault();
    const themeInput = document.getElementById("theme-input") as HTMLInputElement;
    const newThemeName = themeInput.value.trim();
    if (newThemeName.length > 0)
        addTheme(newThemeName)
            .then(newList => {
                themes = newList;
                refreshItems();
                themeInput.value = "";
            });
})

async function refreshItems() {
    if (!themes)
        return;

    themeList.replaceChildren(...themes.map(theme => {
        const li = document.createElement("li");
        li.innerHTML = `<p>${theme}</p> <img src="../assets/images/trash_delete.png" />`;
        themeList.appendChild(li);
        const img = li.querySelector("img");
        img?.addEventListener("click", async e => {
            e.preventDefault();
            themes = await removeTheme(theme);
            refreshItems();
        });
        return li;
    }));
}

// "logga ut"
logOutBtn?.addEventListener("click", logOut);