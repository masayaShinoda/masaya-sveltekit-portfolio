<script lang="ts">
	import { browser } from '$app/environment';
	import type { Course } from '$lib/types/courses';
	import { page } from '$app/stores';
	import Youtube from 'svelte-youtube-embed';

	export let course: Course;
	let active_section: number;

	let activeSectionParam: string | null;
	$: activeSectionParam = browser ? $page.url.searchParams.get('section') : '';

	$: active_section = activeSectionParam ? Number(activeSectionParam) : 1;
</script>

<div class="coursebox">
	<section class="section_details">
		<h1>{course.title}</h1>
		<div class="course_info">
			<p>
				ប្រភេទវគ្គសិក្សា៖
				<a
					href={`/courses#categories?category=${
						course.category === 'programming'
							? 'programming'
							: course.category === 'graphic design'
							? 'graphic-design'
							: course.category === 'ui design'
							? 'ui-design'
							: null
					}`}
				>
					{course.category === 'programming'
						? 'សរសេរកូដ'
						: course.category === 'graphic design'
						? 'រចនាក្រាហ្វិច'
						: course.category === 'ui design'
						? 'រចនាទម្រង់កម្មវិធី'
						: null}
				</a>
			</p>
			<p>
				{course.level === 'beginner'
					? 'កម្រិត៖ ទើបតែចាប់ផ្តើម'
					: course.level === 'intermediate'
					? 'កម្រិត៖ អ្នកមានបទពិសោធន៍ខ្លះស្រាប់'
					: ''}
			</p>
			{#if course.sections && course.sections.length > 0}
				{#if course.sections[active_section - 1].description}
					<p class="course_description">{course.sections[active_section - 1].description}</p>
				{/if}
			{/if}
		</div>
	</section>
	<section class="section_player">
		{#if course.sections && course.sections.length > 0}
			{#if course.sections[active_section - 1] && course.sections[active_section - 1].url_youtube}
				<!-- content here -->
				<Youtube
					id={course.sections[active_section - 1].url_youtube?.substring(
						16,
						course.sections[active_section - 1].url_youtube?.length
					)}
					animations={false}
				>
					<img
						slot="thumbnail"
						src={course.sections[active_section - 1].src_thumbnail}
						alt={`Thumbnail of a video about ${course.sections[active_section - 1].title}`}
						style="width: 100%; height: 100%; object-fit: contain; object-position: center; background: #003153;"
					/>
				</Youtube>
				<!-- <p>
					activeSectionParam
					{activeSectionParam}
				</p>
				<p>
					active section = {active_section - 1}
				</p>
				<span>
					{course.sections[active_section - 1].url_youtube}
				</span> -->
			{/if}
		{/if}
	</section>
	<section class="section_chapters">
		<h3>ជំពូក</h3>
		{#if course.sections && course.sections.length > 0}
			<ul>
				{#each course.sections as section, index}
					<li>
						<a
							href={`?section=${index + 1}`}
							class={`${active_section === index + 1 ? 'active' : ''}`}
						>
							<h2>{section.title}</h2>
						</a>
					</li>
				{/each}
			</ul>
			<!-- content here -->
		{/if}
	</section>
</div>

<style>
	.coursebox {
		display: grid;
		/* grid-template-columns: 3fr 1fr; */
		grid-template-areas:
			'a a a'
			'b b c';
		gap: 2.5rem;
	}
	@media screen and (max-width: 48em) {
		.coursebox {
			grid-template-areas:
				'a'
				'b'
				'c';
		}
	}
	.section_details {
		grid-area: b;
		padding-right: 1.5rem;
	}
	.section_player {
		grid-area: a;
	}
	.section_chapters {
		grid-area: c;
		border-left: 1px solid var(--clr_grey_shade_e);
		padding-left: 1.5rem;
	}
	[data-theme='dark'] .coursebox .section_chapters {
		border-left-color: var(--clr_primary_shade_a);
	}
	@media screen and (max-width: 48em) {
		.section_chapters {
			padding-left: 0;
			border-left: none;
		}
	}
	.section_chapters ul {
		list-style-type: none;
	}

	.section_chapters ul li {
		margin: 0.5rem 0;
	}
	.section_chapters ul li a {
		text-decoration: none;
		color: var(--clr_grey_shade_b);
	}
	[data-theme='dark'] .section_chapters ul li a {
		color: var(--clr_grey_shade_d);
	}
	.section_chapters ul li a.active {
		color: var(--clr_secondary);
	}
	[data-theme='dark'] .section_chapters ul li a.active {
		color: var(--clr_secondary_shade_b);
	}
	@media screen and (max-width: 48em) {
		.section_chapters ul li {
			margin: 0;
			padding: 0.5rem 0;
		}
		.section_chapters ul li a {
			width: 100%;
		}
	}
	.section_chapters ul li h2 {
		font-size: var(--type_scale_1);
	}
	.section_chapters h3 {
		font-size: var(--type_scale_2);
		padding-bottom: 0.5rem;
		margin-bottom: 1.5rem;
		border-bottom: 1px solid var(--clr_grey_shade_e);
	}
	[data-theme='dark'] .section_chapters h3 {
		border-bottom-color: var(--clr_primary_shade_a);
	}

	.section_details .course_info {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin: 1rem 0;
	}
	.section_details .course_info p {
		color: var(--clr_grey_shade_b);
		margin: 0.25rem 0;
		font-size: calc(var(--type_scale_1) * 0.95);
	}
	[data-theme='dark'] .section_details .course_info p {
		color: var(--clr_grey_shade_d);
	}
	.section_details .course_info .course_description {
		margin: 1rem 0;
		color: var(--clr_grey_shade_a);
	}
	[data-theme='dark'] .section_details .course_info .course_description {
		margin: 1rem 0;
		color: var(--clr_grey_shade_e);
	}
</style>
