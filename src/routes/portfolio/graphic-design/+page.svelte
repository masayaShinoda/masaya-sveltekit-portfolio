<script lang="ts">
	// import BackToTop from '$lib/components/BackToTop.svelte';
	import data from './data';
	import { lazyLoad } from './lazy_load';
	import { onMount } from 'svelte';
	// import styles from '$lib/web-development/WebDevelopment.module.css';

	let projects = data.projects;

	onMount(() => {
		let industry_divs = document.querySelectorAll(`.gfx_projects_section__body__industry`);

		let active_class_list = ['bg-gradient-secondary', 'border-secondary', 'text-mono-1'];
		let inactive_class_list = ['bg-grey-1', 'border-grey-2'];

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const intersecting = entry.isIntersecting;
					let btn_active = document.querySelector(`a[href='#${entry.target.id}']`);

					if (!intersecting) {
						btn_active?.classList.remove(...active_class_list);
						btn_active?.classList.add(...inactive_class_list);
					} else {
						btn_active?.classList.remove(...inactive_class_list);
						btn_active?.classList.add(...active_class_list);
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
	<title>Graphic Design Portfolio | Masaya Shida</title>
</svelte:head>
<header class="mb-20 flex flex-col items-start px-4 md:mb-10 md:items-center">
	<img
		src="/images/icon-pen.svg"
		width="40"
		height="40"
		style="filter: brightness(0) saturate(0) var(--filter-clr-primary);"
		alt="Graphic design icon"
		class="mb-4 max-h-8 max-w-8 dark:hidden md:max-h-10 md:max-w-10"
	/>
	<img
		src="/images/icon-pen.svg"
		width="40"
		height="40"
		style="filter: brightness(0) saturate(0) var(--filter-clr-secondary-shade-b);"
		alt="Graphic design icon"
		class="mb-4 hidden max-h-8 max-w-8 dark:block md:max-h-10 md:max-w-10"
	/>
	<h1
		class="mb-4 text-scale-2 text-primary dark:text-secondary-shade-b md:text-center md:text-scale-4"
	>
		Graphic Design Portfolio
	</h1>
	<p class="max-w-[720px] text-scale-0 text-grey-5 md:text-center">
		I use graphic design to communicate key ideas with clarity and impact. Prioritizing readability
		and practicality, I create designs that are both visually compelling and easy to understand. My
		goal is to transform concepts into visuals that engage and inform audiences effectively.
	</p>
</header>
<div class="fixed bottom-0 w-full">
	<div class="gfx_projects_section__nav">
		<nav id="gfx_projects_section__nav__btn_group" class="gfx_projects_section__nav__btn_group">
			{#each Array.from(projects
					.filter((project) => project.items.length > 0)
					.map((project) => project.industry)).filter((x, i, a) => a.indexOf(x) == i) as industry}
				<a
					href={`#${encodeURI(industry)}`}
					class="inline-block w-full rounded-full border border-grey-2 bg-grey-1 p-3 text-center text-scale-0 text-grey-6 shadow-sm transition-all hover:brightness-105 active:translate-y-px dark:text-grey-6 sm:w-auto"
				>
					{industry}
				</a>
			{/each}
		</nav>
	</div>
</div>
<div class="gfxdes_grid_section">
	<!-- Photo Grid -->
	{#each Array.from(projects
			.filter((project) => project.items.length > 0)
			.map((project) => project.industry)).filter((x, i, a) => a.indexOf(x) == i) as industry, index}
		<h5 class="industry">Industry: {industry}</h5>
		<div id={encodeURI(industry)} class="row gfx_projects_section__body__industry">
			{#each projects as project}
				{#if project.industry === industry}
					{#each project.items as item, n}
						<div class="column">
							<img
								id={`${index} ${project.industry}`}
								class="w-full"
								use:lazyLoad={`/images/graphic-design/${item.src}`}
								alt={item.alt}
								loading="lazy"
								width="340"
								height="340"
							/>
						</div>
					{/each}
				{/if}
			{/each}
		</div>
	{:else}
		<!-- empty list -->
		<p style="margin: 3.25rem auto; text-align: center;">No items found 🧐</p>
	{/each}
</div>

<style>
	.gfx_projects_section__nav {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		width: 100%;

		position: -webkit-sticky;
		/* Safari */
		position: sticky;
		bottom: 2rem;

		margin: 0 auto;
	}

	@media screen and (max-width: 64em) {
		.gfx_projects_section__nav {
			display: none;
		}
	}
	.gfx_projects_section__nav__btn_group {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.25rem;
		padding: 1rem 0;
	}
	.gfx_projects_section__nav__btn_group a {
		margin: 0.25rem 0;
	}

	.gfxdes_grid_section {
		margin: 2.5rem auto;
		padding: 0 1rem;
		width: 100%;
		max-width: min(var(--content-max-width), 100%);
	}

	.gfxdes_grid_section > h5.industry {
		margin-left: 0.25rem;
		margin-bottom: 0.5rem;
		color: var(--clr-grey-5);
		font-size: var(--type-scale-0);
	}

	.gfx_projects_section__body__industry {
		scroll-margin-top: 5rem;
		scroll-snap-margin-top: 5rem;
		/* iOS 11 and older */

		width: 100%;
		margin-bottom: 3.25rem;
		padding: 0.25rem 0;
	}

	.gfxdes_grid_section .row {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.75rem;
	}

	@media screen and (max-width: 48em) {
		.gfxdes_grid_section .row {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media screen and (max-width: 40em) {
		.gfxdes_grid_section .row {
			grid-template-columns: 1fr;
		}
	}

	.gfxdes_page_container .column img {
		margin-top: 0.75rem;
		vertical-align: middle;
		width: 100%;
		max-width: 100%;
		height: fit-content;
		object-fit: contain;

		box-shadow: 0 0.325rem 0.5rem rgba(0, 0, 0, 0.25);

		/* lazy load */
		opacity: 0;
		transition: opacity 200ms ease;
	}
</style>
