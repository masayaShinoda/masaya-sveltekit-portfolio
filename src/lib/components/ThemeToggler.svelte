<script lang="ts">
	import Toggle from '$lib/components/Toggle.svelte';
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

<Toggle label="Toggle theme" active={theme === 'light'} on:change={toggleTheme}>
	<MoonLine slot="false_icon" />
	<SunLine slot="true_icon" />
</Toggle>

<!-- <div class="theme_toggle">
	<button on:click={toggleTheme} title="Toggle website theme." aria-label="Toggle website theme.">
		{#if theme === 'dark'}
			<SunLine />
		{:else}
			<MoonLine />
		{/if}
	</button>
</div> -->

<style>
</style>
