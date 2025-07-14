export function logOut(): void {
    window.location.replace('./pages/login.html');
};

export function login(username: string): void {
    window.location.replace("dashboard.html");
}