<script>
	import { page } from '$app/stores';
</script>

<div class="py-4 mx-auto flex flex-col items-center">
	<h1 class="mx-auto mb-6 text-center text-scale-3">{$page.status} {$page.error?.message}</h1>
	<a
		href="/"
		class="flex w-full items-center justify-center rounded-full border border-grey-2 bg-gradient-neutral p-4 text-center text-scale-0 text-primary shadow-convex transition-all hover:brightness-105 active:translate-y-px dark:text-grey-6 md:w-auto"
	>
		Homepage →
	</a>
</div>
