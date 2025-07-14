import { getThemes } from "../services/Themes.js";
const themes = getThemes();
const firstLetterUC = ([firstLetter, ...rest]: string) =>
    firstLetter.toUpperCase() + rest.join("");

const select = document.getElementById("dream-select");
themes && select?.replaceChildren(
    select?.children[0],
    ...themes.map(t => {
        const newOption = document.createElement("option");
        newOption.value = t;
        newOption.textContent = firstLetterUC(t);
        return newOption;
    }));
