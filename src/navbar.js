import react from 'react';
import logo from "./img/logo.png"
import "./index.css"

function Navbar() {
    return (
        <nav>
            <div class="logo-flex">
                <img src={logo} alt="" class="logo" />
                <div>
                    <p>StefaniaBertelle</p>
                    <p>Scrittrice di Romanzi Dark</p>
                </div>
            </div>
            <div>
                <ul class="nav-list">
                    <li class="nav-item"><a href="">ROMANZI</a></li>
                    <li class="nav-item"><a href="#chisono">CHI SONO</a></li>
                    <li class="nav-item"><a href="">CONTATTI</a></li>
                    <li class="nav-item"><a href="home.html">HOME</a></li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;