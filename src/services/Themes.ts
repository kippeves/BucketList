import { storage } from "../utils/Storage.js";
import { loadDreams, saveDreams } from "./Dreams.js";

export const { save: saveThemes, load: loadThemes } = storage<string[]>("themes");

export async function removeTheme(themeKey: string) {
    return new Promise<string[]>(async (resolve, reject) => {
        let themes = await loadThemes();
        let dreams = await loadDreams();
        if (!themes || !dreams) return reject();

        let themesCopy = structuredClone(themes);
        const dreamsCopy = structuredClone(dreams);

        themesCopy = themesCopy.filter(x => x !== themeKey);
        dreamsCopy?.filter(d => d.theme === themeKey).forEach(d => d.theme = '-');

        if (themesCopy === themes)
            return resolve(themesCopy);

        saveThemes({ data: themesCopy });

        if (dreamsCopy !== dreams)
            saveDreams({ data: dreamsCopy });

        return resolve(themesCopy);
    });
}

export const addTheme = async (newTheme: string) => {
    return new Promise<string[]>(async (resolve, reject) => {
        const currentThemes = await loadThemes();
        if (!currentThemes)
            return reject();
        if (!currentThemes?.includes(newTheme))
            currentThemes?.push(newTheme);
        saveThemes({ data: currentThemes });
        return resolve(currentThemes);
    })
}