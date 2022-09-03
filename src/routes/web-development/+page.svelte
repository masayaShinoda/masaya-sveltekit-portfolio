<script>
import SvelteMarkdown from 'svelte-markdown'

const tool_logos = [
    {
        name: "HTML & CSS",
        fileName: "html-css.svg",
    },
    {
        name: "JavaScript",
        fileName: "js.svg",
    },
    {
        name: "NextJS",
        fileName: "nextjs.svg",
    },
    {
        name: "React",
        fileName: "react.svg",
    },
    {
        name: "Svelte",
        fileName: "svelte.svg",
    },
    {
        name: "Figma",
        fileName: "figma.svg",
    },
    {
        name: "Adobe XD",
        fileName: "xd.svg",
    },
    {
        name: "Adobe Illustrator",
        fileName: "ai.svg",
    },
    {
        name: "Adobe Photoshop",
        fileName: "ps.svg",
    },
]

const web_projects = [
    {
        id: "zillion-united",
        name: "Corporate Website for Zillion United",
        overview: "An interactive server-side rendered webpage with WordPress as the CMS.",
        responsibilities:
`
I was responsible for coding and WordPress configuration.

The design of the webpage was done by [Bread Design Studio](https://www.breaddesignstudio.com).
`,
        tools: [
            "HTML & CSS",
            "NextJS",
        ],
        duration: "Two weeks",
        link: "https://zillionunited.io",
        image: "/images/mockups/z1-corporate_result.png",
    },
    {
        id: "good-time-hospitality-group",
        name: "Website for Hospitality Company",
        overview: 
`
Utilizing NextJS, I was able to create an SEO-friendly website. The client can easily manage content via [DatoCMS](https://datocms.com).
        
`,
        responsibilities:
`
After receiving a document of content from the client, I designed and coded the website, in addition to configuring the CMS.
`,
        tools: [
            "HTML & CSS",
            "NextJS",
            "Adobe Photoshop",
        ],
        duration: "Six weeks",
        link: "https://www.goodtimehospitality.com/",
        image: "/images/mockups/gt-rr-mockup-laptop-phone_result.png",
    },

]

</script>

<svelte:head>
    <title>Web Development | Masaya Shida</title>
</svelte:head>
<div class="web_dev_container">
    <div class="content">
        <section class="top_section">
            <span class="animate__animated animate__fadeInLeft animate__fast">
                <span class="heading_container">
                    <!-- <i class="icons icon__code" /> -->
                    <h3>Web Development</h3>
                </span>
                <p>
                I see the web as an important democratizing platform for people around the world—especially those from underprivileged backgrounds—to share their ideas and express their entrepreneurial spirit.
                </p>
                <br />
                <p>
                I have taught myself web development in order to help make the web a more accessible and beautiful place.
                </p>
            </span>
            <img 
            src="/images/icon-code.svg"
            alt="decorative icon"
            width="240"
            height="180"
            class="animate__animated animate__fadeInRight"
            loading="lazy"
            />
        </section>
    </div>
    <div class="portf_item_section_container">
        <h2>Portfolio</h2>
        {#each web_projects as project}
            <section class="portf_item_section" id={project.id}>
                <div class="portf_item_content">
                    <div class="proj_img_container">
                        <img 
                        src={project.image} 
                        alt={`Screenshot of ${project.name}`} 
                        width="480" 
                        height="auto"
                        loading="lazy"
                        />
                    </div>
                    <div class="proj_content">
                        <h4 class="name">
                            {project.name}
                        </h4>

                        <div class="upper_half">
                            <span class="overview">
                                <h5 class="categ_head">Overview</h5>
                                <!-- <p class="body_text"> -->
                                    <span 
                                    class="body_text">
                                        <SvelteMarkdown 
                                        source={project.overview} 
                                        />
                                    </span>
                                    <!-- {project.overview} -->
                                <!-- </p> -->
                            </span>
                            <span class="responsibilities">
                                <h5 class="categ_head">Responsibilities</h5>
                                <!-- <p class="body_text"> -->
                                    <span 
                                    class="body_text">
                                        <SvelteMarkdown 
                                        source={project.responsibilities} 
                                        />
                                    </span>
                                    <!-- {project.responsibilities} -->
                                <!-- </p> -->
                            </span>
                        </div>
                        <div class="bottom_half">
                            <span class="tools">
                                <h5 class="categ_head">Tools</h5>
                                <div>
                                {#each Array.from(project.tools.map(tool => (
                                    tool_logos.filter(i => i.name === tool)))) as tool}
                                    <img 
                                    src={`/images/${tool[0].fileName}`} 
                                    alt={tool[0].name} 
                                    title={tool[0].name}
                                    loading="lazy"
                                    />
                                {/each}
                                </div>
                            </span>
                            <span class="duration">
                                <h5 class="categ_head">Duration</h5>
                                <p class="body_text">{project.duration}</p>
                            </span>
                        </div>
                        <a 
                        class="project_link"
                        href={project.link}>Go to Live Demo →</a>
                    </div>
                </div>
            </section>
        {/each}

    </div>


    
</div>

<style>
.web_dev_container {
    width: 100%;
    max-width: 100%;
    overflow-x: clip;
}
.content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin: 0 auto;
    background-color: #fff;
    padding: 5rem var(--padding_horizontal_desktop);
}

