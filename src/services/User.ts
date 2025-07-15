import { UserSettings } from "../models/App.js";
import { storage } from "../utils/Storage.js";

const userStorage = storage<UserSettings>("user");
export const { load: loadUser, save: saveUser } = userStorage;

export const setUsername = async (name: string) => {
    let data = await loadUser();
    await saveUser({ data: { ...data, username: name } });
}

export const getUsername = async () => {
    const user = await loadUser();
    return user.username;
}