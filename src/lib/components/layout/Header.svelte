<script>
	import ThemeSwitcher from "$lib/components/layout/ThemeSwitcher.svelte"
</script>
<header class="max-w-content-max mx-auto py-6 px-horizontal flex justify-between bg-grey-1 dark:bg-grey-6">
	<img
		src="/images/masaya-web-dev-logo.svg"
		alt="Masaya logo"
		width="160"
		height="40"
		class="dark:saturate-0 dark:invert dark:brightness-50 object-contain object-center"
	/>
	<div>
		<nav>
			<a href="/">Home</a>
			<a href="/">Portfolio</a>
			<a href="/">Contact</a>
			<ThemeSwitcher />
		</nav>
	</div>
</header>
