import react from 'react';
import './index.css'
import logo from './img/logo.png'
function InstagramSection() {
    return (

        <article class="insta-post" data-aos="zoom-out" data-aos-duration="1000">
            <h2>Seguimi su <a href="https://www.instagram.com/0o_stefania_bertelle_author_o0/"
                target="_blank">Instagram</a> per non
                perderti nulla!</h2>

            <div class="insta-clone">
                <div>
                    <img src={logo} alt="author logo" class="insta-clone-img" data-aos="zoom-in"
                        data-aos-duration="1000" />
                </div>
                <div class="insta-clone-desc">
                    <div class="clone-flex-follow" data-aos="fade-down" data-aos-duration="1000">
                        <p class="insta-clone-desc-title">0o_stefania_bertelle_author_o0</p>
                        <button
                            onclick="location.href='https://www.instagram.com/0o_stefania_bertelle_author_o0/'">Segui</button>
                        <button
                            onclick="location.href='https://www.instagram.com/direct/t/340282366841710300949128235659241252314'">Messaggio</button>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <p>Post: <span>82</span></p>
                        <p><span>2.200 </span>Follower</p>
                        <p><span>848</span> Profili Seguiti</p>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <p>Stefania Bertelle 🖤 Romance Author</p>
                        <p>Scrittore</p>
                        <p>Sta scrivendo...</p>
                        <p>🖤 Non scrivo di principi azzurri 🥀 io sto
                            dalla parte del lupo cattivo😈</p>
                        <p>🖤 Dark/Mafia romance</p>
                        <p>♊ Gemini</p>
                        <p>🖤📚VODKA Trilogy solo su Amazon👇</p>
                        <p>campsite.bio/stefaniabertelleauthor</p>
                    </div>
                </div>
            </div>

            <div class="insta-flex">
                <div>
                    <img src="img/275916542_493785258904082_947629782294085116_n.webp" alt="" data-aos="fade-left"
                        data-aos-duration="1000"
                        onclick="location.href='https://www.instagram.com/0o_stefania_bertelle_author_o0/'" />
                    <img src="img/259137053_653574005692499_7695215108741920751_n.jpg" alt="" data-aos="fade-up"
                        data-aos-duration="1000"
                        onclick="location.href='https://www.instagram.com/0o_stefania_bertelle_author_o0/'" />
                    <img src="img/280470164_396698535668940_8676256932084881730_n.jpg" alt="" data-aos="fade-down"
                        data-aos-duration="1000"
                        onclick="location.href='https://www.instagram.com/0o_stefania_bertelle_author_o0/'" />
                </div>

                <div>
                    <img src="img/305415922_756551695459090_5924666427127412999_n.jpg" alt="" data-aos="fade-right"
                        data-aos-duration="1000"
                        onclick="location.href='https://www.instagram.com/0o_stefania_bertelle_author_o0/'" />
                    <img src="img/272775335_717048722614800_203791384387608053_n.jpg" alt="" data-aos="fade-up"
                        data-aos-duration="1000"
                        onclick="location.href='https://www.instagram.com/0o_stefania_bertelle_author_o0/'" />
                    <img src="img/290200242_1097046587871224_3309056239396621776_n.webp" alt="" data-aos="fade-up-right"
                        onclick="location.href='https://www.instagram.com/0o_stefania_bertelle_author_o0/'" />
                </div>

                <div>
                    <img src=" img/274212471_327715055969113_7859308199232182978_n.jpg" alt="" data-aos="fade-up"
                        data-aos-duration="1000"
                        onclick="location.href='https://www.instagram.com/0o_stefania_bertelle_author_o0/'" />
                    <img src="img/278507600_4969314019813743_5561889273329870082_n.jpg" alt="" data-aos="fade-left"
                        data-aos-duration="1000"
                        onclick="location.href='https://www.instagram.com/0o_stefania_bertelle_author_o0/'" />
                    <img src="img/277601918_724005168979593_6795428885904231435_n.jpg" alt="" data-aos="fade-down-right"
                        data-aos-duration="1000"
                        onclick="location.href='https://www.instagram.com/0o_stefania_bertelle_author_o0/'" />
                </div>

                <div>
                    <img src="img/309548708_3179545455693632_6746185006676251536_n.jpg" alt=""
                        data-aos="fade-left-right" data-aos-duration="1000"
                        onclick="location.href='https://www.instagram.com/0o_stefania_bertelle_author_o0/'" />
                    <img src="img/275220616_3033194846942179_4033743581070419588_n.jpg" alt="" data-aos="fade-up-right"
                        data-aos-duration="1000"
                        onclick="location.href='https://www.instagram.com/0o_stefania_bertelle_author_o0/'" />
                    <img src="img/279857571_322606259939442_6576768751266831009_n.jpg" alt="" data-aos="fade-right"
                        data-aos-duration="1000"
                        onclick="location.href='https://www.instagram.com/0o_stefania_bertelle_author_o0/'" />
                </div>
                <p><a href="https://www.instagram.com/0o_stefania_bertelle_author_o0/">Vedi altro</a></p>
            </div>
        </article>


    )


}

export default InstagramSection;