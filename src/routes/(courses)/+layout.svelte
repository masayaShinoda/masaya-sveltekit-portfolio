<script>
	import ReusableLayout from '$lib/components/ReusableLayout.svelte';
	import CoursesNav from '$lib/courses/CoursesNav.svelte';
</script>

<ReusableLayout language="km" custom_nav>
	<CoursesNav slot="custom_nav" />
	<slot />
</ReusableLayout>
