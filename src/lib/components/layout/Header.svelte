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
		// {
		// 	name: 'Contact',
		// 	href: '#contact',
		// },
		{
			name: 'Resume',
			href: '/masaya-resume-2024.pdf'
		}
	];
</script>

<header
	class="mx-auto flex max-w-content-max justify-between border-b border-b-grey-2 bg-grey-1 bg-opacity-50 px-horizontal py-6"
>
	<a href="/" class="flex items-center justify-center">
		{#if theme === 'dark'}
			<img
				src="/images/masaya-web-dev-logo.svg"
				alt="Masaya logo"
				width="176"
				height="44"
				class="object-contain object-center"
				style="filter: brightness(0) saturate(0) var(--filter-clr-secondary-shade-a);"
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
					class="hover:bg-clr-gray-1 mr-2 rounded-full p-4 text-scale-0 text-primary transition-all hover:shadow-convex active:scale-95 dark:text-grey-6 dark:hover:bg-gradient-dark"
				>
					{item.name}
				</a>
			{/each}
			<ThemeSwitcher />
		</nav>
	</div>
</header>
