<script>


const homepage_projects = [
    {
        name: "Digital Product Website",
        category: "Web Dev + UI Design",
        description: "Informational website design and development for Cambodia-based fractionalized real estate trading platform UT Market.",
        // link: "/ui-design/#ut-market-app",
        links: [
            {
                name: "Design",
                url: "/ui-design/#ut-market-website",
            },
            {
                name: "Development",
                url: "/web-development/#ut-market-website",
            }
        ],
        image: {
            url: "/images/mockups/utmarket-ui-showcase.png"
        },
    },
    {
        name: "Mobile App Design",
        category: "UI Design",
        description: "Mobile app design for Cambodia-based fractionalized real estate trading platform UT Market.",
        link: "/ui-design/#ut-market-app",
        image: {
            url: "/images/mockups/android-ios-mockups-result.png"
        },
    },
    {
        name: "Corporate Website",
        category: "Web Development",
        description: "Corporate website for Zillion United, a digital real estate platform in Cambodia.",
        link: "/web-development/#zillion-united",
        image: {
            url: "/images/mockups/z1-corporate_result.png"
        },
    },
    {
        name: "Hospitality Sector Website",
        category: "Web Development",
        description: "Website for Good Time Hospitality Group and their resort, Good Time Relax Resort.",
        link: "/web-development/#good-time-hospitality-group",
        image: {
            url: "/images/mockups/gt-rr-mockup-laptop-phone_result.png"
        },
    },
]
</script>

<section id="projects" class="homepage_projects_section_container">
    <h3>Projects</h3>
    <p>Some of the projects that I have worked on:</p>
    <div class="homepage_projects_content">
    {#each homepage_projects as project}
        <div class="project_box">
            <div class="project_img_container">
                <img
                src={project.image.url}
                alt={project.name}
                width="320"
                height="240"
                loading="lazy"
                />
            </div>
            <span class="project_details">
                <p class="project_categ">
                    {#if project.category === "Web Development"}
                        <i class="icons icon__code" />
                    {:else if project.category === "UI Design"}
                        <i class="icons icon__explorer" />
                    {:else if project.category === "Graphic Design"}
                        <i class="icons icon__pen" />
                    {:else if project.category === "Web Dev + UI Design"}
                        <i class="icons icon__code" />
                        <i class="icons icon__explorer" />                    
                    {/if}
                    {project.category}
                </p>
                <h4 class="project_name">{project.name}</h4>
                <p class="project_desc">{project.description}</p>
                {#if project.link}
                    <a href={project.link} class="project_link">Details →</a>
                {/if}
                {#if project.links}
                    {#each project.links as link}
                        <a href={link.url} class="project_link">{link.name} →</a>
                    {/each}
                {/if}
            </span>
        </div>
    {/each}
    </div>
</section>

<style>
h3 {
    /* color: var(--clr_primary); */
    color: #fff;
    margin-bottom: 1rem;
}
p {
    color: #ececec;
    margin-bottom: 2.5rem;
}
.icons {
    width: 1rem; height: 1rem;
    display: inline-block;
    margin-right: .5rem;
}
.homepage_projects_section_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: min(100%, calc(var(--content_max_width_desktop) * 1.125));
    margin: 0 auto;
    border-radius: 1rem;

    padding: 5rem 0;

    /* background-color: var(--clr_secondary); */
    background-color: var(--clr_primary);
    background-image: linear-gradient(35deg, var(--clr_primary_shade_a), var(--clr_primary));
}
@media screen and (max-width: 48em) {
    .homepage_projects_section_container {
        border-radius: 0;
    }
}
.homepage_projects_content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0 auto;
    max-width: min(100%, calc(var(--content_max_width_desktop) * 1.5));

    padding: 0 var(--padding_horizontal_desktop);
}
@media screen and (max-width: 48em) {
    .homepage_projects_content {
        padding: 0 var(--padding_horizontal_mobile);
    }
}
.project_box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.75rem;
    /* padding: 0 .5rem; */
    width: 100%;
    max-width: 100%;
    
    background-color: rgba(255,255,255,.0375);

    border-radius: 1rem;
    padding: 1.5rem 1rem;
    border: 1px solid rgba(255,255,255,.175);
    /* outline: 1px solid red; */
}
@supports ((-webkit-backdrop-filter: blur(1rem)) or (backdrop-filter: blur(1rem))) {
    .project_box {
        /* Glass look */
        background-color: rgba(255,255,255,.075);
        backdrop-filter: blur(1rem);
        -webkit-backdrop-filter: blur(1rem);
    }
}
@media screen and (max-width: 48em) {
    .project_box {
        flex-direction: column;
        padding: 1.5rem 1rem;
    }
}
.project_img_container {
    display: flex;
    justify-content: center;
    align-items: center;

    object-fit: contain;
    /* min-width: 24rem;
    max-width: 24rem;
    min-height: 18rem;
    max-height: 18rem; */
    min-width: 20rem;
    max-width: 20rem;
    min-height: 15rem;
    max-height: 15rem;
    
    padding: 1.5rem;
    /* outline: 1px solid red; */
}
@media screen and (max-width: 48em) {
    .project_img_container {
        min-width: auto;
        min-width: auto;
        max-width: 100%;
        max-height: 15rem;
    }
}
.project_img_container img {
    object-position: center;
    object-fit: contain;    
    /* width: 100%;
    height: 100%; */
    max-width: 100%;
    max-height: 100%;
}


.project_details {
    margin-left: 2.5rem;
    max-width: 40ch;
    font-family: var(--font_primary);
}
@media screen and (max-width: 48em) {
    .project_details {
        margin-left: 0;
        margin-top: 2.5rem;
    }
}
.project_details .project_categ {
    margin-bottom: .625rem;
    color: #ececec;
    font-size: .8rem;
    display: flex; align-items: center;
}
.project_details h4 {
    margin-bottom: 1rem;
    color: #fff;  
}
.project_details .project_desc {
    color: #ececec;
    margin-bottom: 1.75rem;
}
.project_details .project_link {
    /* color: var(--clr_primary); */
    /* background-color: #ececec; */
    color: #fff;
    background-color: var(--clr_secondary);

    font-size: 1.125rem;
    font-family: var(--font_primary_semibold);
    padding: .875rem 1.25rem;
    text-decoration: none;
    /* border-radius: .75rem; */
    border-radius: 100vmax;
    text-align: center;
    transition: 200ms ease-out filter;
    border: 1px solid rgba(255,255,255,.25);
    /* box-shadow: 0 .5rem .5rem rgba(0,0,0,.125); */
}
@media screen and (max-width: 48em) {
    .project_details .project_link {
        padding: 1rem 1.5rem;
    }
}
.project_details .project_link:not(:last-of-type) {
    margin-right: .75rem;
}
.project_details .project_link:hover {
    filter: brightness(1.1);
    /* text-decoration: underline; */
}
@media screen and (max-width: 48em) {
    .project_details .project_link:not(:last-of-type) {
        margin-right: 0;
    }
    .project_details .project_link {
        display: inline-flex;
        align-items: center; 
        justify-content: center;
        /* justify-content: flex-end; */
    }
    .project_details .project_link:only-of-type {
        width: 100%;
    }
    .project_details .project_link:not(:only-of-type) {
        width: 100%;
        margin-bottom: 1rem;
        justify-content: center;
    }
}
</style>