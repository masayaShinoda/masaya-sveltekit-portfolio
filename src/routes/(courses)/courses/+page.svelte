<script lang="ts">
	import Hero from '$lib/courses/Hero.svelte';
	import CoursesGridSection from '$lib/courses/CoursesGridSection.svelte';
	import Footer from '$lib/courses/Footer.svelte';

	export let data
</script>

<svelte:head>
	<title>វគ្គសិក្សា | Courses by masayashida.com</title>
</svelte:head>
<Hero />
<CoursesGridSection {data} />
<Footer />