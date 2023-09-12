const web_projects = [
	{
		id: 'ut-market-website',
		name: 'Mobile App Marketing Website',
		industry: 'Finance',
		overview: `
[utmarket.io](https://utmarket.io) is the landing page and informational website for all products related to the UT Market digital platform. 
`,
		responsibilities: `
After presenting my UI screens to the team, I got to work coding the new website using NextJS, which was ideal for its SSG abilities, pleasant dev experience, SEO, and performance (it got a [100 performance score](https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Futmarket.io%2F&strategy=desktop&category=performance&category=accessibility&category=best-practices&category=seo&utm_source=lh-chrome-ext) on Google Lighthouse!). I also manage the domain, hosting, and CMS.
`,
		tools: ['HTML & CSS', 'NextJS'],
		duration: 'Three weeks for the first live version.',
		link: 'https://utmarket.io',
		image: '/images/mockups/utmarket-ui-showcase.png'
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
		id: 'good-time-hospitality-group',
		name: 'Website for Hospitality Company',
		industry: 'Hospitality',
		overview: `
Utilizing NextJS, I was able to create an SEO-friendly website. The client can easily manage content via [DatoCMS](https://datocms.com).
        
`,
		responsibilities: `
After receiving a document of content from the client, I designed and coded the website, in addition to configuring the CMS.
`,
		tools: ['HTML & CSS', 'NextJS', 'Adobe Photoshop'],
		duration: 'Six weeks',
		link: 'https://www.goodtimehospitality.com/',
		image: '/images/mockups/gt-rr-mockup-laptop-phone_result.png'
	},
	{
		id: 'khmer-programming-words-dictionary',
		name: 'Khmer Programming Words Dictionary',
		industry: 'Personal',
		overview: `
This is a dictionary style website to document and explain common programming and other technical words that are almost impossible to translate into Khmer. Could be a useful resource for educators/students alike.
`,
		tools: ['Svelte'],
		duration: 'Three days',
		link: 'https://khmer-programming-words.vercel.app/',
		image: '/images/mockups/khmer-programming-words.png'
	},
	{
		id: 'khmer-markdown-notes-app',
		name: 'Note taking app with Khmer language UI',
		industry: 'Personal',
		overview: `
I wanted to familiarize myself with Django and more specifically the Django REST Framework so I built this as a learning project, a note taking web app with user authentication.
`,
		tools: ['Django', 'React'],
		duration: 'Three weeks',
		link: 'https://khmarkdown.masayashida.com/',
		image: '/images/mockups/khmarkdown-laptop-no-notch-mockup_result.png'
	},
	{
		id: 'business-model-generator',
		name: 'Business Model Generator (Khmer & English)',
		industry: 'Personal',
		overview: `
A mini web tool for generating a [business model canvas](https://en.wikipedia.org/wiki/Business_Model_Canvas) based on user input. I made it to practice Typescript, and learn to more about Svelte and how it handles state.
`,
		tools: ['Svelte'],
		duration: 'One week',
		link: 'https://bmc.masayashida.com/',
		image: '/images/mockups/kh-bmc-laptop-no-notch-mockup_result.png'
	}
];

export default { web_projects };
