import { storage } from "../utils/Storage.js";
import { getDreams, saveDreams } from "./Dreams.js";

const key = "themes";
export const { save: saveThemes, load: getThemes } = storage<string[]>("themes");


export const removeTheme = (themeKey: string) => {
    let currentThemes = getThemes();
    if (!currentThemes) return;

    currentThemes = currentThemes.filter(x => x !== themeKey);
    saveThemes({ data: currentThemes });

    let dreams = getDreams();
    if (!dreams) return;

    dreams?.filter(d => d.theme === themeKey).forEach(d => d.theme = '-');
    saveDreams({ data: dreams });
    return currentThemes;
}

export const addTheme = (newTheme: string) => {
    const currentThemes = getThemes();
    if (!currentThemes) return;
    if (!currentThemes?.includes(newTheme))
        currentThemes?.push(newTheme);
    saveThemes({ data: currentThemes });
}