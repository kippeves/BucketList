import { UserSettings } from "../models/App.js";
import { storage } from "../utils/Storage.js";

export const { load: loadUser, save: saveUser } = storage<UserSettings>("user");

export const setUsername = async (name: string) => {
    let data = await loadUser();
    await saveUser({ data: { ...data, username: name } });
}

export const getUsername = async () => {
    const user = await loadUser();
    return user.username;
}