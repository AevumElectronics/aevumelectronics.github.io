const headerel = document.getElementById("headernavbar");

headerf();

function headerf() {
    headerel.innerHTML = `
            <div class="headerpannello">
                <div class="logo">
                    <a href="/index.html">
                        <img src="/img/icon-aevum-solo-logo-shadow-250px.png" class="headerimg" />
                        <img src="/img/icon-aevum-solo-text-250px.png" class="headerimg textimg" />
                    </a>
                </div>

                <div class="headermenu">
                    <div>
                        <a href="/javascript-apps.html">JAVASCRIPT</a>
                    </div>
                    <div>
                        <a href="/html-snippets.html">HTML</a>
                    </div>
                    <div>
                        <a href="/products.html">PRODUCTS</a>
                    </div>
                </div>
            </div>
            `;
}