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
                    <input type="text" placeholder="name" />
                    <input type="text" placeholder="email" />
                    <input type="password" placeholder="Senha" />
                </form>
                <section class="box box-three">
                    <button class="btnFunction">Inscreva-se</button>
                </section>
            </section>
            <p>Já tem uma conta? <a href="#login">Entrar</a></p>
        </section>
    </section>
    `;

    containerSignup.innerHTML = templateSignup;

    const name = "";
    const email = containerSignup.querySelector("#user-email");
    const password = containerSignup.querySelector("#user-password");

    return containerSignup;
}