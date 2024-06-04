<script lang="ts">
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
            id: 'real-estate-listing-platform',
            name: 'Real Estate Listing Website',
            overview: `Website design for a local real estate listing company.`,
            responsibilities: `I was responsible for turning wireframes into responsive web design screens and prototypes.`,
            tools: ['Figma', 'Adobe Illustrator'],
            duration: 'Two weeks',
            link: 'https://www.figma.com/file/wmlrymmwZ2UaJGmxgmt92C/hunter-real-estate-ui?type=design&node-id=1403%3A3151&mode=design&t=OLCt27YVfvHHfQhP-1',
            image: '/images/mockups/real-estate-listing-website-mockup_result.png'
        },
        {
            id: 'car-engine-lubricants-website',
            name: 'Car Engine Lubricants Landing Page',
            overview: `Landing page design for a car engine lubricant business.`,
            responsibilities: `I designed the landing page after discussing requirements and goals with the client.`,
            tools: ['Figma', 'Adobe Photoshop'],
            duration: 'Five days',
            link: 'https://www.figma.com/design/EPnevgG2UfnhisxLTweCDb/musashi-website?node-id=1403%3A3151&t=aBZ0LHQt0hd1jFCe-1',
            image: '/images/mockups/car-engine-lubricant-website-mockup_result.png'
        },
		{
			id: 'loyalty-program-platform',
			name: 'Loyalty Program Platform',
			overview: `A draft user interface design for a customer loyalty platform. It is a platform to manage loyalty programs, promotions, and subscriptions, the web app design is for business owners, and the mobile app design is for customers.`,
			responsibilities: `The project's goal is a minimum viable product. I designed the webapp with Chakra UI components in mind.`,
			tools: ['Figma', 'Adobe Illustrator'],
			duration: 'One month',
			link: 'https://www.figma.com/file/2Tmf6ZRDoCCFSgKqq0fJjs/loyalty-program-system?type=design&node-id=0%3A1&mode=design&t=ArB6RtvUXXmdi2IP-1',
			image: '/images/mockups/loyalty-program-mockup_result.png'
		},
		{
			id: 'ut-market-website',
			name: 'App Marketing Website Design',
			overview: `Landing page and informational website for all products related to the UT Market digital platform.`,
			responsibilities: `After discussions with the marketing and business teams on what contents and features are needed on the website, I was responsible for designing the UI screens and some illustrations to best welcome new visitors to our site.`,
			tools: ['Figma', 'Adobe Illustrator'],
			duration: 'Ten Days',
			link: 'https://www.figma.com/file/Hj8RIRNzSXvbtfjGnfl8DH/masayashida.com-Portfolio-Showcase?node-id=0%3A1&t=XHPaiK4nqd1Y7Pdl-1',
			image: '/images/mockups/utmarket-ui-showcase.png'
		},
		{
			id: 'ut-market-app',
			name: 'Mobile Trading App Design',
			overview: `UT Market is an online trading platform that allows traders to buy and sell fractionalized Cambodian real estate assets in the form of Units of Trust (UTs).`,
			responsibilities: `I was tasked with creating the UI design for a mobile version of an existing progressive web app. I came up with entirely new page layouts with a fresh design approach whilst preserving mostly the same user flow from the existing web app.`,
			tools: ['Adobe XD', 'Adobe Illustrator'],
			duration: 'Three months',
			link: 'https://xd.adobe.com/view/a80afaa0-f4f0-4f8a-8573-e1c9adb1e7aa-fd59/flow',
			image: '/images/mockups/android-ios-mockups-result.png'
		},
	];
</script>

<svelte:head>
	<title>Masaya Shida | UI Design Portfolio</title>
