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

const ui_design_projects = [
    {
        id: "ut-market-website",
        name: "Digital Product Website Design",
        overview: 
`
[utmarket.io](https://utmarket.io) is the landing page and informational website for all products related to the UT Market digital platform. 
`,
        responsibilities:
`
After discussions with the marketing and business teams on what contents and features are needed on the website, I was responsible for designing the UI screens and some illustrations to best welcome new visitors to our site.  
`,
        tools: [
            "Figma",
            "Adobe Illustrator",
        ],
        duration: "Ten Days",
        link: "https://www.figma.com/file/Hj8RIRNzSXvbtfjGnfl8DH/masayashida.com-Portfolio-Showcase?node-id=0%3A1&t=XHPaiK4nqd1Y7Pdl-1",
        image: "/images/mockups/utmarket-ui-showcase.png",
    },
    {
        id: "ut-market-app",
        name: "Mobile Trading App Design",
        overview: 
`
UT Market is an online trading platform that allows traders to buy and sell fractionalized Cambodian real estate assets in the form of Units of Trust (UTs). 
`,
        responsibilities:
`
After joining [Zillion United](https://zillionunited.io) I was tasked with creating the UI design for a mobile version of an existing progressive web app. 

I came up with entirely new page layouts with a fresh design approach whilst preserving mostly the same user flow from the existing web app.
`,
        tools: [
            "Adobe XD",
            "Adobe Illustrator",
        ],
        duration: "Three months",
        link: "https://xd.adobe.com/view/a80afaa0-f4f0-4f8a-8573-e1c9adb1e7aa-fd59/flow",
        image: "/images/mockups/android-ios-mockups-result.png",
    },

]

</script>

<svelte:head>
    <title>Masaya Shida | UI Design Portfolio</title>
</svelte:head>
<div class="content_page_container">
    <div class="content">
        <section class="top_section">
            <span>
                <span class="heading_container">
                    <!-- <i class="icons icon__explorer" /> -->
                    <h2>User Interface Design</h2>
                </span>
                <p>
                I understood that learning frontend programming wasn't enough to create good looking and user-friendly apps and websites so I taught myself UI design as well.
                </p>
                <br />
            </span>
            <img 
            src="/images/icon-explorer.svg"
            alt="decorative icon"
            width="240"
            height="180"
            loading="lazy"
            />
        </section>
    </div>
    <div class="portf_item_section_container">
        <h3>Portfolio</h3>
        {#each ui_design_projects as project}
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
.content_page_container {
    width: 100%;
    max-width: 100%;
    overflow-x: clip;
}
.content_page_container .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin: 0 auto;
    background-color: #fff;
    padding: 3.25rem var(--padding_horizontal_desktop);
    /* outline: 1px solid red; */
}
@media screen and (max-width: 64em) {
    .content_page_container .content {
        padding: 3.25rem calc(var(--padding_horizontal_desktop) * 2);
    }
}
@media screen and (max-width: 48em) {
    .content_page_container .content {
        padding: 3.25rem var(--padding_horizontal_mobile);
    }
}

.content_page_container .top_section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: min(100%, calc(var(--content_max_width_desktop) * 0.925));
    margin: 0 auto;
}
@media screen and (max-width: 48em) {
    .content_page_container .top_section {
        flex-direction: column;
    }
}
.content_page_container .heading_container {
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
.content_page_container .top_section .heading_container h2 {
    color: var(--clr_primary);
    font-size: 1.87rem;
}
.content_page_container .top_section > span {
    max-width: min(50%, 50ch);
}
@media screen and (max-width: 48em) {
    .content_page_container .top_section > span {
        max-width: 100%;
        margin-bottom: 2.5rem;
    }
}
.content_page_container .top_section > span p {
    color: #333;
}
.content_page_container .top_section > img {
    /* min-width: 21rem; */
    height: auto;
    object-fit: contain;
    /* filter: brightness(0) opacity(0.375) var(--filter_clr_secondary); */
    filter: brightness(0) var(--filter_clr_secondary);
}
@media screen and (max-width: 48em) {
    .content_page_container .top_section > img {
        display: none;
    }
}

.portf_item_section_container {
    /* background-color: var(--clr_secondary); */
    background-color: var(--clr_primary);
    background-image: linear-gradient(35deg, var(--clr_secondary), var(--clr_primary));

    overflow: hidden;

    max-width: min(100%, calc(var(--content_max_width_desktop) * 1.125));
    border-radius: 1rem;
    margin: 0 auto;
    box-shadow: inset 0 0 .5rem .5rem rgba(0,0,0,.125);

    margin-bottom: 1.5rem;
}
@media screen and (max-width: 48em) {
    .portf_item_section_container {
        border-radius: none;
    }
}

.portf_item_section_container h3 {
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
    /* max-width: 100%; */
    margin: 0 auto;

    margin-bottom: 2.5rem;
}
.portf_item_content {
    width: 100%;
    max-width: 100%;
    /* max-width: min(100%, var(--content_max_width_desktop)); */
    margin: 0 auto;
    
    display: flex;
    justify-content: center;
    align-items: center;

    /* outline: 1px solid green; */
}
@media screen and (max-width: 64em) {
    .portf_item_section {
        padding: 2.5rem 0;   
    }
    .portf_item_content {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
}
@media screen and (max-width: 48em) {
    .portf_item_section {
        padding-bottom: 1rem;
        margin-bottom: 1rem;
        /* margin-bottom: 0; */
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
@media screen and (max-width: 64em) {
    .proj_content {
        max-width: 80%;
        border-radius: 0 0 1rem 1rem;
    }
}
@media screen and (max-width: 48em) {
    .proj_content {
        padding: 1.5rem 1.125rem;
        max-width: 95%;
        border-radius: 0 0 1rem 1rem;
    }    
}


.upper_half {
    display: flex; align-items: flex-start;
    justify-content: space-between;
    /* outline: 1px solid green; */
}
@media screen and (max-width: 48em) {
    .upper_half {
        flex-direction: column;
        justify-content: flex-start;
    }
}

.bottom_half {
    display: flex; align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 1.5rem;
}
@media screen and (max-width: 48em) {
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
    max-width: min(45ch, 49%);
    width: 49%;
}
@media screen and (max-width: 48em) {
    .overview, 
    .responsibilities,
    .tools,
    .duration {
        width: 100%;
        max-width: 100%;
    } 
    .tools {
        margin-bottom: 2rem;
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
@media screen and (max-width: 64em) {
    .proj_img_container {
        width: 80%;
        max-width: 80%;
        padding: 2.5rem 1.5rem;
        border-radius: 1rem 1rem 0 0;
        /* outline: 1px solid red; */
    }
}
@media screen and (max-width: 48em) {
    .proj_img_container {
        width: 95%;
        max-width: 95%;
        border-radius: 1rem 1rem 0 0;
    }
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
</style>