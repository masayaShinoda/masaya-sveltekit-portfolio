<script>
	import { writable } from 'svelte/store';
	import ThemeToggler from '$lib/components/ThemeToggler.svelte';

	const mobileNavActive = writable(false);

	let isActive;

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

<section lang="km" class="nav_container">
	<div class="nav_content">
		<a href="/" class="logo_link">
			<img src="/images/maya-logo-icon.svg" alt="Logo" width="60" height="60" />
		</a>
		<div class="nav_links">
			<nav>
				<a href="#">វគ្គសិក្សា</a>
				<a href="#">អ្នកបង្រៀន</a>
			</nav>
			<ThemeToggler />
		</div>
		<button
			class={`mobile_nav_btn ${isActive ? 'close' : null}`}
			on:click={toggleMobileNav}
			aria-label={`${isActive ? 'Close' : 'Open'} Menu`}
		>
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</button>
	</div>
	<div class={`mobile_nav_container ${isActive ? 'active' : null}`}>
		<nav class="mobile_nav_drawer">
			<a href="#" on:click={toggleMobileNav}>វគ្គសិក្សា</a>
			<a href="#" on:click={toggleMobileNav}>គ្រូបង្រៀន</a>
		</nav>
		<div class="remaining" on:click={toggleMobileNav} />
	</div>
</section>

<style>
	@import '$lib/components/Nav.module.css';
</style>
