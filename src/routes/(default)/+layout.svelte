<script lang="ts">
	import ReusableLayout from '$lib/components/ReusableLayout.svelte';
</script>

<svelte:head>
	<meta name="description" content="Cambodia-based web developer and graphic designer." />
	<meta
		name="keywords"
		content="masayashida, masaya shida, shida masaya, masaya shida portfolio, projects by masaya shida"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Masaya Shida" />
	<meta property="og:description" content="Cambodia-based web developer and graphic designer." />
	<meta property="og:image" content="/images/banner-logo-margins.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content="Masaya Shida" />
	<meta
		property="twitter:description"
		content="Cambodia-based web developer and graphic designer."
	/>
	<meta property="twitter:image" content="/images/banner-logo-margins.png" />
</svelte:head>
<ReusableLayout>
	<slot />
</ReusableLayout>
