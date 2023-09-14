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
	{#if course.url_youtube}
		<a href={course.url_youtube} class="card">
			<img
				src={`/images/${
					tool_logos.filter((logo) => logo.name === course.technology)[0][
						theme === 'dark' ? 'fileNameDark' : 'fileName'
					]
				}`}
				width={tool_logos.filter((logo) => logo.name === course.technology)[0]['width']}
				height={tool_logos.filter((logo) => logo.name === course.technology)[0]['height']}
				alt={course.technology}
				loading="lazy"
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
	{:else}
		<div class={`card ${course.coming_soon ? "disabled" : ""}`}>
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
		</div>
		<div class="coming_soon_filter">
			<span>មកដល់ឆាប់ៗនេះ</span>
		</div>
	{/if}
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
		border: 1px solid var(--clr_grey_shade_d);
		border-radius: 1rem;
	}
	[data-theme='dark'] .card_wrapper .card {
		background-color: var(--clr_dark);
		border-color: var(--clr_grey_shade_a);
	}
	@media screen and (max-width: 48em) {
		.card_wrapper .card {
			background: none;
			padding: 1.25rem 1rem;
		}
		[data-theme='dark'] .card_wrapper .card {
			background: none;
		}
	}
	.card_wrapper .card.disabled {
		opacity: 0.2;
		cursor: not-allowed;
	}
	.card_wrapper .card .coming_soon_filter {
		display: none;
	}
	.card_wrapper .card.disabled .coming_soon_filter {
		display: block;
	}
	.coming_soon_filter {
		width: 100%;
		height: 100%;
		position: relative;
		bottom: 100%;
		backdrop-filter: blur(.125rem);
		-webkit-backdrop-filter: blur(.125rem);
		/* outline: 1px solid red; */
	}
	.coming_soon_filter span {
		font-size: var(--type_scale_2);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		color: var(--clr_primary);
		/* outline: 1px solid green; */
	}
	[data-theme="dark"] .coming_soon_filter span {
		color: var(--clr_grey_shade_e);
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
		font-size: calc(var(--type_scale_1) * 0.8);
		color: var(--clr_grey_shade_b);
		margin-top: auto;
	}
	[data-theme='dark'] .card p {
		color: var(--clr_grey_shade_c);
	}
</style>
