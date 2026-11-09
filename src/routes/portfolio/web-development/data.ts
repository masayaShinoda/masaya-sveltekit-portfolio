import type { Project } from '$lib/types';

const projects: Project[] = [
	{
		id: 'texture-space',
		name: 'Texture Space',
		summary: 'Showroom website for a tile and surface materials store',
		industry: 'Building materials',
		overview: `Texture Space sells tiles, glass blocks and wall finishes from a showroom in Phnom Penh. Visitors browse products by series, finish and material, see the restaurants and homes that used them, and add products to a cart. Staff update products, projects and journal posts from the admin panel.`,
		responsibilities: `I designed the site in Figma, then built it with Django. HTMX and Alpine.js handle the product filters and cart without full page reloads.`,
		tools: ['Django', 'HTMX', 'Alpine.js', 'Figma'],
		completedDate: '2026',
		link: 'https://texturespacekh.com/',
		image: '/images/screenshots/texture-space.jpg'
	},
	{
		id: 'panel-hub',
		name: 'Panel Hub',
		summary: 'Product website for a wood panel supplier',
		industry: 'Building materials',
		overview: `Panel Hub supplies MDF, melamine and decorative wood panels to builders and furniture makers in Cambodia. Each product has its own specifications page, finishes are grouped into collections, and finished villas, condos and clinics appear in a project portfolio. Customers can download the catalogues.`,
		responsibilities: `I designed and built the site, including the product carousel, collection pages and project gallery.`,
		tools: ['Django', 'HTMX', 'Alpine.js', 'Figma'],
		completedDate: '2026',
		link: 'https://panelhub.asia/',
		image: '/images/screenshots/panel-hub.jpg'
	},
	{
		id: 'phnom-da-tourism',
		name: 'Phnom Da Tourism Community',
		summary: 'Bilingual website for a community tourism group in Takeo',
		industry: 'Tourism',
		overview: `The Phnom Da community runs tours of the pre-Angkorian temples and countryside around Phnom Da in Takeo province. The site is in Khmer and English, and lists each tour with what is included and separate prices for Cambodian and foreign visitors, so travellers can plan a visit before contacting the community.`,
		responsibilities: `I designed and built the site with Django, and set it up so community members can update tours and prices themselves.`,
		tools: ['Django', 'HTMX', 'Alpine.js', 'Figma'],
		completedDate: '2026',
		link: 'https://phnomdatourism.com/',
		image: '/images/screenshots/phnom-da.jpg'
	},
	{
		id: 'o-svay-tourism',
		name: 'Tumnop O Svay Community',
		summary: 'Bilingual website for a community tourism group in Preah Vihear',
		industry: 'Tourism',
		overview: `Tumnop O Svay is a community-based tourism site beside a reservoir in Preah Vihear province. The site introduces the community, lists one-day and two-day tour packages with what each includes, and links to short videos from the community's Facebook page.`,
		responsibilities: `I built it on the same Django codebase as the Phnom Da site, with its own colours, photos and content.`,
		tools: ['Django', 'HTMX', 'Alpine.js'],
		completedDate: '2026',
		link: 'https://osvaypreahvihear.com/km/',
		image: '/images/screenshots/osvay.jpg'
	},
	{
		id: 'design-agency-website',
		name: 'Bread Design Media',
		summary: 'Website for a design and media agency',
		industry: 'Media',
		overview: `A website for a Phnom Penh design and media agency. It presents the agency's services, clients and portfolio, and visitors can get in touch through a secure contact form. Staff update the content from the Django admin panel.`,
		responsibilities: `I built and hosted the site from a finished web design.`,
		tools: ['HTML', 'CSS', 'Django', 'Figma'],
		// Time taken: Two weeks
		completedDate: 'October 2025',
		link: 'https://breaddesignmedia.com/',
		image: '/images/screenshots/bread-design.jpg'
	},
	{
		id: 'moses-ngeth-blog',
		name: 'Moses Ngeth',
		summary: 'Khmer and English blog for a digital researcher',
		industry: 'Media',
		overview: `Moses Ngeth writes about Cambodia's online information space, from scam recruitment to Facebook account bans and Google Maps edits. Posts are written in WordPress, and the public site is built with Astro, which turns them into fast static pages that load well on slow mobile connections.`,
		responsibilities: `I built the Astro front end and connected it to the existing WordPress site as a headless CMS.`,
		tools: ['Astro', 'WordPress'],
		completedDate: '2025',
		link: 'https://www.mosesngeth.com/',
		image: '/images/screenshots/moses-ngeth.jpg'
	},
	{
		id: 'real-estate-listing-platform',
		name: 'Hunter Estate',
		summary: 'Listing website for a real estate company',
		industry: 'Real estate',
		overview: `A listing website for a local real estate company. Django lets the client add and edit listings from the admin panel, Tailwind CSS keeps the styling consistent, and HTMX handles the interactive parts.`,
		responsibilities: `I designed and built the site from the client's requirements and wireframe.`,
		tools: ['HTML', 'CSS', 'Django', 'Figma'],
		// Time taken: Three weeks
		completedDate: 'April 2024',
		image: '/images/mockups/real-estate-listing-website-mockup_result.png'
	},
	{
		id: 'car-engine-lubricants-website',
		name: 'Musashi Lubricants',
		summary: 'Landing page for a car engine lubricant brand',
		industry: 'Automotive',
		overview: `An information page for a Japanese engine lubricant brand sold in Cambodia, covering its product range and how to get in touch. It is plain HTML and CSS, since the page didn't need a JavaScript framework.`,
		responsibilities: `I planned the content with the client, then designed and built the page.`,
		tools: ['HTML', 'CSS', 'Figma'],
		// Time taken: One week
		completedDate: 'April 2024',
		link: 'https://musashilubes.com/',
		image: '/images/screenshots/musashi.jpg'
	},
	{
		id: 'business-model-generator',
		name: 'Business Model Canvas Generator',
		summary: 'Khmer and English tool for planning a business',
		industry: 'Personal',
		overview: `A small tool that builds a business model canvas from your answers, in Khmer or English. I made it to practise TypeScript and learn how Svelte handles state.`,
		responsibilities: `Personal project. I designed and built it.`,
		tools: ['Svelte'],
		// Time taken: One week
		completedDate: 'September 2023',
		link: 'https://bmc.masayashida.com/',
		image: '/images/screenshots/bmc.jpg'
	},
	{
		id: 'khmer-programming-words-dictionary',
		name: 'Khmer Programming Words',
		summary: 'Dictionary of technical terms for Khmer speakers',
		industry: 'Personal',
		overview: `A dictionary of programming and technical words that are hard to translate into Khmer, each explained in Khmer. It is meant as a reference for teachers and students.`,
		responsibilities: `Personal project. I designed and built it.`,
		tools: ['Svelte'],
		// Time taken: Three days
		completedDate: 'August 2023',
		image: '/images/mockups/khmer-programming-words.png'
	},
	{
		id: 'good-time-hospitality-group',
		name: 'Good Time Hospitality',
		summary: 'Website for a restaurant and hospitality group',
		industry: 'Hospitality',
		overview: `A Next.js website for a hospitality group, built to be easy to find in search. The client manages the content through a headless CMS.`,
		responsibilities: `I designed and built the site from the client's content document, and set up the CMS.`,
		tools: ['HTML', 'CSS', 'NextJS', 'Adobe Photoshop'],
		// Time taken: Six weeks
		completedDate: 'April 2023',
		image: '/images/mockups/gt-rr-mockup-laptop-phone_result.png'
	}
];

export default { projects };
