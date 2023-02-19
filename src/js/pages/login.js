export default () => {
    const containerLogin = document.createElement("div");

    const templateLogin = `
    <section class="containerExternal">
        <section class="boxExternal">
            <section class="box box-one">
                <button><span>Sign in with Google</span></button>
            </section>
            <section class="box box-two">
                <form>
                    <input type="text" placeholder="email" />
                    <input type="password" placeholder="Senha" />
                </form>
                <section class="box box-three">
                    <button class="btnLogin">Entrar</button>
                    <button>Esqueceu a senha?</button>
                </section>
            </section>
            <p>Não tem conta? <a href="#register">Cadastrar</a></p>
        </section>
    </section>
    `;

    containerLogin.innerHTML = templateLogin

    return containerLogin;
}