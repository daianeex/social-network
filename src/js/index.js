import login from "../js/Pages/login.js";
import Register from "../js/Pages/register.js";

const main = document.querySelector("#root");

const init = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML = ""
        switch(window.location.hash) {
            case " ":
                main.appendChild(login());
                break;
            case "#register":
                main.appendChild(Register());
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