export function logOut(): void {
    window.location.replace('login.html');
};

export function login(username: string): void {
    window.location.replace("dashboard.html");
}


export const loadData = <T>(key: string) => {
    const settings = sessionStorage.getItem(key);
    if (!settings)
        return;

    return JSON.parse(settings) as T;
}

export const saveData = <T>(key: string, data: T) => {
    try {
        const json = JSON.stringify(data);
        sessionStorage.setItem(key, json);
        return true;
    } catch {
        return false;
    }
}