import { saveDreams } from "./Dreams.js";
import { saveThemes } from "./Themes.js";
import { saveUser, setUsername } from "./User.js";

export const initializeSettings = async (username: string) => {
    
    await saveUser({
        data: { username }
    });

    await saveThemes({
        data: ["teknikdrömmar", "vardagsdrömmar", "husdrömmar", "sportdrömmar", "resdrömmar"]
    });

    await saveDreams({
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