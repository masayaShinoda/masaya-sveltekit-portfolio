<script lang="ts">
	import ThemeToggler from '$lib/components/ThemeToggler.svelte';
	import styles from '$lib/components/Nav.module.css';

	let mobileNavActive = false;

	function toggleMobileNav() {
		mobileNavActive = !mobileNavActive;
		if (mobileNavActive) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'scroll';
		}
	}
</script>

<section lang="km" class={styles.nav_container}>
	<div class={styles.nav_content}>
		<button
			class={`${styles.mobile_nav_btn} ${mobileNavActive ? styles.close : null}`}
			on:click={toggleMobileNav}
			aria-label={`${mobileNavActive ? 'Close' : 'Open'} Menu`}
		>
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</button>
		<a href="/" class={styles.logo_link} title="ទៅទំព័រដើម">
			<img src="/images/maya-logo-icon.svg" alt="Logo" width="60" height="60" />
		</a>
		<div class={styles.nav_links}>
			<nav>
				<a href="#">វគ្គសិក្សា</a>
				<a href="#">អំពីខ្ញុំ</a>
			</nav>
			<ThemeToggler />
		</div>
	</div>
	<div class={`${styles.mobile_nav_container} ${mobileNavActive ? styles.active : null}`}>
		<nav class={styles.mobile_nav_drawer}>
			<a href="/" on:click={toggleMobileNav}>ទំព័រដើម</a>
			<a href="#" on:click={toggleMobileNav}>វគ្គសិក្សា</a>
			<a href="#" on:click={toggleMobileNav}>អំពីខ្ញុំ</a>
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
