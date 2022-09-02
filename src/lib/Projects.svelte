<script>
const homepage_projects = [
    {
        name: "Mobile App Design",
        category: "UI Design",
        description: "Mobile app design for Cambodia-based fractionalized real estate trading platform.",
        link: "",
        image: {
            url: "/images/mockups/utswap-galaxy-s-21.png"
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

<section class="homepage_projects_section_container">
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
                    {:else}
                        {null}
                    {/if}
                    {project.category}
                </p>
                <h4 class="project_name">{project.name}</h4>
                <p class="project_desc">{project.description}</p>
                <a href={project.link} class="project_link">Details →</a>
            </span>
        </div>
    {/each}
    </div>
</section>

<style>
h3 {
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
    max-width: 100%;
    padding: 5rem 0;
    background-color: var(--clr_secondary);
    background-image: linear-gradient(135deg, var(--clr_secondary), var(--clr_primary));
}
.homepage_projects_content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0 auto;
    max-width: min(100%, var(--content_max_width_desktop));
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
    padding: 1rem;
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
    color: #fff;

    font-size: 1.25rem;
    font-family: var(--font_primary_semibold);
    padding: .125rem 0;
    text-decoration: none;
}
.project_details .project_link:hover {
    text-decoration: underline;
}
@media screen and (max-width: 48em) {
    .project_details .project_link {
        display: flex;
        align-items: center; 
        justify-content: center;
        /* justify-content: flex-end; */
        width: 100%;
    }
}
</style>