<script lang="ts">
	import { onMount } from 'svelte';
	import { lazyLoad } from './lazy_load';
	import BackToTop from '$lib/components/BackToTop.svelte';
	import data from './data';
	// import styles from '$lib/graphic-design/GraphicDesign.module.css';

	let gfx_projects = data.gfx_projects;

	onMount(() => {
		let industry_divs = document.querySelectorAll(
			`.gfx_projects_section__body__industry`
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
	<title>Masaya Shida | Graphic Design Portfolio</title>
</svelte:head>
<div class="content_page_container gfxdes_page_container">
	<div class="content">
		<div class="gfxdes_top_section">
			<img src="/images/icon-pen.svg" alt="decorative icon" width="100" height="75" />
			<h1>Graphic Design Portfolio</h1>
			<p>
				I have always believed in using graphic design as an effective method to communicate key
				ideas to an audience.
			</p>
		</div>
		<div class="gfx_projects_section__nav">
			<label for="gfx_projects_section__nav__btn_group">Industries: </label>
			<nav
				id="gfx_projects_section__nav__btn_group"
				class="gfx_projects_section__nav__btn_group"
			>
				{#each Array.from(gfx_projects
						.filter((project) => project.items.length > 0)
						.map((project) => project.industry)).filter((x, i, a) => a.indexOf(x) == i) as industry}
					<a href={`#${encodeURI(industry)}`} class="btn_main btn_main__smaller">
						{industry}
					</a>
				{/each}
			</nav>
		</div>
		<div class="gfxdes_grid_section">
			<!-- Photo Grid -->
			{#each Array.from(gfx_projects
					.filter((project) => project.items.length > 0)
					.map((project) => project.industry)).filter((x, i, a) => a.indexOf(x) == i) as industry, index}
				<h5 class="industry">Industry: {industry}</h5>
				<div
					id={encodeURI(industry)}
					class="row gfx_projects_section__body__industry"
				>
					{#each gfx_projects as project}
						{#if project.industry === industry}
							{#each project.items as item, n}
								<div class="column">
									<img
										id={`${index} ${project.industry}`}
										class="gfx_projects_section__body__item"
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
		<BackToTop />
	</div>
</div>

<style>
.gfxdes_top_section {
	display: flex;
	flex-direction: column;
	align-items: center;

	margin: 0 auto;
	padding: 2.5rem 0 1rem 0;
	/* width: 100%; */
}

@media screen and (max-width: 48em) {
	.gfxdes_top_section {
		margin: 2.5rem auto;
		padding: 2.5rem var(--padding_horizontal);
	}
}

.gfxdes_top_section > img {
	object-fit: contain;
	object-position: center;
	filter: var(--filter_clr_secondary);
	margin-bottom: 1.75rem;
}

[data-theme='dark'] .gfxdes_page_container .gfxdes_top_section > img {
	filter: var(--filter_clr_secondary_shade_a);
}

.gfxdes_top_section > h1 {
	font-weight: 600;
	font-size: calc(var(--type_scale_6) * 1.125);
	color: var(--clr_primary);
	text-align: center;
	margin-bottom: 1rem;
}

[data-theme='dark'] .gfxdes_page_container .gfxdes_top_section > h1 {
	color: #fff;
}

@media screen and (max-width: 64em) {
	.gfxdes_top_section > h1 {
		font-size: var(--type_scale_3);
	}
}

@media screen and (max-width: 48em) {
	.gfxdes_top_section > h1 {
		font-size: var(--type_scale_6);
	}
}

.gfxdes_top_section > p {
	text-align: center;
	max-width: min(45ch, 100%);
	color: var(--clr_grey_shade_a);
}

[data-theme='dark'] .gfxdes_page_container .gfxdes_top_section > p {
	color: var(--clr_light);
}

.gfx_projects_section__nav {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	width: 100%;
	max-width: calc(100% - 2rem);

	position: -webkit-sticky;
	/* Safari */
	position: sticky;
	top: 0;

	margin: 0 auto;
	background-color: rgba(0, 0, 0, 0);
	-webkit-backdrop-filter: blur(0.25rem);
	backdrop-filter: blur(0.25rem);
}

@media screen and (max-width: 64em) {
	.gfx_projects_section__nav {
		display: none;
	}
}

.gfx_projects_section__nav > label {
	margin-top: 0.5rem;
	margin-right: 0.5rem;
	color: var(--clr_grey_shade_a);
	font-size: calc(var(--type_scale_1) * 0.9);
	text-shadow: 0 1px 2px rgba(0, 0, 0, 0.125);
}
[data-theme='dark'] .gfxdes_page_container .gfx_projects_section__nav > label {
	color: var(--clr_grey_shade_e);
}

.gfx_projects_section__nav__btn_group {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: .25rem;
	padding: 1rem 0;
}
.gfx_projects_section__nav__btn_group a {
	margin: 0.25rem 0;
}

.gfxdes_grid_section {
	margin: 2.5rem auto;
	max-width: min(calc(var(--content_max_width) * 0.9), 100%);
}

.gfxdes_grid_section > h5.industry {
	margin-left: 0.25rem;
	color: var(--clr_grey_shade_a);
	font-size: var(--type_scale_1);
}

[data-theme='dark'] .gfxdes_page_container .gfxdes_grid_section > h5.industry {
	color: var(--clr_grey_shade_d);
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
	gap: .75rem;
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