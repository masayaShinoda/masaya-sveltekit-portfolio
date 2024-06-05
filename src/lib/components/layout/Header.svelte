<script lang="ts">
	import ThemeSwitcher from '$lib/components/layout/ThemeSwitcher.svelte';
	import { themeStore } from '$lib/stores';

	let theme: string;
	themeStore.subscribe((value) => {
		theme = value;
	});

	let nav_items = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'Portfolio',
			href: '/portfolio'
		},
		{
			name: 'Contact',
			href: '#contact'
		}
	];
</script>

<header
	class="max-w-content-max mx-auto py-6 px-horizontal flex justify-between bg-grey-1 bg-opacity-50 border-b border-b-grey-2"
>
	<a href="/" class="flex items-center justify-center">
		{#if theme === 'dark'}
			<img
				src="/images/masaya-web-dev-logo.svg"
				alt="Masaya logo"
				width="176"
				height="44"
				class="object-contain object-center"
				style="filter: var(--filter-clr-secondary-shade-a);"
			/>
		{:else}
			<img
				src="/images/masaya-web-dev-logo.svg"
				alt="Masaya logo"
				width="176"
				height="44"
				class="object-contain object-center"
			/>
		{/if}
	</a>
	<div>
		<nav class="flex items-center">
			{#each nav_items as item}
				<a
					href={item.href}
					class="p-4 mr-2 transition-all rounded-full dark:hover:bg-gradient-dark hover:bg-clr-gray-1 hover:shadow-convex text-scale-0 text-primary dark:text-grey-6"
				>
					{item.name}
				</a>
			{/each}
			<ThemeSwitcher />
		</nav>
	</div>
</header>
