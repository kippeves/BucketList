import { Dream } from "../models/Dream.js"
import { storage } from "../utils/Storage.js"

export const { save: saveDreams, load: loadDreams } = storage<Dream[]>("dreams");

export async function checkDream(index: number) {
    return new Promise<Dream>(async (resolve, reject) => {
        const dreams = await loadDreams();
        const foundDream = dreams.find(d => d.id === index);

        if (!foundDream)
            return reject();

        foundDream.checked = !foundDream.checked;
        dreams[dreams.indexOf(foundDream)] = foundDream;

        try {
            await saveDreams({ data: dreams });
            return resolve(foundDream);
        } catch (e) {
            return reject(e);
        }

    });
}

export const addDream = async (data: Omit<Dream, "id" | "checked">) => {
    return new Promise<Dream[]>(async (resolve, reject) => {
        const dreams = await loadDreams();

        if (!dreams)
            return reject();

        const newList = [...dreams, { ...data, id: ++dreams.slice(-1)[0].id, checked: false }]
        saveDreams({ data: newList });
        return resolve(newList);
    })
}