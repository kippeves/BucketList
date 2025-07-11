import { logOut } from "./utils/Auth.js";

// när användaren kommer in på sidan (DOMen laddats in), ska den omdirigeras till index.html 
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logOut();
    }, 4000); // 4000 ms = 4 sekunder
});

