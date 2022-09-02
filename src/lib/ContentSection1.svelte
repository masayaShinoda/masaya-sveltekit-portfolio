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
    <div class="bg_decorative">
        <div></div>
        <div></div>
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: var(--content_max_width_desktop);
    /* padding: 5rem 0; */
    min-height: 30rem;
    
    padding: 0 var(--padding_horizontal_desktop) 0 var(--padding_horizontal_desktop);
}
.bg_decorative {
    display: flex;
    width: 100%;
    height: 30rem;
    justify-content: space-between;
    position: absolute;
    left: 0;
    z-index: -25;
}
.bg_decorative > div {
    width: 50%;
}
.bg_decorative > div:first-of-type {
    background-color: var(--clr_primary);
}
.bg_decorative > div:last-of-type {
    background-color: #ececec;
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
    
    .bg_decorative {
        display: none;
    }
    
}


.section__left {
    max-width: 40%;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
.section__left p {
    margin-bottom: 1rem;
}
.section__right {
    max-width: 40%;
    display: flex; 
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
@media screen and (max-width: 48em) {
    .section__left {
        background-color: var(--clr_primary);
    }
    .section__left p {
        max-width: 50ch;
    }
    .section__right {
        background-color: #ececec;
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