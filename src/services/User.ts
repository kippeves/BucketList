import { UserSettings } from "../models/App.js";
import { storage } from "../utils/Storage.js";

export const userStorage = storage<UserSettings>("user");
const { load, save } = userStorage;

export const setUsername = (name: string) => {
    const data = load();
    if (!data) return;

    data.username = name;

    save({ data });
}

export const getUsername = () => load()?.username;