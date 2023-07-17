const tool_logos = [
    {
        name: "HTML & CSS",
        fileName: "html-css.svg",
    },
    {
        name: "JavaScript",
        fileName: "javascript.svg",
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
        fileName: "adobe-xd.svg",
    },
    {
        name: "Adobe Illustrator",
        fileName: "adobe-illustrator.svg",
    },
    {
        name: "Adobe Photoshop",
        fileName: "adobe-photoshop.svg",
    },
    {
        name: "Django",
        fileName: "django.svg",
    }
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
    {
        id: "khmer-programming-words-dictionary",
        name: "Khmer Programming Words Dictionary",
        industry: "Personal",
        overview: 
`
I always struggled to translate technical words, especially programming-related words into Khmer so I made a dictionary/database website for such words.
`,
        tools: [
            "Svelte",
        ],
        duration: "Three days",
        link: "https://khmer-programming-words.vercel.app/",
        image: "/images/mockups/khmer-programming-words.png",
    },
//     {
//         id: "khmer-markdown-notes-app",
//         name: "Note taking app with Khmer UI",
//         industry: "N/A",
//         overview: 
// `
// I always struggled to translate technical words, especially programming-related words into Khmer. I have
// `,
//         tools: [
//             "React",
//             "Django",
//         ],
//         duration: "Three weeks",
//         link: "https://khmarkdown.masayashida.com/",
//         image: "/images/mockups/khmer-programming-words.png",
//     },
]

export default { tool_logos, web_projects }