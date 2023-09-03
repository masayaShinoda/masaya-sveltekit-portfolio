<script lang="ts">
	import { writable } from 'svelte/store';
	import ThemeToggler from '$lib/components/ThemeToggler.svelte';
	import styles from '$lib/components/Nav.module.css';

	const mobileNavActive = writable(false);

	let isActive: boolean;

	mobileNavActive.subscribe((value) => {
		isActive = value;
	});
	function toggleMobileNav() {
		mobileNavActive.update((prevValue) => !prevValue);
		if (isActive) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'scroll';
		}
	}
</script>

<section lang="km" class={styles.nav_container}>
	<div class={styles.nav_content}>
		<a href="/" class={styles.logo_link}>
			<img src="/images/maya-logo-icon.svg" alt="Logo" width="60" height="60" />
		</a>
		<div class={styles.nav_links}>
			<nav>
				<a href="#">វគ្គសិក្សា</a>
				<a href="#">អ្នកបង្រៀន</a>
			</nav>
			<ThemeToggler />
		</div>
		<button
			class={`${styles.mobile_nav_btn} ${isActive ? styles.close : null}`}
			on:click={toggleMobileNav}
			aria-label={`${isActive ? 'Close' : 'Open'} Menu`}
		>
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</button>
	</div>
	<div class={`${styles.mobile_nav_container} ${isActive ? styles.active : null}`}>
		<nav class={styles.mobile_nav_drawer}>
			<a href="#" on:click={toggleMobileNav}>វគ្គសិក្សា</a>
			<a href="#" on:click={toggleMobileNav}>គ្រូបង្រៀន</a>
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
