import login from "../js/Pages/login.js";
import signup from "../js/Pages/signup.js";
import feed from "../js/pages/feed.js";

const main = document.querySelector("#root");

function checkHash() {
    switch (window.location.hash) {
        case " ":
            main.appendChild(login());
            break;
        case "#signup":
            main.appendChild(signup());
            break;
        case "#feed":
            main.appendChild(feed());
            break;
        default:
            main.appendChild(login());
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