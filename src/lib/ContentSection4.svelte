<script>
let certificates = [
    {
        title: "Certificate from CS50's Web Development with Python and JavaScript course.",
        url: "https://cs50.harvard.edu/certificates/2492c4fe-14ce-4c45-ba99-9406f584f1e4",
        img: "/images/certif/CS50W_result.jpg"
    },
    {
        title: "Certificate from freeCodeCamp's Responsive Web Design course.",
        url: "https://www.freecodecamp.org/certification/masaya-shida/responsive-web-design",
        img: "/images/certif/fcc-certif-responsive-web-design-cropped_result.jpg"
    },
]
</script>
<section id="certifications" class="content_section_4_container">
    <div class="content">
        <h3>Certifications</h3>
        <div class="certif_grid">
            {#each certificates as certificate}
                <div class="certif_item">
                    <a href={certificate.url}>
                        <img 
                        src={certificate.img}
                        alt={certificate.title}
                        title={certificate.title}
                        width="423"
                        height="300"
                        loading="lazy"
                        />
                    </a>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
.content_section_4_container {
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

.certif_grid {
    margin: 2.5rem auto;
    display: grid;
    grid-template-columns: .5fr .5fr;
    gap: 1.5rem;
    width: 100%;
    max-width: 80%;
}
@media screen and (max-width: 64em) {
    .certif_grid {
        max-width: 95%;
    }
}
@media screen and (max-width: 48em) {
    .certif_grid {
        margin: 1rem auto;
        grid-template-columns: 1fr;
        max-width: 90%;
    }
}
.certif_item {
    aspect-ratio: 1.41 / 1;
}
.certif_item img {
    width: 100%; height: 100%;
    object-fit: contain;
    box-shadow: 0 .025rem .625rem rgba(0,0,0,.125);
    transition: 200ms box-shadow ease-out;
}
.certif_item img:hover,
.certif_item img:focus {
    box-shadow: 0 .125rem .75rem rgb(0, 119, 204, 0.425);
}
</style>