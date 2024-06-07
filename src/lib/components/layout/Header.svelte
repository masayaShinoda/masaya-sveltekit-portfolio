<script lang="ts">
	import ThemeSwitcher from '$lib/components/layout/ThemeSwitcher.svelte';
	import { themeStore } from '$lib/stores';
	import { page } from '$app/stores';
	import HomeLine from '$lib/components/icons/HomeLine.svelte';
	import TerminalBoxLine from '$lib/components/icons/TerminalBoxLine.svelte';
	import FileDownloadLine from '$lib/components/icons/FileDownloadLine.svelte';
	import { afterUpdate, onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';

	let theme: string;
	themeStore.subscribe((value) => {
		theme = value;
	});

	let nav_items = [
		{
			name: 'Home',
			href: '/',
			icon: HomeLine
		},
		{
			name: 'Portfolio',
			href: '/portfolio',
			icon: TerminalBoxLine
		},
		// {
		// 	name: 'Contact',
		// 	href: '#contact',
		// },
		{
			name: 'Resume',
			href: '/masaya-resume-2024.pdf',
			icon: FileDownloadLine
		}
	];

	let current_path_name = '';
	afterUpdate(() => {
		current_path_name = window.location.pathname;
	});
	afterNavigate(() => {
		current_path_name = window.location.pathname;
	});
</script>

<div class="fixed left-0 top-0 flex w-full justify-center">
	<header
		class="mx-auto flex w-full max-w-content-max items-center justify-between border-b border-b-grey-2 bg-grey-1 px-horizontal py-3 md:static md:justify-between md:py-3"
	>
		<a href="/" class="flex grow items-center justify-start">
			{#if theme === 'dark'}
				<img
					src="/images/masaya-web-dev-logo.svg"
					alt="Masaya logo"
					width="176"
					height="44"
					style="filter: brightness(0) saturate(0) var(--filter-clr-secondary-shade-a);"
				/>
			{:else}
				<img src="/images/masaya-web-dev-logo.svg" alt="Masaya logo" width="176" height="44" />
			{/if}
		</a>
		<div class="fixed bottom-0 left-0 flex grow items-center justify-center md:sticky md:top-0">
			<nav
				class="flex items-center justify-evenly border-t border-t-grey-2 bg-grey-1 px-4 pb-5 pt-2 md:w-auto md:justify-center md:border-t-0 md:bg-none md:p-0"
			>
				{#each nav_items as item}
					<a
						href={item.href}
						class="header_link mr-2 inline-flex w-full items-center justify-center rounded-full p-4 text-scale-0 text-primary transition-all hover:bg-grey-1 hover:shadow-convex active:scale-95 dark:text-grey-6 md:w-auto"
						data-active={current_path_name === item.href ? true : false}
					>
						<div class="mr-2 h-4 w-4 md:hidden">
							<svelte:component this={item.icon}></svelte:component>
						</div>
						{item.name}
					</a>
				{/each}
				<!-- <p>{current_path_name}</p> -->
			</nav>
		</div>
		<div class="flex grow items-center justify-end">
			<ThemeSwitcher />
		</div>
	</header>
</div>

<style>
	:global(header nav a.header_link[data-active='true']) {
		/* background-color: var(--clr-grey-1); */
		background-image: var(--clr-gradient-neutral);
		box-shadow: var(--shadow-convex);
	}
</style>
