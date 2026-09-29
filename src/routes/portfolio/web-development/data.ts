import type { Project } from '$lib/types';

const projects: Project[] = [
	{
		id: 'real-estate-listing-platform',
		name: 'Real Estate Listing Website',
		industry: 'Real estate',
		overview: `A full-stack website for a local real estate listing company. I used Django for its batteries-included convenience, easy-to-understand ORM, intuitive templating, and helpful admin panel, which allows the client to conveniently update the website's content themselves. For styling, I went with TailwindCSS for quick and consistent styling. Some parts that involve user interaction make use of HTMX for its simplicity.`,
		responsibilities: `After discussing with the client about requirements and obtaining a wireframe, I designed and coded the website.`,
		tools: ['HTML', 'CSS', 'Django', 'Figma'],
		// Time taken: Three weeks
		completedDate: 'April 2024',
		link: 'https://www.hunter-estate.com/',
		image: '/images/mockups/real-estate-listing-website-mockup_result.png'
	},
	{
		id: 'design-agency-website',
		name: 'Design Agency Website',
		industry: 'Media',
		overview: `A full-stack website for a local design & media company. The client can update the website's content themselves via the Django admin panel. Interested visitors can contact the agency via the secure contact form.`,
		responsibilities: `After the web design was complete, I coded and hosted the website.`,
		tools: ['HTML', 'CSS', 'Django', 'Figma'],
		// Time taken: Two weeks
		completedDate: 'October 2025',
		link: 'https://www.breaddesignmedia.com/',
		image: '/images/mockups/design-agency-mockup.png'
	},
	{
		id: 'car-engine-lubricants-website',
		name: 'Car Engine Lubricants Landing Page',
		industry: 'Automotives',
		overview: `An informational landing page for a car engine lubricants brand. Due to the simplicity of the website, no JavaScript framework was necessary.`,
		responsibilities: `After discussing with the client about website content, I designed and coded the website.`,
		tools: ['HTML', 'CSS', 'Figma'],
		// Time taken: One week
		completedDate: 'April 2024',
		link: 'https://musashilubes.com/',
		image: '/images/mockups/car-engine-lubricant-website-mockup_result.png'
	},
	{
		id: 'good-time-hospitality-group',
		name: 'Website for Hospitality Company',
		industry: 'Hospitality',
		overview: `Utilizing NextJS, I was able to create an SEO-friendly website. The client can easily manage content via a headless CMS.`,
		responsibilities: `After receiving a document of content from the client, I designed and coded the website, in addition to configuring the CMS.`,
		tools: ['HTML', 'CSS', 'NextJS', 'Adobe Photoshop'],
		// Time taken: Six weeks
		completedDate: 'April 2023',
		link: 'https://www.goodtimehospitality.com/',
		image: '/images/mockups/gt-rr-mockup-laptop-phone_result.png'
	},
	{
		id: 'khmer-programming-words-dictionary',
		name: 'Khmer Programming Words Dictionary',
		industry: 'Personal',
		overview: `This is a dictionary style website to document and explain common programming and other technical words that are almost impossible to translate into Khmer. Could be a useful resource for educators/students alike.`,
		tools: ['Svelte'],
		// Time taken: Three days
		completedDate: 'August 2023',
		link: 'https://khmer-programming-words.vercel.app/',
		image: '/images/mockups/khmer-programming-words.png'
	},
	{
		id: 'business-model-generator',
		name: 'Business Model Generator (Khmer & English)',
		industry: 'Personal',
		overview: `A mini web tool for generating a business model canvas based on user input. I made it to practice Typescript, and learn to more about Svelte and how it handles state.`,
		tools: ['Svelte'],
		// Time taken: One week
		completedDate: 'September 2023',
		link: 'https://bmc.masayashida.com/',
		image: '/images/mockups/kh-bmc-laptop-no-notch-mockup_result.png'
	}
];

export default { projects };
