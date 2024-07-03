<script lang="ts">
	import Toggle from './Toggle.svelte';
	import MoonLine from '$lib/components/icons/MoonLine.svelte';
	import SunLine from '$lib/components/icons/SunLine.svelte';
	import { themeStore } from '$lib/stores';

	let active: boolean;

	themeStore.subscribe((value) => {
		if (value === 'light') {
			active = true;
		} else {
			active = false;
		}
	});

	function toggleTheme() {
		themeStore.update((theme) => (theme === 'light' ? 'dark' : 'light'));
	}
</script>

<Toggle label="Toggle theme" {active} on:change={toggleTheme}>
	<MoonLine slot="false_icon" />
	<SunLine slot="true_icon" />
</Toggle>
