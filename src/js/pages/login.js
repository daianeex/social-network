import { loginUser, loginWithGoogle, resetPassword } from "../../lib/authentication.js";
import { validatedMessage, validatedEmailReset, errorsFirebase } from "../../components/login-and-registration-validation.js";

export default () => {
    const containerLogin = document.createElement("div");

    const templateLogin = `
    <section class="containerExternal">
        <section class="boxExternal">
            <section class="box-one">
                <button class="btnFunction" id="btnGoogle"><span>Sign in with Google</span></button>
            </section>
            <p class="paragraphLogin"> OU </p>
            <section class="box-two">
                <form>
                    <input id="user-email" type="text" placeholder="Email" />
                    <input id="user-password" type="password" placeholder="Senha" />
                </form>
                <section class="box-three">
                    <button class="btnFunction" id="btnLogin">Entrar</button>
                    <p id="message"></p>
                    <button id="btn-reset" class="btnReset">Esqueceu a senha?</button>
                </section>
            </section>
            <p>Não tem uma conta? <a href="#signup">Inscreva-se</a></p>
        </section>
    </section>
    `;

    containerLogin.innerHTML = templateLogin;

    const btnLoginGoogle = containerLogin.querySelector("#btnGoogle");
    const btnLoginWithEmail = containerLogin.querySelector("#btnLogin");
    const btnResetPassword = containerLogin.querySelector("#btn-reset")

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

    btnResetPassword.addEventListener("click", (e) => {
        e.preventDefault();
        const validation = validatedEmailReset(email.value);
        if (validation !== "") {
            const message = containerLogin.querySelector("#message");
            message.innerHTML = validation;
        } else {
            resetPassword(email.value)
                .then(() => {
                    message.innerHTML = "Email enviado com sucesso!";
                })
                .catch((error) => {
                    const errorMessage = errorsFirebase(error.code);
                    const message = containerLogin.querySelector("#message");
                    message.innerHTML = errorMessage;
                })

        }
    });


    return containerLogin;
}