

export const storage = <T>(index: string) => {

    const clear = (key: string) => localStorage.removeItem(key);

    const load = async () => new Promise<T>((resolve, reject) => {
        const data = localStorage.getItem(index);
        if (data === undefined)
            return reject();

        return data ? resolve(JSON.parse(data)) : reject();
    })


    const save = ({ data }: { data: T }) => new Promise((resolve, reject) => {
        localStorage[index] = JSON.stringify(data);
        return resolve(true);
    })

    return { load, save, clear }
}