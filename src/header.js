import react from "react";
import "./index.css"


function Header() {
    return (
        <article class="home" data-aos="zoom-in" data-aos-duration="500">
            <div class="home-colors">
                <div>
                    <h1 data-aos="zoom-in" data-aos-duration="1000">Stefania Bertelle</h1>
                    <h2>Non scrivo di principi azzurri, io sto dalla parte del lupo cattivo.</h2>
                </div>
                <div class="home-colors-bottom">
                    <p>Guarda le ultime uscite</p>
                    <p><a href="#romance-section" id="chisono">&#8964</a></p>
                </div>
            </div>
        </article>
    )
}

export default Header;