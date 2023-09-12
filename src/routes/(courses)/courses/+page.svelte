<script lang="ts">
	import Hero from '$lib/courses/Hero.svelte';
	import CoursesGridSection from '$lib/courses/CoursesGridSection.svelte';

	export let data
</script>

<svelte:head>
	<title>វគ្គសិក្សា | Courses by masayashida.com</title>
</svelte:head>
<Hero />
<CoursesGridSection {data} />