</svelte:head>
<div class="ui_page_container">
	<div class="content">
		<section class="top_section">
			<span>
				<span class="heading_container">
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
	<div class="ui_portf_item_section_container">
		<h2>Portfolio</h2>
		{#each ui_design_projects as project}
			<section class="ui_portf_item_section" id={project.id}>
				<div class="ui_portf_item_content">
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
						<h3 class="name">
							{project.name}
						</h3>

						<div class="upper_half">
							<span class="overview">
								<h5 class="categ_head">Overview</h5>
								<p class="body_text">
									{project.overview}
								</p>
							</span>
							<span class="responsibilities">
								<h5 class="categ_head">Responsibilities</h5>
								<p class="body_text">
									{project.responsibilities}
								</p>
							</span>
						</div>
						<div class="bottom_half">
							<span class="tools">
								<h5 class="categ_head">Tools</h5>
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
							<span class="duration">
								<h5 class="categ_head">Duration</h5>
								<p class="body_text">{project.duration}</p>
							</span>
						</div>
						<a class="project_link" href={project.link}>Go to design →</a>
					</div>
				</div>
			</section>
		{/each}
	</div>
</div>

<style>
.ui_page_container {
    width: 100%;
    max-width: 100%;
    overflow-x: clip;
}

.ui_page_container .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin: 0 auto;
    /* background-color: #fff; */
    padding: 3.25rem var(--padding_horizontal);
    /* outline: 1px solid red; */
}

@media screen and (max-width: 48em) {
    .ui_page_container .content {
        margin-top: 2.5rem;
        padding: 3.25rem var(--padding_horizontal);
    }
}

.ui_page_container .top_section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: min(100%, calc(var(--content_max_width) * 0.925));
    margin: 0 auto;
}

@media screen and (max-width: 64em) {
    .ui_page_container .top_section {
        max-width: 100%;
    }
}

@media screen and (max-width: 48em) {
    .ui_page_container .top_section {
        flex-direction: column;
    }
}

.ui_page_container .heading_container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 1.5rem;
}

.ui_page_container .top_section .heading_container h1 {
    font-size: calc(var(--type_scale_6) * 1.125);
    font-weight: 600;
    color: var(--clr_primary);
}

[data-theme="dark"] .ui_page_container .top_section .heading_container h1 {
    color: #fff;
}

.ui_page_container .top_section>span {
    max-width: min(50%, 50ch);
}

@media screen and (max-width: 48em) {
    .ui_page_container .top_section>span {
        max-width: 100%;
        margin-bottom: 2.5rem;
    }
}

.ui_page_container .top_section>span p {
    color: var(--clr_grey_shade_a);
}

[data-theme="dark"] .ui_page_container .top_section>span p {
    color: var(--clr_light)
}

.ui_page_container .top_section>img {
    /* min-width: 21rem; */
    height: auto;
    object-fit: contain;
    /* filter: brightness(0) opacity(0.375) var(--filter_clr_secondary); */
    filter: brightness(0) var(--filter_clr_secondary);
}

@media screen and (max-width: 64em) {
    .ui_page_container .top_section>img {
        max-width: 12.5rem;
    }
}

@media screen and (max-width: 48em) {
    .ui_page_container .top_section>img {
        display: none;
    }
}

.ui_portf_item_section_container {
    /* background-color: var(--clr_secondary); */
    background-color: var(--clr_primary);
    background-image: linear-gradient(35deg, var(--clr_secondary), var(--clr_primary));

    overflow: hidden;

    max-width: min(100%, calc(var(--content_max_width) * 1.125));
    border-radius: 1rem;
    margin: 0 auto;
    box-shadow: inset 0 0 .5rem .5rem rgba(0, 0, 0, .125);

    margin-bottom: 1.5rem;
}

@media screen and (max-width: 64em) {
    .ui_portf_item_section_container {
        max-width: 100%;
        margin: 0 2rem;
    }
}

@media screen and (max-width: 48em) {
    .ui_portf_item_section_container {
        padding-bottom: 2.5rem;
        margin: 0 auto 2.5rem auto;
    }
}


.ui_portf_item_section_container h2 {
    font-size: var(--type_scale_3);
    color: #fff;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 2.5rem auto .75rem auto;
}

.ui_portf_item_section {
    padding: 2.5rem var(--padding_horizontal);
    /* width: calc(100% - calc(var(--padding_horizontal) * 2)); */
    width: 100%;
    /* max-width: 100%; */
    margin: 0 auto;

    /* margin-bottom: 2.5rem; */
}

.ui_portf_item_content {
    width: 100%;
    max-width: 100%;
    /* max-width: var(--content_max_width); */
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;

    /* outline: 1px solid green; */
}

