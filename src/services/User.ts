import { UserSettings } from "../models/App.js";
import { loadData, saveData } from "../utils/Auth.js";

const key = "user";

export const setUsername = (name: string) => {
    const settings = loadData<UserSettings>(key);
    if (!settings) return;

    settings.username = name;
    saveData(key, settings);
}

export const getUsername = () => loadData<UserSettings>(key)?.username;