import { loginUser, loginWithGoogle } from "../../lib/authentication.js";
import { validatedMessage, validatedEmailReset, errorsFirebase } from "../../components/login-and-registration-validation.js";

export default () => {
    const containerLogin = document.createElement("div");

    const templateLogin = `
    <section class="containerExternal">
        <section class="boxExternal">
            <section class="box box-one">
                <button id="btnGoogle"><span>Sign in with Google</span></button>
            </section>
            <section class="box box-two">
                <form>
                    <input id="user-email" type="text" placeholder="email" />
                    <input id="user-password" type="password" placeholder="Senha" />
                </form>
                <section class="box box-three">
                    <button id="btnLogin">Entrar</button>
                    <p id="message"></p>
                    <button class="">Esqueceu a senha?</button>
                </section>
            </section>
            <p>Não tem uma conta? <a href="#signup">Inscreva-se</a></p>
        </section>
    </section>
    `;

    containerLogin.innerHTML = templateLogin;

    const btnLoginGoogle = containerLogin.querySelector("#btnGoogle");
    const btnLoginWithEmail = containerLogin.querySelector("#btnLogin");

    const email = containerLogin.querySelector("#user-email");
    const password = containerLogin.querySelector("#user-password");

    btnLoginGoogle.addEventListener("click", (e) => {
        e.preventDefault();
        loginWithGoogle()
            .then(() => {
                window.location.hash = "#feed";
            })
            .catch((error) => {
                const errorMessage = errorsFirebase(error.code);
                const message = containerLogin.querySelector("#message");
                message.innerHTML = errorMessage;
            });
    });

    btnLoginWithEmail.addEventListener("click", (e) => {
        e.preventDefault();
        const validation = validatedMessage(email.value, password.value);
        if (validation !== "") {
            const message = containerLogin.querySelector("#message");
            message.innerHTML = validation;
        } else {
            loginUser(email.value, password.value)
                .then(() => {
                    window.location.hash = "#feed";
                })
                .catch((error) => {
                    const errorMessage = errorsFirebase(error.code);
                    const message = containerLogin.querySelector("#message");
                    message.innerHTML = errorMessage;
                })
        }
    })

    return containerLogin;
}