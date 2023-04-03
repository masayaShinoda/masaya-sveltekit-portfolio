<section class="hero_container">
    <div class="hero_content">
        <span>
            <h1 class="subtitle">
                Hi, I'm Masaya!
            </h1>
            <h2 class="title">
                I help ideas achieve a quality online presence.
            </h2>
            <a href="#projects" class="action_btn">
                See my Projects →
            </a>
        </span>
        <!-- <img src="/images/shinjang.png" alt="Hero" width="200" height="400" style="object-fit: contain" /> -->
        <img 
        src="/images/g14-shadow.png"
        alt="ASUS G14 laptop, decorative."
        width="320"
        height="240"
        />
    </div>
</section>


<style>
.hero_container {
    display: flex; 
    flex-direction: column;
    align-items: flex-start;
    padding: 5.75rem 0;

    width: 100%;
    max-width: 100%;
}
.hero_content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* width: calc(100% - 2.5rem); */
    max-width: var(--content_max_width_desktop);
    margin: 0 auto;
    padding: 0 var(--padding_horizontal_desktop);
}
@media screen and (max-width: 85.375em) {
    .hero_content {
        max-width: calc(100% - 5.75em);
        /* outline: 1px solid red; */
    }
}
@media screen and (max-width: 64em) {
    .hero_content {
        max-width: 95%;
        padding: 0;
    }
}
@media screen and (max-width: 48em) {
    .hero_container {
        padding: 0 0 5rem 0;
    }
    .hero_content {
        flex-direction: column-reverse;
        align-items: flex-start;
        width: 100%; 
        max-width: 100%;
        padding: 0;
        /* outline: 1px solid red; */
    }
}
.hero_content > span {
    max-width: min(40ch, 45%);
}
.hero_content > img {
    max-width: 40%;
    object-fit: contain;
}
@media screen and (max-width: 48em) {
    .hero_content > span {
        max-width: 100%;
        padding: 0 var(--padding_horizontal_mobile);
    }
    .hero_content > img {
        margin: 0 auto;
        max-width: 60%;
    }
}
.subtitle {
    font-size: var(--type_scale_2);
    font-family: var(--font_primary_semibold);
    color: #333;
    margin-bottom: 1.5rem;
}
.title {
    color: var(--clr_primary);
    margin-bottom: 2.5rem;
}
.action_btn {
    color: var(--clr_secondary);
    font-size: 1.25rem;
    font-family: var(--font_primary_semibold);
    padding: .125rem 0;
    text-decoration: none;
}
.action_btn:hover {
    text-decoration: underline;
}

</style>