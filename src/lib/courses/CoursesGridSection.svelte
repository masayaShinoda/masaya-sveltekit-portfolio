<script lang="ts">
	import { page } from '$app/stores';
	import type { CourseMeta } from '$lib/types/courses';
	import CourseCard from './CourseCard.svelte';
	import { getQueryParams } from '$lib/utils/getParamsAfterHash';

	export let data: {
		courses_data: Array<CourseMeta>;
	};

	let courses: Array<CourseMeta> = data.courses_data;

	let categories: Array<CourseMeta['category']>;
	categories = data.courses_data
		.map((course) => course.category)
		.filter((x, i, a) => a.indexOf(x) == i);

	let queryParams: Record<string, string>;
	$: queryParams = getQueryParams($page.url.href);

	let activeCategory: string;
	$: activeCategory = queryParams['category'];
</script>

<div class="courses_grid_section_wrapper">
	<section id="categories" class="courses_grid_section_container">
		<div class="courses_grid_section">
			<div class="top_section">
				<h2>វគ្គសិក្សា</h2>
				<nav>
					<a
						href="#categories"
						class={`btn_main btn_main__smaller ${!activeCategory ? '' : 'btn_main__inactive'}`}
					>
						ទាំងអស់
					</a>
					{#each categories as category}
						<a
							href={`#categories?category=${category.replace(' ', '-')}`}
							class={`btn_main btn_main__smaller ${
								category.replace(' ', '-') === activeCategory ? '' : 'btn_main__inactive'
							}`}
						>
							{category === 'programming'
								? 'សរសេរកូដ'
								: category === 'graphic design'
								? 'រចនាក្រាហ្វិច'
								: category === 'ui design'
								? 'រចនាទម្រង់កម្មវិធី'
								: null}
						</a>
					{/each}
				</nav>
			</div>
			<div class="grid_section">
				<ul>
					{#each courses as course}
						<li
							class={`${
								course.category.replace(' ', '-') === activeCategory || !activeCategory
									? ''
									: 'hidden'
							}`}
						>
							<CourseCard {course} />
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</section>
</div>

<style>
	.courses_grid_section_wrapper .courses_grid_section_container {
		background-color: #fff;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 5rem 0 3.125rem 0;
		/* outline: 1px solid red; */
	}
	[data-theme='dark'] .courses_grid_section_wrapper .courses_grid_section_container {
		background-color: #000;
	}
	@media screen and (max-width: 48em) {
		.courses_grid_section_wrapper .courses_grid_section_container,
		[data-theme='dark'] .courses_grid_section_wrapper .courses_grid_section_container {
			background-color: unset;
		}
	}
	.courses_grid_section_container .courses_grid_section {
		width: 100%;
		max-width: var(--content_max_width);
		margin: 0 auto;
		padding: 0 var(--padding_horizontal);
	}
	.top_section {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
	.top_section h2 {
		color: var(--clr_primary);
	}
	[data-theme='dark'] .top_section h2 {
		color: #fff;
	}
	@media screen and (max-width: 48em) {
		.top_section h2 {
			margin: 0 auto;
			text-align: center;
		}
		.top_section nav {
			display: none;
		}
	}
	.top_section nav a {
		font-size: calc(var(--type_scale_1) * 0.875);
	}
	.grid_section {
		padding: 2rem 0;
		margin: 1rem 0;
	}
	@media screen and (max-width: 48em) {
		.grid_section {
			padding: 1rem 0;
			margin: 0;
		}
	}
	.grid_section ul {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
		list-style-type: none;
	}
	@media screen and (max-width: 64em) {
		.grid_section ul {
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;
		}
	}
	@media screen and (max-width: 48em) {
		.grid_section ul {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}
	}
	.grid_section ul li {
		height: 100%;
	}
	/* .hidden class only works for big screens */
	@media screen and (min-width: 48em) {
		.grid_section ul li.hidden {
			display: none;
		}
	}
</style>
