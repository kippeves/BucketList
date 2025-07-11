import { UserSettings } from "../models/App.js";
import { saveData } from "../utils/Auth.js"

export const initializeSettings = (username: string) => {
    saveData<UserSettings>("user", { username })
    saveData("themes", ["teknikdrömmar", "vardagsdrömmar", "husdrömmar", "sportdrömmar", "resdrömmar"]);
    saveData("dreams", [{
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
    ])
}