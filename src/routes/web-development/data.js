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

export default { tool_logos, web_projects }