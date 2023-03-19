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
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 30rem;
}
.content {
    width: 100%;
    max-width: min(calc(var(--content_max_width_desktop) * 1.125), 95%);

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    /* padding: 5rem 0; */
    min-height: 30rem;
    /* outline: 1px solid red; */
}
@media screen and (max-width: 64em) {
    .content {
        max-width: 100%;
    }
}
@media screen and (max-width: 48em) {
    .content {
        flex-direction: column;
        align-items: flex-start;
        padding: 0;
        width: 100%;
        max-width: 100%;
        /* padding: 5rem 0; */
        
    }
}


.section__left {
    width: 100%;
    max-width: 50%;
    min-height: 30rem;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: var(--clr_primary);

    padding: 0 5.75rem;
    border-radius: 1rem 0 0 1rem;
}
.section__left p {
    margin-bottom: 1rem;
    max-width: min(40ch, 100%);
}
.section__right {
    width: 100%;
    max-width: 50%;
    min-height: 30rem;
    display: flex; 
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #ececec;
    
    padding: 0 2rem;
    border-radius: 0 1rem 1rem 0;
}

@media screen and (max-width: 85.375em) {
    .section__left {
        padding: 0 2.5rem;
    }
}
@media screen and (max-width: 64em) {
    .section__left, .section__right {
        border-radius: 0;
    }
    .section__left {
        padding: 0 1.5rem;
    }
}

@media screen and (max-width: 48em) {
    .section__left {
        min-height: 26.25rem;
        max-height: 50rem;
        padding: 0 1rem;
        /* outline: 1px solid red; */
    }
    .section__left p {
        max-width: 50ch;
    }
    .section__left, .section__right {
        padding: 1.25rem var(--padding_horizontal_mobile);
        width: 100%;
        max-width: 100%;
        
    }
}


.section__right img {
    max-width: 100%;
    object-fit: contain;
    object-position: center;
    /* border: 2px solid var(--clr_primary); */
}


.section__left h3 {
    color: #fff;
    margin-bottom: 1.5rem;
}
.section__left p {
    color: #ececec;
}

.font__bold {
    font-family: var(--font_primary_bold);
}

</style>