interface SaveStorageProps<T> { data: T }


export const storage = <T>(key: string) => {

    const clear = (key: string) => localStorage.removeItem(key);

    const load = () => {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) as T : undefined;
    }

    const save = ({ data }: SaveStorageProps<T>) => localStorage[key] = JSON.stringify(data);

    return { load, save, clear }
}