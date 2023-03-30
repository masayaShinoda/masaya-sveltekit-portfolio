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
        industry: "Finance",
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
        duration: "Three weeks for the first live version.",
        link: "https://utmarket.io",
        image: "/images/mockups/utmarket-ui-showcase.png",
    },
//     {
//         id: "zillion-united",
//         name: "Corporate Website for Zillion United",
//         overview: "An interactive server-side rendered webpage with WordPress as the CMS.",
//         responsibilities:
// `
// I was responsible for coding and WordPress configuration.

// The design of the webpage was done by [Bread Design Studio](https://www.breaddesignstudio.com).
// `,
//         tools: [
//             "HTML & CSS",
//             "NextJS",
//         ],
//         duration: "Two weeks",
//         link: "https://zillionunited.io",
//         image: "/images/mockups/z1-corporate_result.png",
//     },
    {
        id: "good-time-hospitality-group",
        name: "Website for Hospitality Company",
        industry: "Hospitality",
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


let projects_section_active_industry = 0

</script>

<div class="content_page_container">
    <div class="content">
        <section class="webdev_top_section">
            <div class="webdev_top_section__left">
                <img 
                src="/images/icon-code.svg"
                alt="decorative icon"
                width="100"
                height="75"
                loading="lazy"
                />
                <h1>Web Development</h1>
            </div>
            <div class="webdev_top_section__right">
                <p>
                    I see the web as an important democratizing platform for people around the world to share their ideas and express their entrepreneurial spirit, where anyone with an internet connection can gain access.
                </p>
                <p>
                    I love the web as a powerful and inclusive platform so I have self-taught myself web development to create engaging and user-friendly websites.
                </p>
            </div>
        </section>
        <section class="webdev_projects_section">
            <header class="webdev_projects_section__top">
                <h2>
                    My Projects
                </h2>
                <div class="webdev_projects_section__top__line"></div>
                <nav class="webdev_projects_section__top__btn_group">
                    {#each Array.from(web_projects.map(project => project.industry)).filter((x, i, a) => a.indexOf(x) == i) as industry, index}
                        <a href={`#${encodeURI(industry)}`} on:click={() => {projects_section_active_industry = index}} class="btn_main btn_main__smaller" class:btn_main__inactive={projects_section_active_industry !== index}>
                            {industry}
                        </a>
                    {/each}
                </nav>
            </header>
        </section>
    </div>
</div>

<style>
    .webdev_top_section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: min(100%, var(--content_max_width_desktop));
        padding: 0 var(--padding_horizontal_desktop);
        margin: 0 auto;
        /* outline: 1px solid green; */
    }
    @media screen and (max-width: 48em) {
        .webdev_top_section {
            align-items: flex-start;
            padding: 0;
        }
    }
    .webdev_top_section__left,
    .webdev_top_section__right {
        display: flex; flex-direction: column; justify-content: center; align-items: center;
    }
    .webdev_top_section__left {
        padding: 4.25rem 0;
        border: 2px solid #ececec;
        border-radius: 1rem;
        width: 42.5%;
        /* outline: 1px solid blue; */
    }
    .webdev_top_section__right {
        width: 57.5%;
    }
    @media screen and (max-width: 64em) {
        .webdev_top_section__left {
            padding: 4.25rem 0;
        }
        .webdev_top_section__right {
            width: 52.5%;
        }
    }
    @media screen and (max-width: 48em) {
        .webdev_top_section {
            flex-direction: column;
        }
        .webdev_top_section__left,
        .webdev_top_section__right {
            width: 100%;
            margin: 0 auto;
        }
        .webdev_top_section__left {
            padding: 2.5rem 0;
            margin-bottom: 1.5rem;
            max-width: min(100%, 28em);
        }
    }
    .webdev_top_section__left > img {
        /* max-width: 5rem; */
        object-fit: contain; object-position: center;
        filter: var(--filter_clr_secondary);
        margin-bottom: 1rem;
    }
    .webdev_top_section__left > h1 {
        font-family: var(--font_primary_semibold);
        font-size: 2rem;
        color: var(--clr_primary);
        text-align: center;
    }
    .webdev_top_section__right p {
        color: #333;
        font-size: 1.125rem;
        line-height: 1.5;
        max-width: min(40ch, 100%);
    }
    .webdev_top_section__right p:not(:last-of-type) {
        margin-bottom: 1.25rem;
    }
    @media screen and (max-width: 64em) {
        .webdev_top_section__left > h1 {
            font-size: var(--type_scale_3);
        }
        .webdev_top_section__right p {
            font-size: 1rem;
        }
    }
    @media screen and (max-width: 48em) {
        .webdev_top_section__left > img {
            max-height: 3.5rem;
            margin-bottom: 1rem;
        }
        .webdev_top_section__left > h1 {
            font-size: 1.75rem;
        }
        .webdev_top_section__right p {
            font-size: 1rem;
        }
    }


    .webdev_projects_section {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: min(100%, var(--content_max_width_desktop));
        padding: 0 var(--padding_horizontal_desktop);
        margin: 5rem auto;
        /* outline: 1px solid green; */
    }
    @media screen and (max-width: 48em) {
        .webdev_projects_section {
            padding: 0;
        }
    }
    .webdev_projects_section__top {
        display: flex;
        justify-content: space-between;
        align-items: center;

        position: -webkit-sticky; /* Safari */
        position: sticky;
        top: 2.5vh;
        /* outline: 1px solid red; */
    }

    .webdev_projects_section__top > h2 {
        color: var(--clr_primary);
        font-size: var(--type_scale_3);
    }
    .webdev_projects_section__top__line {
        display: flex;
        flex-grow: 1;
        height: 2px;
        background-color: #ddd;
        margin: 0 1.5rem;
    }
    @media screen and (max-width: 48em) {
        .webdev_projects_section__top__line {
            margin-right: 0;
        }
        .webdev_projects_section__top__btn_group {
            display: none;
        }
    }
</style>