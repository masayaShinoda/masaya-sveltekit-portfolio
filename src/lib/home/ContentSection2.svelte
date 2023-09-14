<script lang="ts">
	import type { Technology } from '$lib/types/courses';
	import { tool_logos as tool_logos_arr } from '$lib/components/tool-logos';
	import { themeStore } from '../../stores';
	import styles from './ContentSection2.module.css';

	let tool_logos = tool_logos_arr;

	type TechStack = Array<{
		category: string;
		tools: Array<Technology>;
	}>;

	let tech_stack: TechStack = [
		{
			category: 'Web Development',
			tools: ['HTML & CSS', 'JavaScript', 'NextJS', 'React', 'Svelte', 'Django']
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

<section class={styles.content_section_2_container}>
	<div class={styles.content}>
		<h2>Skillset</h2>
		<p>
			I'm constantly learning different technologies and software to complete projects efficiently.
		</p>
		<div class={styles.technology_icons_container}>
			{#each tech_stack as { category, tools }}
				<div class={styles.box}>
					<h4>{category}</h4>
					<div>
						{#each tools as tool}
							<img
								src={`/images/${
									tool_logos.filter((logo) => logo.name === tool)[0][
										theme === 'dark' ? 'fileNameDark' : 'fileName'
									]
								}`}
								alt={tool}
								title={tool}
								width={tool_logos.filter((logo) => logo.name === tool)[0]['width']}
								height={tool_logos.filter((logo) => logo.name === tool)[0]['height']}
							/>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
