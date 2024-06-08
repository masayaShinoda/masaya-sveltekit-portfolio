<script>
	import Hero from '$lib/components/home/Hero.svelte';
	import SectionCertif from '$lib/components/home/SectionCertif.svelte';
	import SectionSkillset from '$lib/components/home/SectionSkillset.svelte';
</script>

<svelte:head>
	<title>Masaya Shida | Cambodia-Based Web Developer & Designer</title>
	<meta name="description" content="Cambodia-based web developer and designer." /><meta
		name="keywords"
		content="masayashida, masaya shida, shida masaya, masaya shida portfolio, projects by masaya shida"
	/><meta property="og:type" content="website" /><meta
		property="og:title"
		content="Masaya Shida"
	/><meta property="og:description" content="Cambodia-based web developer and designer." /><meta
		property="og:image"
		content="/images/banner-logo-margins.png"
	/><meta property="twitter:card" content="summary_large_image" /><meta
		property="twitter:title"
		content="Masaya Shida"
	/><meta
		property="twitter:description"
		content="Cambodia-based web developer and designer."
	/><meta property="twitter:image" content="/images/banner-logo-margins.png" />
</svelte:head>
<div>
	<Hero />
	<SectionSkillset />
	<SectionCertif />
</div>
