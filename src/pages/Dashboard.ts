import { checkDream, loadDreams } from "../services/Dreams.js";
import { getUsername } from "../services/User.js";

const usernameLabel = document.getElementById("user-name");
const list = document.querySelector(".dream-list");

const trashIcon = () => {
    const removeIcon = document.createElement("img");
    removeIcon.src = "../assets/images/trash_delete.png";
    return removeIcon;
}

const refreshItems = () =>
    loadDreams().then(dreams => {
        const newItems = dreams.map(d => {
            const item = document.createElement("li");
            item.className = "dream-list_item";

            const input = document.createElement("input");
            input.className = "dream-check";
            input.type = "checkbox";
            input.name = "dream-check";
            input.id = `dream-check-${d.id}`
            input.checked = d.checked;

            input.addEventListener("change", async e => {
                e.preventDefault();
                await checkDream(d.id);
                refreshItems();
            })

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

        list?.replaceChildren(...newItems)
    })

refreshItems();


if (usernameLabel)
    getUsername()
        .then(name => usernameLabel.textContent = name)
