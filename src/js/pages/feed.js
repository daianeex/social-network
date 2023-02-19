export default () => {
    const containerFeed = document.createElement("div");

    const templateFeed = `
    <section class="containerExternal">
        <h1>Feed</h1>
    </section>
    `;

    containerFeed.innerHTML = templateFeed

    return containerFeed;
}