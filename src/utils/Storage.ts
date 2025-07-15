export const storage = <T>(key: string) => {

    const clear = (key: string) => localStorage.removeItem(key);

    const load = async () => new Promise<T>((resolve, reject) => {
        const data = localStorage.getItem(key);
        if (data === undefined)
            return reject();

        return data ? resolve(JSON.parse(data)) : reject();
    })


    const save = ({ data }: { data: T }) => new Promise<void>((resolve, reject) => {
        localStorage[key] = JSON.stringify(data);
        return resolve();
    })

    return { load, save, clear }
}