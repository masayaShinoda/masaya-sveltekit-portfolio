<script lang="ts">
	import { onMount } from 'svelte';
	import { lazyLoad } from './lazy_load';
	import BackToTop from '$lib/components/BackToTop.svelte';
	import data from './data';
	import styles from '$lib/graphic-design/GraphicDesign.module.css';

	let gfx_projects = data.gfx_projects;

	onMount(() => {
		let industry_divs = document.querySelectorAll(
			`.${styles.gfx_projects_section__body__industry}`
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
<div class={styles.content_page_container}>
	<div class={styles.content}>
		<div class={styles.gfxdes_top_section}>
			<img src="/images/icon-pen.svg" alt="decorative icon" width="100" height="75" />
			<h1>Graphic Design Portfolio</h1>
			<p>
				I have always believed in using graphic design as an effective method to communicate key
				ideas to an audience.
			</p>
		</div>
		<div class={styles.gfx_projects_section__nav}>
			<label for="gfx_projects_section__nav__btn_group">Industries: </label>
			<nav
				id="gfx_projects_section__nav__btn_group"
				class={styles.gfx_projects_section__nav__btn_group}
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
		<div class={styles.gfxdes_grid_section}>
			<!-- Photo Grid -->
			{#each Array.from(gfx_projects
					.filter((project) => project.items.length > 0)
					.map((project) => project.industry)).filter((x, i, a) => a.indexOf(x) == i) as industry, index}
				<h5 class={styles.industry}>Industry: {industry}</h5>
				<div
					id={encodeURI(industry)}
					class={`${styles.row} ${styles.gfx_projects_section__body__industry}`}
				>
					{#each gfx_projects as project}
						{#if project.industry === industry}
							{#each project.items as item, n}
								<div class={styles.column}>
									<img
										id={`${index} ${project.industry}`}
										class={styles.gfx_projects_section__body__item}
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
