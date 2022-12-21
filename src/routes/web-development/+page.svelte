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
        id: "ut-market-website",
        name: "Digital Product Website Development",
        overview: 
`
[utmarket.io](https://utmarket.io) is the landing page and informational website for all products related to the UT Market digital platform. 
`,
        responsibilities:
`
After presenting my UI screens to the team, I got to work coding the new website using NextJS, which was ideal for its SSG abilities, pleasant dev experience, SEO, and performance (it got a [100 performance score](https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Futmarket.io%2F&strategy=desktop&category=performance&category=accessibility&category=best-practices&category=seo&utm_source=lh-chrome-ext) on Google Lighthouse!). I also manage the domain, hosting, and CMS.
`,
        tools: [
            "HTML & CSS",
            "NextJS",
        ],
        duration: "Twelve Days",
        link: "https://utmarket.io",
        image: "/images/mockups/utmarket-ui-showcase.png",
    },
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

<div class="content_page_container">
    <div class="content">
        <section class="top_section">
            <span>
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