<script>
	import ReusableLayout from '$lib/components/ReusableLayout.svelte';
</script>

<ReusableLayout language="km" custom_nav>
	<section slot="custom_nav">
		<span>Custom nav</span>
	</section>
	<slot />
</ReusableLayout>