.top_section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: min(100%, var(--content_max_width_desktop));
    margin: 0 auto;
}
@media screen and (max-width: 48em) {
    .top_section {
        flex-direction: column-reverse;
    }
}
.heading_container {
    display: flex; 
    justify-content: flex-start; 
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 1.5rem;
}
/* .heading_container .icons {
    display: inline-block;
    width: 1.75rem;
    height: 1.75rem;
    margin-bottom: .75rem;
    filter: brightness(0) var(--filter_clr_secondary);
} */
.top_section > span h3 {
    color: var(--clr_primary);
}
.top_section > span {
    max-width: min(50%, 50ch);
}
@media screen and (max-width: 48em) {
    .top_section > span {
        max-width: 100%;
        margin-bottom: 2.5rem;
    }
}
.top_section > span p {
    color: #333;
}
.top_section > img {
    /* min-width: 21rem; */
    height: auto;
    object-fit: contain;
    filter: brightness(0) opacity(0.375) var(--filter_clr_secondary);
}
@media screen and (max-width: 48em) {
    .top_section > img {
        max-width: 20%;
        margin-bottom: 1.5rem;
        margin-right: auto;
    }
}


.portf_item_section_container {
    background-color: var(--clr_secondary);
    background-image: linear-gradient(135deg, var(--clr_secondary), var(--clr_primary));
    overflow: hidden;
}
.portf_item_section_container h2 {
    color: #fff;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 5rem auto .75rem auto;
}
.portf_item_section {
    padding: 2.5rem var(--padding_horizontal_desktop);   
    /* width: calc(100% - calc(var(--padding_horizontal_desktop) * 2)); */
    width: 100%; 
    max-width: 100%;
    margin: 0 auto;

    margin-bottom: 2.5rem;
}
.portf_item_content {
    width: 100%;
    max-width: min(100%, var(--content_max_width_desktop));
    margin: 0 auto;
    
    display: flex;
    justify-content: center;
    align-items: center;

    /* outline: 1px solid green; */
}
@media screen and (max-width: 48em) {
    .portf_item_section {
        padding: 0 var(--padding_horizontal_mobile);
        /* outline: 1px solid red; */
    }
    .portf_item_content {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
}


.proj_content {
    background-color: #fff;
    border-radius: 1rem;
    padding: 2.5rem 1.75rem;
    border: 1px solid rgba(255,255,255,.175);

    max-width: 60%;
    box-shadow: 0 0 3px 1px rgba(0,0,0,.25);
    /* outline: 1px solid red; */
}
@media screen and (max-width: 48em) {
    .proj_content {
        width: 100%;
        max-width: 100%;
        padding: 2.5rem .75rem 1.5rem .75rem;
    }    
}


.upper_half {
    display: flex; align-items: flex-start;
    justify-content: space-between;
    /* outline: 1px solid green; */
}

.bottom_half {
    display: flex; align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 1.5rem;
}
@media screen and (max-width: 48em) {
    .upper_half,
    .bottom_half {
        flex-direction: column;
        justify-content: flex-start;
    }

}

.name {
    /* color: #fff; */
    color: var(--clr_primary);
    font-family: var(--font_primary_bold);
    margin-bottom: 1.75rem;
}
.categ_head {
    color: var(--clr_secondary);
    /* color: #ececec; */
    color: #141414;
    margin-bottom: .5rem;
}
.body_text {
    /* color: #ececec; */
    color: #333;
    margin-bottom: 1rem;
}

.overview, 
.responsibilities,
.tools,
.duration {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1rem;
    max-width: min(45ch, 48.75%);
    width: 48.75%;
} 

@media screen and (max-width: 48em) {
    .overview, 
    .responsibilities,
    .tools,
    .duration {
        width: 100%;
        max-width: 100%;
    }
}

.tools img {
    object-fit: contain;
    max-height: 2.5rem;
    margin-right: 1rem;
}
.duration {
    margin-left: 0;

}
.project_link {
    text-decoration: none;
    font-size: 1.25rem;
    font-family: var(--font_primary_semibold);
    color: var(--clr_secondary);
}
.project_link:hover {
    text-decoration: underline;
}



.proj_img_container {
    width: 24rem;
    height: 24rem;
    padding: 1.5rem;
    border-radius: 1rem 0 0 1rem;
    background-color: rgba(255,255,255,.25);
    
    border: 1px solid rgba(255,255,255,0.5);
    /* margin: auto 0; */
}
.proj_img_container img {
    object-fit: contain;
    object-position: center;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    /* outline: 1px solid red; */
    /* box-shadow: 0 0 3px 1px rgba(0,0,0,.125); */
}

@supports ((-webkit-backdrop-filter: blur(1rem)) or (backdrop-filter: blur(1rem))) {
    .proj_img_container {
        background-color: rgba(255,255,255,.25);
        backdrop-filter: blur(1rem);
        -webkit-backdrop-filter: blur(1rem);
    }
}

@media screen and (max-width: 48em) {
    .proj_img_container {
        width: 100%;
        max-height: 17.5rem;
        /* max-height: 15rem; */
        border-radius: 0.5rem 0.5rem 0 0;
        margin-bottom: -0.75rem;
    }
}

</style>