import { errorsFirebase, validatedMessage } from "../../components/login-and-registration-validation.js";
import { registerNewUser } from "../../lib/authentication.js";

export default () => {
    const containerSignup = document.createElement("div");
    const templateSignup = `
    <section class="containerExternal">
        <section class="boxExternal">
            <section class="titleSignUp">
                <h1>Crie sua conta</h1>
            </section>
            <section class="box box-two">
                <form>
                    <input id="user-name" type="text" placeholder="name" />
                    <input id="user-email" type="text" placeholder="email" />
                    <input id="user-password" type="password" placeholder="Senha" />
                </form>
            </section>
            <section class="box box-three">
                <button id="btn-Register" class="btnFunction">Inscreva-se</button>
                <p id="message"></p>
            </section>
            <p>Já tem uma conta? <a href="#login">Entrar</a></p>
        </section>
    </section>
    `;

    containerSignup.innerHTML = templateSignup;

    const name = containerSignup.querySelector("#user-name");
    const email = containerSignup.querySelector("#user-email");
    const password = containerSignup.querySelector("#user-password");

    const btnCadastrar = containerSignup.querySelector("#btn-Register");

    btnCadastrar.addEventListener("click", (e) => {
        e.preventDefault();
        const validation = validatedMessage(name.value, email.value, password.value);
        if (validation !== "") {
            const message = containerSignup.querySelector("#message");
            message.innerHTML = validation;
        } else {
            registerNewUser(name.value, email.value, password.value)
                .then(() => {
                    window.location.hash = "#feed";
                })
                .catch((error) => {
                    const errorMessage = errorsFirebase(error.code);
                    const message = containerSignup.querySelector("#message");
                    message.innerHTML = errorMessage;
                });
        }
    })


    return containerSignup;
}