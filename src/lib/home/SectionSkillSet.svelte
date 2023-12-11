<script lang="ts">
	import type { Technology } from '$lib/types/courses';
	import { tool_logos as tool_logos_arr } from '$lib/components/tool-logos';
	import { themeStore } from '../../stores';

	let tool_logos = tool_logos_arr;

	type TechStack = Array<{
		category: string;
		tools: Array<Technology>;
	}>;

	let tech_stack: TechStack = [
		{
			category: 'Web Development',
			tools: ['HTML', 'CSS', 'JavaScript', 'React', 'Svelte', 'Django']
		},
		{
			category: 'UI Design',
			tools: ['Figma', 'Adobe XD']
		},
		{
			category: 'Graphic Design',
			tools: ['Adobe Illustrator', 'Adobe Photoshop']
		}
	];

	let theme: string;
	$: theme = $themeStore;
</script>

<section class="section-container">
	<div class="section-content">
		<div class="section-content__left">
			<h2>Skill Set</h2>
			<p>
				I'm constantly learning different technologies and software to complete projects
				efficiently.
			</p>
			<p>
				I can help turn projects ideas turn into reality from wireframing and design, to coding a
				functioning web app, as well as creating promotional and educational material with graphic
				design.
			</p>
		</div>
		<div class="section-content__right">
			{#each tech_stack as { category, tools }}
				<div class="section-content__right-category">
					<h3>{category}</h3>
					<ul class="section-content__right-category-list">
						{#each tools as tool}
							<li>
								<img
									src={`/images/tech-stack-logos/${
										tool_logos.filter((logo) => logo.name === tool)[0][
											theme === 'dark' ? 'fileNameDark' : 'fileName'
										]
									}`}
									alt={tool}
									title={tool}
									width={tool_logos.filter((logo) => logo.name === tool)[0]['width']}
									height={tool_logos.filter((logo) => logo.name === tool)[0]['height']}
								/>
								<span>{tool}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.section-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 5rem 0;
		width: 100%;
		max-width: 100%;
	}
	.section-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		max-width: var(--content-max-width);
		margin: 0 auto;
		padding: var(--padding-horizontal);
		border-radius: 2rem;
	}

	@media screen and (max-width: 48em) {
		.section-container {
			padding: 1.75rem 0;
		}
		.section-content {
			flex-direction: column;
			align-items: flex-start;
			width: 100%;
			max-width: 100%;
		}
	}
	.section-content__left {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		max-width: min(23.75rem, 100%);
	}
	@media screen and (max-width: 48em) {
		.section-content__left {
			margin: 0 auto 1rem auto;
			max-width: min(32em, 100%);
		}
	}
	.section-content__left h2 {
		font-size: var(--type-scale-3);
		color: var(--clr-primary);
		margin-bottom: 1rem;
	}
	[data-theme='dark'] .section-content__left h2 {
		color: var(--clr-secondary-shade-b);
	}
	.section-content__left p {
		color: var(--clr-grey-5);
		margin-bottom: 2rem;
	}
	[data-theme='dark'] .section-content__left p {
		color: var(--clr-grey-2);
	}

	.section-content__right {
		display: grid;
		grid-template-areas:
			'a b'
			'a c';
		gap: 2.5rem;
		padding: 0 1.5rem;
	}
	@media screen and (max-width: 64em) {
		.section-content__right {
			gap: 1rem;
			max-width: 40%;
		}
	}
	@media screen and (max-width: 48em) {
		.section-content__right {
			width: 100%;
			max-width: min(32em, 100%);
			margin: 0 auto;
		}
	}
	.section-content__right-category:nth-of-type(1) {
		grid-area: a;
	}
	.section-content__right-category:nth-of-type(2) {
		grid-area: b;
	}
	.section-content__right-category:nth-of-type(3) {
		grid-area: c;
	}
	.section-content__right-category > h3 {
		font-size: var(--type-scale-1);
		margin-bottom: 1rem;
	}
	.section-content__right-category-list {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.section-content__right-category-list li {
		display: inline-flex;
		align-items: center;
		margin-bottom: 1rem;
	}
	.section-content__right-category-list li > img {
		margin-right: 0.75rem;
	}
	.section-content__right-category-list li > span {
		font-size: var(--type-scale-0);
		color: var(--clr-grey-5);
		line-height: 1.6;
	}
	[data-theme='dark'] .section-content__right-category-list li > span {
		color: var(--clr-grey-2);
	}
</style>
