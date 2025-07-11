import { getDreams } from "../services/Dreams.js";
import { getUsername } from "../services/User.js";

const usernameLabel = document.getElementById("user-name");
const list = document.querySelector(".dream-list");

const username = getUsername() ?? "NO USERNAME SET";

const trashIcon = () => {
    const removeIcon = document.createElement("img") as HTMLImageElement;
    removeIcon.src = "../assets/images/trash_delete.png";
    return removeIcon;
}

const dreams = getDreams();
console.log(dreams)

const dreamItems = dreams?.map(d => {
    const item = document.createElement("li");
    item.className = "dream-list_item";

    const input = document.createElement("input");
    input.className = "dream-check";
    input.type = "checkbox";
    input.name = "dream-check";
    input.id = `dream-check-${d.id}`
    input.checked = d.checked;

    const label = document.createElement("label") as HTMLLabelElement;
    label.htmlFor = input.id;

    const theme = document.createElement("span") as HTMLSpanElement;
    theme.className = "dream-theme";
    theme.textContent = d.theme;

    label.append(
        document.createTextNode(`${d.name}, `),
        theme
    )

    const button = document.createElement("button") as HTMLButtonElement;
    button.type = "button";
    button.append(trashIcon())

    item.append(
        input,
        label,
        button
    );
    return item;
})

list?.replaceChildren(...dreamItems ?? [])
/*
<li class="dream-list_item">
    <input class="dream-check" type="checkbox" name="dream-check" id="dream-check-1" checked="">
    <label for="dream-check-1">Lära mig HTML/CSS, <span class="dream-theme">teknikdrömmar</span></label>
    <button type="button"><img src="../assets/images/trash_delete.png"></button>
</li>
*/
/*
<li class="dream-list-item">
    <input class="dream-check" type="checkbox" name="dream-check" id="dream-check-1">
    <label for="dream-check-1">Lära mig HTML/CSS<span class="dream-theme">teknikdrömmar</span></label>
    <button type="button"><img src="../assets/images/trash_delete.png"></button>
</li>

*/


if (usernameLabel)
    usernameLabel.textContent = username;