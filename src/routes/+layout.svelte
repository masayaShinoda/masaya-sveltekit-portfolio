<script lang="ts">
	// Import the Analytics package, and the SvelteKit dev variable.
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import ReusableLayout from '$lib/components/layout/ReusableLayout.svelte';
	import '../app.css';

	// Inject the Analytics functionality
	inject({ mode: dev ? 'development' : 'production' });
</script>

<ReusableLayout>
	<slot></slot>
</ReusableLayout>
