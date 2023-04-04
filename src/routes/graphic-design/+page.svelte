<script>
import { onMount } from "svelte"
import data from "./data.js"
import { lazyLoad } from "./lazy_load.js"

let gfx_projects = data.gfx_projects

onMount(() => {
    let industry_divs = document.querySelectorAll(".gfx_projects_section__body__industry")

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(
                entry => {
                    const intersecting = entry.isIntersecting
                    if(!intersecting) {
                        document.querySelector(`a[href='#${entry.target.id}']`).classList.add("btn_main__inactive")
                    } else {
                        document.querySelector(`a[href='#${entry.target.id}']`).classList.remove("btn_main__inactive")
                    }
                }
            )
        },
        {
            threshold: 0.5,
        }
    )
    industry_divs.forEach(industry => {
        observer.observe(industry)
    })
})
</script>

<svelte:head>
    <title>Masaya Shida | Graphic Design Portfolio</title>
</svelte:head>
<div class="content_page_container">
    <div class="content">
        <div class="gfxdes_top_section">
            <img 
            src="/images/icon-pen.svg"
            alt="decorative icon"
            width="100"
            height="75"
            loading="lazy"
            />
            <h1>Graphic Design Portfolio</h1>
            <p>I have always believed in using graphic design as an effective method to communicate key ideas to an audience.</p>
        </div>
        <div class="gfx_projects_section__nav">
            <label for="gfx_projects_section__nav__btn_group">Industries: </label>
            <nav id="gfx_projects_section__nav__btn_group" class="gfx_projects_section__nav__btn_group">
                {#each Array.from(gfx_projects.filter(project => project.items.length > 0).map(project => project.industry)).filter((x, i, a) => a.indexOf(x) == i) as industry}
                    <a href={`#${encodeURI(industry)}`} class="btn_main btn_main__smaller">
                        {industry}
                    </a>
                {/each}
            </nav>
        </div>
        <div class="gfxdes_grid_section">
            <!-- Photo Grid -->
            {#each Array.from(gfx_projects.filter(project => project.items.length > 0).map(project => project.industry)).filter((x, i, a) => a.indexOf(x) == i) as industry, index}
                <h5 class="industry">Industry: {industry}</h5>
                <div id={encodeURI(industry)} key={index} class="row gfx_projects_section__body__industry">
                    {#each gfx_projects as project}
                        {#if project.industry === industry}
                            <div class="column">
                                {#each project.items as item, n}
                                    {#if (n + 1) % 3 === 1}
                                        <img
                                            use:lazyLoad={`/images/graphic-design/${item.src}`}
                                            alt={item.alt}
                                            loading="lazy"
                                            id={`${index} ${project.industry}`} 
                                            key={`${index} ${project.industry}`}
                                            class="gfx_projects_section__body__item"
                                        >
                                    {/if}
                                {/each}
                            </div>
                            <div class="column">
                                {#each project.items as item, n}
                                    {#if (n + 1) % 3 === 2}
                                        <img
                                            use:lazyLoad={`/images/graphic-design/${item.src}`}
                                            alt={item.alt}
                                            loading="lazy"
                                            id={`${index} ${project.industry}`} 
                                            key={`${index} ${project.industry}`}
                                            class="gfx_projects_section__body__item"
                                        >
                                    {/if}
                                {/each}
                            </div>
                            <div class="column">
                                {#each project.items as item, n}
                                    {#if (n + 1) % 3 === 0}
                                        <img
                                            use:lazyLoad={`/images/graphic-design/${item.src}`}
                                            alt={item.alt}
                                            loading="lazy"
                                            id={`${index} ${project.industry}`} 
                                            key={`${index} ${project.industry}`}
                                            class="gfx_projects_section__body__item"
                                        >
                                    {/if}
                                {/each}
                            </div>
                        {/if}
                    {/each}

                </div>
            {:else}
                    <!-- empty list -->
                    <p style="margin: 3.25rem auto; text-align: center;">No items found 🧐</p>
            {/each}
        </div>
    </div>
</div>


<style>
.gfxdes_top_section {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin: 0 auto;
    padding: 1rem 0;
    /* width: 100%; */
}
@media screen and (max-width: 48em) {
    .gfxdes_top_section {
        margin-bottom: 2.5rem;
    }
}
.gfxdes_top_section > img {
    object-fit: contain;
    object-position: center;
    filter: var(--filter_clr_secondary);
    margin-bottom: 1.75rem;
}


.gfxdes_top_section > h1 {
    font-family: var(--font_primary_semibold);
    font-size: 2rem;
    color: var(--clr_primary);
    text-align: center;
    margin-bottom: 1rem;
}
@media screen and (max-width: 64em) {
    .gfxdes_top_section > h1 {
        font-size: var(--type_scale_3);
    }
}
@media screen and (max-width: 48em) {
    .gfxdes_top_section > h1 {
        font-size: 1.75rem;
    }
}
.gfxdes_top_section > p {
    text-align: center;
    max-width: min(45ch, 100%);
    color: #333;
}
.gfx_projects_section__nav {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;

    margin: 0 auto;
    background-color: rgba(255,255,255,.92);
    -webkit-backdrop-filter: blur(.325rem);
    backdrop-filter: blur(.325rem);
}
@media screen and (max-width: 48em) {
    .gfx_projects_section__nav {
        display: none;
    }
}
.gfx_projects_section__nav > label {
    margin-right: .5rem;
    color: #333;
    font-size: calc(var(--type_scale_1) * 0.9);
}
.gfx_projects_section__nav__btn_group {
    padding: 1.5rem 0;
}





.gfxdes_grid_section {
    margin: 2.5rem auto;
    max-width: min(calc(var(--content_max_width_desktop) * 0.9), 100%);
}
.gfxdes_grid_section > h5.industry {
    margin-left: .25rem;
    font-family: var(--font_primary);
    color: #333;
    font-size: var(--type_scale_1);
}
.gfx_projects_section__body__industry {
    scroll-margin-top: 5rem;
    scroll-snap-margin-top: 5rem; /* iOS 11 and older */
    
    width: 100%;
    margin-bottom: 3.25rem;
    padding: .25rem 0;
}

.row {
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
}

.column {
    -ms-flex: 33.33%; /* IE10 */
    flex: 33.33%;
    max-width: 33.33%;
    padding: 0 .325rem;
}
.column img {
    margin-top: .65rem;
    vertical-align: middle;
    width: 100%;

    box-shadow: 0 .325rem .5rem rgba(0,0,0,.25);

    /* lazy load */
    opacity: 0;
    transition: opacity 200ms ease;
}

@media screen and (max-width: 64em) {
    .column {
        -ms-flex: 50%;
        flex: 50%;
        max-width: 50%;;
    }
}
/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 40em) {
    .column {
        -ms-flex: 100%;
        flex: 100%;
        max-width: 100%;
    }
}
</style>