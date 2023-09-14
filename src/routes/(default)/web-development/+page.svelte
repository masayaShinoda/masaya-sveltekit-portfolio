<script lang="ts">
	import { onMount } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import BackToTop from '$lib/components/BackToTop.svelte';
	import data from './data';
	import { tool_logos as tool_logos_arr } from '$lib/components/tool-logos';
	import styles from '$lib/web-development/WebDevelopment.module.css';

	let tool_logos = tool_logos_arr;
	let web_projects = data.web_projects;

	onMount(() => {
		let industry_divs = document.querySelectorAll(
			`.${styles.webdev_projects_section__body__industry}`
		);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const intersecting = entry.isIntersecting;
					if (!intersecting) {
						document
							.querySelector(`a[href='#${entry.target.id}']`)
							?.classList.add('btn_main__inactive');
					} else {
						document
							.querySelector(`a[href='#${entry.target.id}']`)
							?.classList.remove('btn_main__inactive');
					}
				});
			},
			{
				threshold: 0.5
			}
		);

		industry_divs.forEach((industry) => {
			observer.observe(industry);
		});
	});
</script>

<svelte:head>
	<title>Masaya Shida | Web Development Portfolio</title>
</svelte:head>
<div class={styles.content_page_container}>
	<div class={styles.content}>
		<section class={styles.webdev_top_section}>
			<div class={styles.webdev_top_section__left}>
				<img src="/images/icon-code.svg" alt="decorative icon" width="100" height="75" />
				<h1>Web Development</h1>
			</div>
			<div class={styles.webdev_top_section__right}>
				<p>
					I see the web as an important and democratizing platform for people around the world to
					share their ideas and to show who they are and what they care about, where anyone with an
					internet connection can access.
				</p>
				<p>I have taught myself web development to create engaging and user-friendly websites.</p>
			</div>
		</section>
		<section class={styles.webdev_projects_section}>
			<header class={styles.webdev_projects_section__top}>
				<h2>My Projects</h2>
				<div class={styles.webdev_projects_section__top__line} />
				<nav class={styles.webdev_projects_section__top__btn_group}>
					{#each Array.from(web_projects.map((project) => project.industry)).filter((x, i, a) => a.indexOf(x) == i) as industry, index}
						<a
							href={`#${encodeURI(industry)}`}
							class={`${styles.section_top_btn} btn_main btn_main__smaller`}
						>
							{industry}
						</a>
					{/each}
				</nav>
			</header>
			<div class="webdev_projects_section__body">
				<!-- each category of project has its own containing div acting as an anchor -->
				{#each Array.from(web_projects.map((project) => project.industry)).filter((x, i, a) => a.indexOf(x) == i) as industry, index}
					<div id={encodeURI(industry)} class={styles.webdev_projects_section__body__industry}>
						{#each web_projects as project}
							{#if project.industry === industry}
								<!-- content here -->
								<article id={`${project.id}`} class={styles.webdev_projects_section__body__item}>
									<div class={styles.content_half}>
										<p class={styles.industry}>Industry: {industry}</p>
										<h3 class={styles.name}>{project.name}</h3>
										<div class={styles.content_half__content}>
											<span class={styles.content_half__content__tools}>
												<h4>Tools</h4>
												<div>
													{#each Array.from(project.tools.map( (tool) => tool_logos.filter((i) => i.name === tool) )) as tool}
														<img
															src={`/images/${tool[0].fileName}`}
															alt={tool[0].name}
															title={tool[0].name}
															loading="lazy"
															width={tool[0].width}
															height={tool[0].height}
														/>
													{/each}
												</div>
											</span>
										</div>
										<div class={styles.content_half__content}>
											{#if project.overview}
												<!-- content here -->
												<h4>Overview</h4>
												<SvelteMarkdown source={project.overview} />
											{/if}
										</div>
										<div class={styles.content_half__content}>
											{#if project.responsibilities}
												<!-- content here -->
												<h4>Responsibilities</h4>
												<SvelteMarkdown source={project.responsibilities} />
											{/if}
										</div>
										<a href={project.link} class="btn_main">See Demo →</a>
									</div>
									<img
										alt={`Screenshot of project ${project.name}`}
										width="480"
										height="360"
										src={project.image}
										loading="lazy"
										style="object-fit: contain; object-position: center;"
									/>
								</article>
							{/if}
						{/each}
					</div>
				{:else}
					<!-- empty list -->
					<p style="margin: 3.25rem auto; text-align: center;">No items found 🧐</p>
				{/each}
			</div>
		</section>
	</div>
	<BackToTop />
</div>
