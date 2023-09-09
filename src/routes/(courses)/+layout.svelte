<script lang="ts">
	import ReusableLayout from '$lib/components/ReusableLayout.svelte';
	import CoursesNav from '$lib/courses/CoursesNav.svelte';
</script>

<svelte:head>
	<meta name="description" content="វគ្គសិក្សាសរសេរកូដនិងឌីស្សាញជាភាសាខ្មែរ។" />
	<meta
		name="keywords"
		content="រៀនបង្កើតគេហទំព័រ, រៀនបង្កើតវេបសាយ, រៀនសរសេរកូដ, រៀនឌីស្សាញ, វគ្គសិក្សាសរសេរកូដ, វគ្គសិក្សាឌីស្សាញ, khmer web development, khmer ui design, khmer graphic design course, khmer ui design course, how to code khmer, design tutorial khmer, courses by masaya shida"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="វគ្គសិក្សា | Courses by masayashida.com" />
	<meta property="og:description" content="វគ្គសិក្សាសរសេរកូដនិងឌីស្សាញជាភាសាខ្មែរ។" />
	<meta property="og:image" content="/images/banner-masaya-courses.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content="វគ្គសិក្សា | Courses by masayashida.com" />
	<meta property="twitter:description" content="វគ្គសិក្សាសរសេរកូដនិងឌីស្សាញជាភាសាខ្មែរ។" />
	<meta property="twitter:image" content="/images/banner-masaya-courses.png" />
</svelte:head>
<ReusableLayout language="km" custom_nav>
	<CoursesNav slot="custom_nav" />
	<slot />
</ReusableLayout>
