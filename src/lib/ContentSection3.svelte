<section id="portfolio" class="content_section_3_container">
    <div class="content">
        <h3>Portfolio</h3>
        <p>Some of my previous projects to illustrate my approach to solving problems.</p>
        <nav class="portfolio_nav">
            <a href="/web-development">
                <i class="icons icon__code"></i>
                Web Development
            </a>
            <a href="/graphic-design">
                <i class="icons icon__pen"></i>
                Graphic Design
            </a>
            <a href="/web-development">
                <i class="icons icon__explorer"></i>
                UI Design
            </a>
        </nav>
    </div>
</section>


<style>
.content_section_3_container {
    width: 100%;
    max-width: 100%;
    margin-bottom: 5rem;
    scroll-margin-top: 5rem;
    scroll-snap-margin-top: 5rem; /* iOS 11 and older */
}
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: min(100%, calc(var(--content_max_width_desktop) * 0.875));
    /* padding: 5rem var(--padding_horizontal_desktop); */
    padding: 3.25rem 0;
}
@media screen and (max-width: 48em) {
    .content {
        align-items: flex-start;
        padding: 1rem 0;
        max-width: 100%;
    }
}

.content > h3 {
    text-align: center;
    color: var(--clr_primary);
    margin-bottom: .75rem;
    font-size: var(--type_scale_3);
}
@media screen and (max-width: 48em) {
    .content > h3, .content > p {
        padding: 0 var(--padding_horizontal_mobile);
    }
    .content > h3 {
        text-align: left;
    }
}
.content > p {
    color: #333;
    margin-bottom: 1.5rem;
    max-width: min(65ch, 100%);
}
.portfolio_nav {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0 .875rem;
    width: 80%;
    max-width: 80%;
    align-items: start;
    /* outline: 1px solid red; */
}
@media screen and (max-width: 64em) {
    .portfolio_nav {
        width: 100%;
        max-width: 100%;
        padding: 0 var(--padding_horizontal_mobile);
    }
}
@media screen and (max-width: 40em) {
    .portfolio_nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 100%;
        margin: 0 auto;
    }
}
.portfolio_nav a {
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    text-align: center;
    line-height: 1.24;

    font-size: var(--type_scale_2);
    font-family: var(--font_primary_semibold);
    padding: 2.5rem .875rem;
    border-radius: 1rem;
    cursor: pointer;

    /* color: #333; */
    color: var(--clr_primary);
    /* margin: 0 .875rem; */
    transition: color 200ms ease-out, background-color 200ms ease-out;

    /* outline: 1px solid green; */
}
.portfolio_nav .icons {
    width: 3.75rem;
    height: 3.75rem;
    filter: brightness(0) var(--filter_clr_primary);
    /* filter: brightness(0) var(--filter_clr_secondary); */
    margin-bottom: 1.5rem;
    transition: all 200ms ease-out;
}
@media screen and (max-width: 40em) {
    .portfolio_nav a {
        flex-direction: row;
        justify-content: flex-start;
        padding: 1.5rem var(--padding_horizontal_mobile);
        margin: 0 auto;
        width: 100%;
        max-width: 100%;
        
        border-radius: 0;
        border-bottom: 2px solid #ececec;
    }
    .portfolio_nav .icons {
        width: 2.25rem;
        height: 2.25rem;
        margin-bottom: 0;
        margin-right: 1rem;
    }
}
.portfolio_nav a:hover,
.portfolio_nav a:focus {
    color: var(--clr_secondary);
    background-color: #f7f7f7;
}
.portfolio_nav a:hover .icons,
.portfolio_nav a:focus .icons {
    transform: scale(1.05);
    filter: brightness(0) var(--filter_clr_secondary);
}
</style>