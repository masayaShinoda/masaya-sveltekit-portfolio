<script lang="ts">
	import { tool_logos as tool_logos_arr } from '$lib/components/tool-logos';
	import type { CourseMeta } from '$lib/types/courses';
	import { themeStore } from '../../stores';

	export let course: CourseMeta;
	let tool_logos = tool_logos_arr;

	let theme: string;
	$: theme = $themeStore;
</script>

<div class="card_wrapper">
	<a href="#" class="card">
		<img
			src={`/images/${
				tool_logos.filter((logo) => logo.name === course.technology)[0][
					theme === 'dark' ? 'fileNameDark' : 'fileName'
				]
			}`}
			width={tool_logos.filter((logo) => logo.name === course.technology)[0]['width']}
			height={tool_logos.filter((logo) => logo.name === course.technology)[0]['height']}
			alt={course.technology}
		/>
		<h3>{course.title}</h3>
		<p>
			{course.level === 'beginner'
				? 'កម្រិត៖ ទើបតែចាប់ផ្តើម'
				: course.level === 'intermediate'
				? 'កម្រិត៖ អ្នកមានបទពិសោធន៍ខ្លះស្រាប់'
				: ''}
		</p>
	</a>
</div>

<style>
	.card_wrapper {
		height: 100%;
	}
	.card_wrapper .card {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 1.5rem;
		color: unset;
		text-decoration: none;
		background-color: #fff;
		border: 1px solid var(--clr_grey_shade_e);
		border-radius: 1rem;
	}
	[data-theme='dark'] .card_wrapper .card {
		background-color: var(--clr_dark);
		border-color: var(--clr_grey_shade_a);
	}
	@media screen and (max-width: 48em) {
		.card_wrapper .card {
			background: none;
            padding: 1;
		}
		[data-theme='dark'] .card_wrapper .card {
            background: none;
		}
	}
	.card img {
		/* stretch image vertically so we can center it, ensuring consistent space between img and title for all img orientations */
		height: 100%;
		max-height: 2.5rem;
		object-fit: contain;
		object-position: center;
		margin-bottom: 1rem;
	}
	.card h3 {
		color: var(--clr_primary);
		font-size: var(--type_scale_2);
		margin-bottom: 0.75rem;
		overflow-wrap: anywhere;
	}
	[data-theme='dark'] .card h3 {
		color: #fff;
	}
	.card p {
        font-size: calc(var(--type_scale_1) * 0.875);
		color: var(--clr_grey_shade_b);
		margin-top: auto;
	}
	[data-theme='dark'] .card p {
		color: var(--clr_grey_shade_c);
	}
</style>
