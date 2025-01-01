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
			href: '/masaya-resume-2025.pdf',
			icon: FileDownloadLine
		}
	];

	let current_path_name = '';
	afterUpdate(() => {
		current_path_name = '/' + window.location.pathname.split('/')[1];
	});
	afterNavigate(() => {
		current_path_name = '/' + window.location.pathname.split('/')[1];
	});
</script>

<div class="fixed left-0 top-0 z-50 flex w-full justify-center">
	<header
		class="mx-auto flex w-full max-w-content-max items-center justify-between border-b border-b-grey-2 bg-grey-1 px-horizontal py-3 md:static md:grid md:grid-cols-3 md:py-3"
	>
		<a href="/" class="flex grow items-center justify-start">
			{#if theme === 'dark'}
				<img
					src="/images/masaya-web-dev-logo.svg"
					alt="Masaya logo"
					width="176"
					height="44"
					style="filter: brightness(0) saturate(0) var(--filter-clr-secondary-shade-a);"
					class="max-w-36 object-contain object-left lg:max-w-none"
				/>
			{:else}
				<img
					src="/images/masaya-web-dev-logo.svg"
					alt="Masaya logo"
					width="176"
					height="44"
					class="max-w-36 object-contain object-left lg:max-w-none"
				/>
			{/if}
		</a>
		<div
			class="fixed bottom-0 left-0 flex w-full grow items-center justify-center md:sticky md:top-0 md:w-auto"
		>
			<nav
				class="flex w-full items-center justify-evenly border-t border-t-grey-2 bg-grey-1 px-4 pb-5 pt-2 md:w-auto md:justify-center md:border-t-0 md:bg-none md:p-0"
			>
				{#each nav_items as item}
					<a
						href={item.href}
						class="header_link mr-2 inline-flex w-full items-center justify-center rounded-full p-4 text-scale-0 text-primary transition-all hover:text-secondary active:scale-95 dark:text-grey-6 dark:hover:text-secondary-shade-b md:w-auto"
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
