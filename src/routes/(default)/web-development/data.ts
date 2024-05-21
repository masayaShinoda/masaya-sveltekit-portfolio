const web_projects = [
	{
		id: 'real-estate-listing-platform',
		name: 'Real Estate Listing Website',
		industry: 'Real estate',
		overview: `A full-stack website for a local real estate listing company. I used Django for its batteries-included convenience, easy-to-understand ORM, intuitive templating, and helpful admin panel, which allows the client to conveniently update the website's content themselves. For styling, I went with TailwindCSS for quick and consistent styling. Some parts that involve user interaction make use of HTMX for its simplicity.`,
		responsibilities: `After discussing with the client about requirements and obtaining a wireframe, I designed and coded the website.`,
		tools: ['HTML & CSS', 'Django', 'Figma'],
		duration: 'Three weeks',
		link: 'https://www.hunter-estate.com/',
		image: '/images/mockups/real-estate-listing-website-mockup_result.png'
	},
	{
		id: 'car-engine-lubricants-website',
		name: 'Car Engine Lubricants Landing Page',
		industry: 'Automotives',
		overview: `An informational landing page for a car engine lubricants brand. Due to the simplicity of the website, no JavaScript framework was necessary.`,
		responsibilities: `After discussing with the client about website content, I designed and coded the website.`,
		tools: ['HTML & CSS', 'Figma'],
		duration: 'One week',
		link: 'https://musashilubes.com/',
		image: '/images/mockups/car-engine-lubricant-website-mockup_result.png'
	},
	{
		id: 'good-time-hospitality-group',
		name: 'Website for Hospitality Company',
		industry: 'Hospitality',
		overview: `Utilizing NextJS, I was able to create an SEO-friendly website. The client can easily manage content via a headless CMS.`,
		responsibilities: `After receiving a document of content from the client, I designed and coded the website, in addition to configuring the CMS.`,
		tools: ['HTML & CSS', 'NextJS', 'Adobe Photoshop'],
		duration: 'Six weeks',
		link: 'https://www.goodtimehospitality.com/',
		image: '/images/mockups/gt-rr-mockup-laptop-phone_result.png'
	},
	{
		id: 'ut-market-website',
		name: 'Mobile App Marketing Website',
		industry: 'Finance',
		overview: `Landing page and informational website for all products related to the UT Market digital platform.`,
		responsibilities: `After presenting my UI screens to the team, I got to work coding the new website using NextJS, which was ideal for its SSG abilities, pleasant dev experience, SEO, and performance (100 score on Lighthouse). I also manage the domain, hosting, and CMS.`,		tools: ['HTML & CSS', 'NextJS'],
		duration: 'Three weeks for the first live version.',
		link: 'https://utmarket.io',
		image: '/images/mockups/utmarket-ui-showcase.png'
	},
	{
		id: 'khmer-programming-words-dictionary',
		name: 'Khmer Programming Words Dictionary',
		industry: 'Personal',
		overview: `This is a dictionary style website to document and explain common programming and other technical words that are almost impossible to translate into Khmer. Could be a useful resource for educators/students alike.`,
		tools: ['Svelte'],
		duration: 'Three days',
		link: 'https://khmer-programming-words.vercel.app/',
		image: '/images/mockups/khmer-programming-words.png'
	},
	{
		id: 'khmer-markdown-notes-app',
		name: 'Note taking app with Khmer language UI',
		industry: 'Personal',
		overview: `I wanted to familiarize myself with Django and more specifically the Django REST Framework so I built this as a learning project, a note taking web app with user authentication.`,
		tools: ['Django', 'React'],
		duration: 'Three weeks',
		link: 'https://khmarkdown.masayashida.com/',
		image: '/images/mockups/khmarkdown-laptop-no-notch-mockup_result.png'
	},
	{
		id: 'business-model-generator',
		name: 'Business Model Generator (Khmer & English)',
		industry: 'Personal',
		overview: `A mini web tool for generating a business model canvas based on user input. I made it to practice Typescript, and learn to more about Svelte and how it handles state.`,
		tools: ['Svelte'],
		duration: 'One week',
		link: 'https://bmc.masayashida.com/',
		image: '/images/mockups/kh-bmc-laptop-no-notch-mockup_result.png'
	}
];

export default { web_projects };