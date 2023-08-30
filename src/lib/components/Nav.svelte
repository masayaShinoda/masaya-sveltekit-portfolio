<script>
	import { page } from '$app/stores';
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

<section class="nav_container">
	<div class="nav_content">
		<a href="/" class="logo_link">
			<img src="/images/masaya-web-dev-logo.svg" alt="Logo" width="240" height="60" />
		</a>
		<div class="nav_links">
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
			<a href="/" on:click={toggleMobileNav}>Home</a>
			<a href="/courses" on:click={toggleMobileNav}>វគ្គសិក្សា</a>
			<a href="/web-development" on:click={toggleMobileNav}>Web Development</a>
			<a href="/graphic-design" on:click={toggleMobileNav}>Graphic Design</a>
			<a href="/ui-design" on:click={toggleMobileNav}>UI Design</a>
		</nav>
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<!-- this is the remaining space where users can tap to close nav -->
		<div
			class="remaining"
			aria-label="Close navigation panel"
			role="navigation"
			on:click={toggleMobileNav}
			on:keydown={toggleMobileNav}
		/>
	</div>
</section>

<style>
	@import './Nav.module.css';
</style>
