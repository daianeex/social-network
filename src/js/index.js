import login from "../js/Pages/login.js";
import register from "../js/Pages/register.js";
import feed from "../js/pages/feed.js";

const main = document.querySelector("#root");

const init = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML = ""
        switch(window.location.hash) {
            case " ":
                main.appendChild(login());
                break;
            case "#register":
                main.appendChild(register());
                break;
            case "#feed":
                main.appendChild(feed());
                break;
            default:
                main.appendChild(login());
        }
    })
}

window.addEventListener("load", () => {
    main.appendChild(login());
    init();
})