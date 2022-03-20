const footerel = document.getElementById("footernavbar");

footerf();

function footerf() {
    footerel.innerHTML = `
    <div class="footerpannello">
        
        <div class="footer-menu">
                <h5>SiteMap</h5>
                <div class=""><a href="/index.html"><i></i>Home</a></div>
                
                <div class=""><a href="/javascript-apps.html"><i></i>Javascript</a></div>
                <div class=""><a href="/html-snippets.html"><i></i>HTML</a></div>
                <div class=""><a href="/linktree.html"><i></i>LinkTree</a></div>

        </div>

        <div class="footer-menu">
                <h5>Social</h5>
                <div class=""><a href="https://twitter.com/Aevum88"><i></i>Twitter</a></div>
                <div class=""><a href="https://www.youtube.com/channel/UCYNVZHemGbQInCFgvvXBJDg"><i></i>YouTube</a></div>
                <div class=""><a href="https://github.com/AevumElectronics"><i></i>GitHub</a></div>
                
        </div>
    </div>
    <div class="footerpannello2">
                <p>Copyright @Aevum 2022</p>
    </div>
    
    `;
}


//<div class=""><a href="/products.html"><i></i>Products</a></div>