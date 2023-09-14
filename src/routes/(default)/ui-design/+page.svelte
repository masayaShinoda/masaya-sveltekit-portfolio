<script lang="ts">
	import styles from '$lib/ui-design/UIDesign.module.css';
	import SvelteMarkdown from 'svelte-markdown';

	const tool_logos = [
		{
			name: 'HTML & CSS',
			fileName: 'html-css.svg'
		},
		{
			name: 'JavaScript',
			fileName: 'javascript.svg'
		},
		{
			name: 'NextJS',
			fileName: 'nextjs.svg'
		},
		{
			name: 'React',
			fileName: 'react.svg'
		},
		{
			name: 'Svelte',
			fileName: 'svelte.svg'
		},
		{
			name: 'Figma',
			fileName: 'figma.svg'
		},
		{
			name: 'Adobe XD',
			fileName: 'adobe-xd.svg'
		},
		{
			name: 'Adobe Illustrator',
			fileName: 'adobe-illustrator.svg'
		},
		{
			name: 'Adobe Photoshop',
			fileName: 'adobe-photoshop.svg'
		}
	];

	const ui_design_projects = [
		{
			id: 'ut-market-website',
			name: 'Digital Product Website Design',
			overview: `
[utmarket.io](https://utmarket.io) is the landing page and informational website for all products related to the UT Market digital platform. 
`,
			responsibilities: `
After discussions with the marketing and business teams on what contents and features are needed on the website, I was responsible for designing the UI screens and some illustrations to best welcome new visitors to our site.  
`,
			tools: ['Figma', 'Adobe Illustrator'],
			duration: 'Ten Days',
			link: 'https://www.figma.com/file/Hj8RIRNzSXvbtfjGnfl8DH/masayashida.com-Portfolio-Showcase?node-id=0%3A1&t=XHPaiK4nqd1Y7Pdl-1',
			image: '/images/mockups/utmarket-ui-showcase.png'
		},
		{
			id: 'ut-market-app',
			name: 'Mobile Trading App Design',
			overview: `
UT Market is an online trading platform that allows traders to buy and sell fractionalized Cambodian real estate assets in the form of Units of Trust (UTs). 
`,
			responsibilities: `
I was tasked with creating the UI design for a mobile version of an existing progressive web app. 

I came up with entirely new page layouts with a fresh design approach whilst preserving mostly the same user flow from the existing web app.
`,
			tools: ['Adobe XD', 'Adobe Illustrator'],
			duration: 'Three months',
			link: 'https://xd.adobe.com/view/a80afaa0-f4f0-4f8a-8573-e1c9adb1e7aa-fd59/flow',
			image: '/images/mockups/android-ios-mockups-result.png'
		},
		{
			id: 'loyalty-program-platform',
			name: 'Loyalty Program Platform',
			overview: `
A draft user interface design for a customer loyalty platform. It is a platform to manage loyalty programs, promotions, and subscriptions, the web app design is for business owners, and the mobile app design is for customers.
`,
			responsibilities: `
The project's goal is a minimum viable product. I designed the webapp with [Chakra UI](https://chakra-ui.com/) components in mind. 
`,
			tools: ['Figma', 'Adobe Illustrator'],
			duration: 'One month',
			link: 'https://www.figma.com/file/2Tmf6ZRDoCCFSgKqq0fJjs/loyalty-program-system?type=design&node-id=0%3A1&mode=design&t=ArB6RtvUXXmdi2IP-1',
			image: '/images/mockups/loyalty-program-mockup_result.png'
		}
	];
</script>

<svelte:head>
	<title>Masaya Shida | UI Design Portfolio</title>
</svelte:head>
<div class={styles.ui_page_container}>
	<div class={styles.content}>
		<section class={styles.top_section}>
			<span>
				<span class={styles.heading_container}>
					<h1>User Interface Design</h1>
				</span>
				<p>
					I understood that learning frontend programming wasn't enough to create good looking and
					user-friendly apps and websites so I taught myself UI design as well.
				</p>
				<br />
			</span>
			<img src="/images/icon-explorer.svg" alt="decorative icon" width="240" height="180" />
		</section>
	</div>
	<div class={styles.ui_portf_item_section_container}>
		<h2>Portfolio</h2>
		{#each ui_design_projects as project}
			<section class={styles.ui_portf_item_section} id={project.id}>
				<div class={styles.ui_portf_item_content}>
					<div class={styles.proj_img_container}>
						<img
							src={project.image}
							alt={`Screenshot of ${project.name}`}
							width="480"
							height="auto"
							loading="lazy"
						/>
					</div>
					<div class={styles.proj_content}>
						<h3 class={styles.name}>
							{project.name}
						</h3>

						<div class={styles.upper_half}>
							<span class={styles.overview}>
								<h5 class={styles.categ_head}>Overview</h5>
								<span class={styles.body_text}>
									<SvelteMarkdown source={project.overview} />
								</span>
							</span>
							<span class={styles.responsibilities}>
								<h5 class={styles.categ_head}>Responsibilities</h5>
								<span class={styles.body_text}>
									<SvelteMarkdown source={project.responsibilities} />
								</span>
							</span>
						</div>
						<div class={styles.bottom_half}>
							<span class={styles.tools}>
								<h5 class={styles.categ_head}>Tools</h5>
								<div>
									{#each Array.from(project.tools.map( (tool) => tool_logos.filter((i) => i.name === tool) )) as tool}
										<img
											src={`/images/${tool[0].fileName}`}
											alt={tool[0].name}
											title={tool[0].name}
											loading="lazy"
										/>
									{/each}
								</div>
							</span>
							<span class={styles.duration}>
								<h5 class={styles.categ_head}>Duration</h5>
								<p class={styles.body_text}>{project.duration}</p>
							</span>
						</div>
						<a class={styles.project_link} href={project.link}>Go to design →</a>
					</div>
				</div>
			</section>
		{/each}
	</div>
</div>
