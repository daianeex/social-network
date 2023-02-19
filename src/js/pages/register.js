export default () => {
    const containerRegister = document.createElement("div");

    const templateRegister = `
    <div class="containerExternal">
        <div class="boxExternal">
            <div class="box box-two">
                <form>
                    <input type="text" placeholder="email" />
                    <input type="password" placeholder="Senha" />
                </form>
                <div class="box box-three">
                    <button class="btnFunction">Cadastrar</button>
                </div>
            </div>
            <p>Ja tem conta? <a href="#">Entrar</a></p>
        </div>
    </div>
    `;

    containerRegister.innerHTML = templateRegister

    return containerRegister;
}