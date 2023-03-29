export default () => {
    const containerHome = document.createElement("div");

    const templateHome = `
    <section class="feedContainer">
        <section> 
            <img src="/logo 1.png" alt="logo">
            Sua rede de teorias  da conspiração
            Feita para compartilhar historias e 
            visão sobre
            <button> <a href="#login">Entrar</a> </button>
        </section>
        
    </section>
    `;

    containerHome.innerHTML = templateHome

    return containerHome;
}