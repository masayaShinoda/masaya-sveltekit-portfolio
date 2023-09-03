<script lang="ts">
	import { onNavigate } from '$app/navigation';

	import '$lib/styles/global.css';
	import '$lib/styles/components.css';

	import Nav from '$lib/components/Nav.svelte';
	// vercel analytics
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	export let custom_nav = false;
	export let language = 'en';

	// view transitions
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

{#if custom_nav}
	<slot name="custom_nav" />
{:else}
	<Nav />
{/if}
<main lang={language}>
	<slot><!-- optional fallback --></slot>
</main>