@media screen and (max-width: 64em) {
    .ui_portf_item_section {
        padding: 2.5rem 0;
    }

    .ui_portf_item_content {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
}

@media screen and (max-width: 48em) {
    .ui_portf_item_section {
        padding-bottom: .5rem;
        margin-bottom: .5rem;
        /* margin-bottom: 0; */
    }
}


.ui_page_container .proj_content {
    background-color: #fff;
    border-radius: 1rem;
    padding: 2.5rem 1.75rem;
    border: 1px solid rgba(255, 255, 255, .175);

    max-width: 60%;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, .25);
    /* outline: 1px solid red; */
}

[data-theme="dark"] .ui_page_container .proj_content {
    background-color: var(--clr_dark);
}

@media screen and (max-width: 64em) {
    .ui_page_container .proj_content {
        max-width: 80%;
        border-radius: 0 0 1rem 1rem;
    }
}

@media screen and (max-width: 48em) {
    .ui_page_container .proj_content {
        padding: 1.5rem 1.125rem;
        max-width: 95%;
        border-radius: 0 0 1rem 1rem;
    }
}


.ui_page_container .upper_half {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    /* outline: 1px solid green; */
}

@media screen and (max-width: 48em) {
    .ui_page_container .upper_half {
        flex-direction: column;
        justify-content: flex-start;
    }
}

.ui_page_container .bottom_half {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 1.5rem;
}

@media screen and (max-width: 48em) {
    .ui_page_container .bottom_half {
        flex-direction: column;
        justify-content: flex-start;
    }
}

.ui_page_container .name {
    /* color: #fff; */
    color: var(--clr_primary);
    font-weight: 700;
    margin-bottom: 1.75rem;
}

[data-theme="dark"] .ui_page_container .name {
    color: #fff;
}

.ui_page_container .categ_head {
    color: var(--clr_dark);
    margin-bottom: .5rem;
}

[data-theme="dark"] .ui_page_container .categ_head {
    color: var(--clr_grey_shade_e);
}

.ui_page_container .body_text {
    /* color: var(--clr_grey_shade_e); */
    color: var(--clr_grey_shade_a);
    margin-bottom: 1rem;
}

[data-theme="dark"] .ui_page_container .body_text {
    color: var(--clr_grey_shade_d);
}

.ui_page_container .overview,
.ui_page_container .responsibilities,
.ui_page_container .tools,
.ui_page_container .duration {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1rem;
    max-width: min(45ch, 49%);
    width: 49%;
}

@media screen and (max-width: 48em) {

    .ui_page_container .overview,
    .ui_page_container .responsibilities,
    .ui_page_container .tools,
    .ui_page_container .duration {
        width: 100%;
        max-width: 100%;
    }

    .ui_page_container .tools {
        margin-bottom: 2rem;
    }
}

.ui_page_container .tools img {
    object-fit: contain;
    max-height: 2.5rem;
    margin-right: 1rem;
}

.ui_page_container .duration {
    margin-left: 0;
}

.ui_page_container .project_link {
    font-size: var(--type_scale_3);
    font-weight: 600;
    text-decoration: none;
}


.ui_page_container .proj_img_container {
    width: 24rem;
    height: 24rem;
    padding: 1.5rem;
    border-radius: 1rem 0 0 1rem;
    background-color: rgba(255, 255, 255, .25);

    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right-color: transparent;
    /* margin: auto 0; */
}

@media screen and (max-width: 64em) {
    .ui_page_container .proj_img_container {
        width: 80%;
        max-width: 80%;
        padding: 2.5rem 1.5rem;
        border-radius: 1rem 1rem 0 0;
        border-bottom-color: transparent;
        border-right-color: rgba(255, 255, 255, 0.5);
        /* outline: 1px solid red; */
    }
}

@media screen and (max-width: 48em) {
    .ui_page_container .proj_img_container {
        width: 95%;
        max-width: 95%;
        border-radius: 1rem 1rem 0 0;
        border-bottom-color: transparent;
        border-right-color: rgba(255, 255, 255, 0.5);
    }
}

.ui_page_container .proj_img_container img {
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
    .ui_page_container .proj_img_container {
        background-color: rgba(255, 255, 255, .25);
        backdrop-filter: blur(1rem);
        -webkit-backdrop-filter: blur(1rem);
    }
}
</style>
