<script lang="ts">
	import { page } from '$app/stores';
	import ThemeToggler from '$lib/components/ThemeToggler.svelte';

	let mobileNavActive = false;

	function toggleMobileNav() {
		mobileNavActive = !mobileNavActive;
		if (mobileNavActive) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'scroll';
		}
	}
	// console.log($page.url.hash);
</script>

<div class="nav-container-wrapper">
	<section class="nav-container">
		<div class="nav-content">
			<button
				class={`mobile-nav-btn ${mobileNavActive ? 'close' : null}`}
				on:click={toggleMobileNav}
				aria-label={`${mobileNavActive ? 'Close' : 'Open'} menu`}
				title={`${mobileNavActive ? 'Close' : 'Open'} menu`}
			>
				<div class="mobile-nav-btn__burger">
					<span aria-hidden="true" />
					<span aria-hidden="true" />
					<span aria-hidden="true" />
				</div>
				<span>Menu</span>				
			</button>
			<a href="/" class="logo-link">
				<img src="/images/masaya-web-dev-logo.svg" alt="Logo" width="160" height="40" />
			</a>
			<div class="nav-links">
				<nav>
					<a
						href="/#"
						class={`${$page.url.pathname === '/' && $page.url.hash === '' ? 'link__active' : ''}`}
						>Home</a
					>
					<a href="/#portfolio" class={`${$page.url.hash === '#portfolio' ? 'link__active' : ''}`}
						>Portfolio</a
					>
					<a href="/#contact" class={`${$page.url.hash === '#contact' ? 'link__active' : ''}`}
						>Contact</a
					>
					<a href="/courses" lang="km">វគ្គសិក្សា</a>
					<!-- <a
						href="/web-development"
						class={`${$page.url.pathname === '/web-development' ? 'link__active' : ''}`}
						>Web Development</a
					>
					<a
						href="/graphic-design"
						class={`${$page.url.pathname === '/graphic-design' ? 'link__active' : ''}`}
						>Graphic Design</a
					>
					<a
						href="/ui-design"
						class={`${$page.url.pathname === '/ui-design' ? 'link__active' : ''}`}>UI Design</a
					> -->
				</nav>
				<ThemeToggler />
			</div>
		</div>
		<div class={`mobile-nav-container ${mobileNavActive ? 'active' : null}`}>
			<nav class="mobile-nav-drawer">
				<a href="/" on:click={toggleMobileNav}>Home</a>
				<a href="/courses" on:click={toggleMobileNav} lang="km">វគ្គសិក្សា</a>
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
</div>

