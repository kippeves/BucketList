import { addDream } from "../services/Dreams.js";
import { loadThemes } from "../services/Themes.js";

const select = document.getElementById("dream-select");

const firstLetterUC = ([firstLetter, ...rest]: string) =>
    firstLetter.toUpperCase() + rest.join("");

loadThemes().then(themes =>
    select?.replaceChildren(
        select?.children[0],
        ...themes.map(t => {
            const newOption = document.createElement("option");
            newOption.value = t;
            newOption.textContent = firstLetterUC(t);
            return newOption;
        }))
)

const form = document.querySelector("form");
console.log(form)
form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector("#dream") as HTMLInputElement;
    const select = form.querySelector("#dream-select") as HTMLInputElement;

    addDream({ name: input.value, theme: select.value })
        .then(result =>
            result && showConfirm({ result: result !== undefined })
        );
})

const showConfirm = ({ result }: { result: boolean }) => {
    const main = document.querySelector("main");
    const div = document.createElement("div");
    div.textContent = result ? "Din dröm lades till" : "Din dröm kunde inte läggas till";
    main?.append(div);

    setTimeout(() => {
        main?.removeChild(div);
    }, 1250)
}