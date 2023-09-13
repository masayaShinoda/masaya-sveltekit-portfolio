<script lang="ts">
	import { page } from '$app/stores';
	import ThemeToggler from '$lib/components/ThemeToggler.svelte';
	import styles from '$lib/components/Nav.module.css';

	let mobileNavActive = false;

	function toggleMobileNav() {
		mobileNavActive = !mobileNavActive
		if (mobileNavActive) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'scroll';
		}
	}
</script>

<section class={styles.nav_container}>
	<div class={styles.nav_content}>
		<button
			class={`${styles.mobile_nav_btn} ${mobileNavActive ? styles.close : null}`}
			on:click={toggleMobileNav}
			aria-label={`${mobileNavActive ? 'Close' : 'Open'} menu`}
			title={`${mobileNavActive ? 'Close' : 'Open'} menu`}
		>
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</button>
		<a href="/" class={styles.logo_link}>
			<img src="/images/masaya-web-dev-logo.svg" alt="Logo" width="240" height="60" />
		</a>
		<div class={styles.nav_links}>
			<nav>
				<a href="/courses" lang="km">វគ្គសិក្សា</a>
				<a
					href="/web-development"
					class={`${$page.url.pathname === '/web-development' ? 'link__active' : null}`}
					>Web Development</a
				>
				<a
					href="/graphic-design"
					class={`${$page.url.pathname === '/graphic-design' ? 'link__active' : null}`}
					>Graphic Design</a
				>
				<a
					href="/ui-design"
					class={`${$page.url.pathname === '/ui-design' ? 'link__active' : null}`}>UI Design</a
				>
			</nav>
			<ThemeToggler />
		</div>
	</div>
	<div class={`${styles.mobile_nav_container} ${mobileNavActive ? styles.active : null}`}>
		<nav class={styles.mobile_nav_drawer}>
			<a href="/" on:click={toggleMobileNav}>Home</a>
			<a href="/courses" on:click={toggleMobileNav} lang="km">វគ្គសិក្សា</a>
			<a href="/web-development" on:click={toggleMobileNav}>Web Development</a>
			<a href="/graphic-design" on:click={toggleMobileNav}>Graphic Design</a>
			<a href="/ui-design" on:click={toggleMobileNav}>UI Design</a>
		</nav>
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<!-- this is the remaining space where users can tap to close nav -->
		<div
			class={styles.remaining}
			aria-label="Close navigation panel"
			role="navigation"
			on:click={toggleMobileNav}
			on:keydown={toggleMobileNav}
		/>
	</div>
</section>