<style>
	.nav-container-wrapper .nav-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		max-width: 100%;
		border-bottom: 1px solid var(--clr-grey-2);
		transition: border-bottom-color 200ms ease-out;
	}

	[data-theme='dark'] .nav-container-wrapper .nav-container {
		border-bottom-color: var(--clr-grey-5);
	}

	.nav-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		max-width: var(--content-max-width);
		padding: 0.5rem var(--padding-horizontal);
		margin: 0 auto;
	}

	.nav-links {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	@media screen and (max-width: 48em) {
		.nav-links {
			position: absolute;
			right: 1rem;
			/* width: 100%; */
		}
	}

	.nav-content nav {
		display: inline-block;
		text-align: end;
		margin-right: 0.5rem;
		/* outline: 1px solid red; */
	}

	.mobile-nav-btn {
		display: none;
	}

	.mobile-nav-container {
		display: none;
	}

	.logo-link img {
		object-fit: contain;
		max-width: 12.5rem;
		/* outline: 1px solid red; */
	}

	@media screen and (max-width: 64em) {
		.logo-link img {
			max-width: 10rem;
		}
	}
	@media screen and (max-width: 40em) {
		.logo-link img {
			max-height: 2.25rem;
			/* outline: 1px solid red; */
		}
	}

	[data-theme='dark'] .logo-link img {
		filter: saturate(0) invert(1) brightness(5);
	}

	.nav-content nav a {
		display: inline-flex;
		padding: 1rem;
		font-weight: 400;
		text-decoration: none;
		margin-right: 0;
		color: var(--clr-primary);
		border-radius: 100vmax;
		transition:
			color 200ms ease-out,
			background-color 200ms ease-out,
			box-shadow 200ms ease-out,
			transform 100ms ease-in-out;
	}

	[data-theme='dark'] .nav-content a {
		color: var(--clr-grey-1);
	}

	@media screen and (max-width: 64em) {
		.nav-content nav a {
			margin-right: 0;
		}
	}

	.nav-content nav a:hover,
	.nav-content nav a:focus-visible {
		color: var(--clr-secondary);
	}

	.nav-content nav a:active {
		transform: translateY(0.125rem);
	}

	[data-theme='dark'] .nav-content nav a:hover,
	[data-theme='dark'] .nav-content nav a:focus-visible {
		color: var(--clr-secondary-shade-b);
	}

	.nav-content nav a:last-of-type {
		margin-right: 0;
	}

	.nav-content nav a:hover,
	.nav-content nav a:focus-visible,
	.nav-content nav a.link__active {
		background-color: var(--clr-gradient-light);
		box-shadow: var(--shadow-convex);
	}

	[data-theme='dark'] .nav-content nav a:hover,
	[data-theme='dark'] .nav-content nav a:focus-visible,
	[data-theme='dark'] .nav-content nav a.link__active {
		background-color: var(--clr-gradient-dark);
	}

	@media screen and (max-width: 48em) {
		.nav-content {
			/* justify-content: center; */
			padding: 1rem var(--padding-horizontal);
		}
		.mobile-nav-btn {
			display: flex;
			align-items: center;
			justify-content: center;
			position: fixed;
			bottom: 3.5dvh;
			left: var(--padding-horizontal);
			height: 3.5rem;
			max-height: 3.5rem;
			border-radius: 100vmax;
			padding: 1rem;
			border: none;
			outline: none;
			background: var(--clr-gradient-secondary);
			box-shadow: var(--shadow-md);
			z-index: 100;
			cursor: pointer;
		}
		.mobile-nav-btn:hover,
		.mobile-nav-btn:focus-visible {
			filter: brightness(1.125);
		}
		.mobile-nav-btn:active {
			transform: scale(0.95);
		}
		.mobile-nav-btn > span {
			color: var(--clr-grey-1);
			margin-left: .25rem;
			font-family: var(--font-primary);
			font-size: var(--type-scale-0);
			cursor: pointer;
		}
		.mobile-nav-btn .mobile-nav-btn__burger {
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			align-items: center;
			width: 2rem; 
			height: 2rem;
			transform: scale(0.75);
		}

		.mobile-nav-btn__burger > span {
			display: flex;
			justify-content: center;
			align-items: center;
			background: var(--clr-grey-1);
			width: 1.75rem;
			height: 0.25rem;
			border-radius: 0.125rem;
			transition: transform 200ms ease-out;
		}

		.mobile-nav-btn.close {
			background-color: rgba(255, 255, 255, 0.125);
			box-shadow: none;
		}

		.mobile-nav-btn.close > .mobile-nav-btn__burger > span:first-of-type {
			position: absolute;
			transform: rotateZ(45deg);
		}

		.mobile-nav-btn.close > .mobile-nav-btn__burger > span:nth-of-type(2) {
			position: absolute;
			transform: rotateZ(-45deg);
		}

		.mobile-nav-btn.close > .mobile-nav-btn__burger > span:last-of-type {
			display: none;
		}

		.nav-content nav {
			display: none;
		}

		.logo-link img {
			margin: 0 auto;
			/* max-width: 10rem; */
		}

		@media screen and (max-width: 48em) {
			.logo-link img {
				max-width: 10rem;
			}
		}

		.mobile-nav-container {
			transition: all 200ms ease-in-out;
		}

		.mobile-nav-container.active {
			display: flex;
			flex-direction: column-reverse;
			position: fixed;
			bottom: 7dvh;
			left: 0;
			width: 100%;
			z-index: 10;
		}

		.mobile-nav-container .mobile-nav-drawer {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
			background-color: var(--clr-grey-2);
			border-radius: 1rem;
			padding: 1rem 0;
			margin: 0 auto 2.5rem auto;
			width: 100%;
			max-width: calc(var(--content-max-width) - calc(var(--padding-horizontal) * 2));
			z-index: 15;
			/* outline: 1px solid red; */
		}
		[data-theme="dark"] .mobile-nav-container .mobile-nav-drawer {
			background-color: var(--clr-grey-5);
		}

		.mobile-nav-drawer a {
			color: var(--clr-grey-1);
			display: inline-flex;
			padding: 1rem calc(var(--padding-horizontal) * 1.25);
			font-size: var(--type-scale-0);
			text-decoration: none;
			width: 100%;
			/* outline: 1px solid red; */
		}
		.mobile-nav-drawer a:visited {
			color: unset;
		}

		.remaining {
			background: rgba(0, 0, 0, 0.75);
			backdrop-filter: blur(2px);
			flex-grow: 1;
			cursor: pointer;
			display: flex;
			height: 100dvh;
			width: 100%;
			position: fixed;
			bottom: 0;
		}
	}
</style>
