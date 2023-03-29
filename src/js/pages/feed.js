export default () => {
    const containerFeed = document.createElement("div");

    const templateFeed = `
    <section class="feedContainer">
        <section class="headerFeed">
        </section>
        <section>
            <p>Publique sua teoria</p>
            <textarea placeholder="Qual sua teoria?" rows="3" cols="50"></textarea>
            <span id="error-message"></span>
            <button class="btn">Postar</button>
        </section>
    </section>
    `;

    containerFeed.innerHTML = templateFeed

    return containerFeed;
}