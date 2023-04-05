<section class="content_section_1_container">
    <div class="content">
        <div class="section__left">
            <h3>My Design Philosphy</h3>
            <p>In this busy world, we tend to overlook how important it is to keep things simple. My approach in creating websites and infographics is to deliver essential information in an easy-to-digest manner.</p>
            <p>I consciously make an effort to make website navigations to be intuitive and accessible. Accessibility is a <span class="font__bold">necessity</span>, not an afterthought.</p>
        </div>
        <div class="section__right">
            <img 
            src="/images/golden-ratio.svg"
            alt="Golden Ratio"
            width="480"
            height="297"
            />
        </div>
    </div>
</section>

<style>
.content_section_1_container {
    width: 100%;
    max-width: min(var(--content_max_width_desktop), 100%);
    margin: 0 auto;
}
.content {
    width: 100%;
    max-width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 5rem var(--padding_horizontal_desktop);
    /* padding: 5rem 0; */
    /* outline: 1px solid red; */
}
@media screen and (max-width: 64em) {
    .content {
        max-width: 100%;
    }
}
@media screen and (max-width: 48em) {
    .content {
        flex-direction: column-reverse;
        align-items: flex-start;
        padding: 3.25rem var(--padding_horizontal_mobile);
        width: 100%;
        max-width: 100%;
    }
}


.section__left {
    width: 50%;
    max-width: 50%;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    /* background-color: var(--clr_primary); */
}
.section__left p {
    margin-bottom: 1rem;
    max-width: min(100%, 40ch);
}
@media screen and (max-width: 48em) {
    .section__left p {
        max-width: 100%;
    }
}
.section__right {
    width: 50%;
    max-width: 50%;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    /* background-color: #ececec; */
    padding: 0;
}
@media screen and (max-width: 48em) {
    .section__left, .section__right {
        width: 100%;
        max-width: 100%;
    }
    .section__right {
        align-items: center;
        margin-bottom: 3.25rem;
    }
}

.section__right img {
    max-width: 65%;
    object-fit: contain;
    object-position: center;
    filter: brightness(0) var(--filter_clr_primary);
    /* border: 2px solid var(--clr_primary); */
}
@media screen and (max-width: 64em) {
    .section__right img {
        width: 80%;
        max-width: 80%;
        max-height: 12.5rem;
    }
}
/* @media screen and (max-width: 48em) {
    .section__right img {
    }
} */


.section__left h3 {
    color: var(--clr_primary);
    margin-bottom: 1.5rem;
}
.section__left p {
    color: #333;
}

.font__bold {
    font-family: var(--font_primary_bold);
}

</style>