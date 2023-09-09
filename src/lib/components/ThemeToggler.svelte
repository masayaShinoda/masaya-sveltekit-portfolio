<script lang="ts">
	import MoonLine from '$lib/components/icons/moon-line.svelte';
	import SunLine from '$lib/components/icons/sun-line.svelte';
	import { themeStore } from '../../stores';

	let theme: string;

	themeStore.subscribe((value) => {
		theme = value;
	});

	function toggleTheme() {
		themeStore.update((theme) => (theme === 'light' ? 'dark' : 'light'));
		// console.log(theme)
	}
</script>

<div class="theme_toggle">
	<button on:click={toggleTheme} title="Toggle website theme." aria-label="Toggle website theme.">
		{#if theme === 'dark'}
			<SunLine />
		{:else}
			<MoonLine />
		{/if}
	</button>
</div>

<style>
	.theme_toggle button {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.5rem;
		cursor: pointer;

		background: none;
		border: 1px solid var(--clr_grey_shade_a);
		border-radius: 100vmax;
		transition: transform 50ms ease-out;
	}
	[data-theme='dark'] .theme_toggle button {
		filter: invert(1);
	}
	.theme_toggle button:active {
		transform: translateY(0.125rem);
	}
</style>
