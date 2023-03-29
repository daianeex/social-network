import login from "../js/Pages/login.js";
import signup from "../js/Pages/signup.js";
import feed from "../js/pages/feed.js";
import home from "./pages/home.js";


const main = document.querySelector("#root");

function checkHash() {
    switch (window.location.hash) {
        case " ":
            main.appendChild(home());
            break;
        case "#login":
            main.appendChild(login());
            break;
        case "#signup":
            main.appendChild(signup());
            break;
        case "#feed":
            main.appendChild(feed());
            break;
        default:
            main.appendChild(home());
    }
}

const init = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML = "";
        checkHash();
    })
}
window.addEventListener("load", () => {
    checkHash();
    init();
})