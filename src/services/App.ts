import { storage } from "../utils/Storage.js"
import { saveDreams } from "./Dreams.js";
import { saveThemes } from "./Themes.js";
import { setUsername } from "./User.js";



export const initializeSettings = (username: string) => {
    setUsername(username);
    saveThemes({ data: ["teknikdrömmar", "vardagsdrömmar", "husdrömmar", "sportdrömmar", "resdrömmar"] });
    saveDreams({
        data: [{
            id: 1,
            name: "Lära mig HTML/CSS",
            theme: "teknikdrömmar",
            checked: true
        },
        {
            id: 2,
            name: "Lära mig TypeScript",
            theme: "teknikdrömmar",
            checked: false
        },
        {
            id: 3,
            name: "En dröm som tar flera rader lorem ipsum",
            theme: "vardagsdrömmar",
            checked: false
        }
        ]
    })
}