<script lang="ts">
	import { page } from '$app/stores';
	import type { Course } from '$lib/types/courses/index.js';
	import CourseBox from '$lib/courses/course/CourseBox.svelte';

	export let data: {
		courses_data: Array<Course>;
	};

	let course = data.courses_data.find((item) => {
		return item.slug === $page.params.slug;
	});
</script>

<svelte:head>
	{#if course && course.title}
		<title>{course.title} - masayashida.com</title>
	{/if}
</svelte:head>
<div class="course_container">
	<div class="course_content">
		{#if course && course.active}
			<CourseBox {course} />
		{:else}
			<p>វគ្គសិក្សាមិនមាននៅក្នុងប្រព័ន្ធទេ។ <a href="/courses">ទៅទំព័រដើម →</a></p>
		{/if}
	</div>
</div>

<style>
	.course_container {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 100%;
	}
	.course_content {
		display: flex;
		flex-direction: column;
		margin: auto;
		width: 100%;
		max-width: var(--content_max_width);
		padding: 2.5rem var(--padding_horizontal);
	}
	@media screen and (max-width: 48em) {
		.course_content {
			width: 100%;
			padding: 0 1rem;
			align-items: flex-start;
			margin: 0 0 1.5rem 0;
			outline: 1px solid red;
		}
	}
</style>
