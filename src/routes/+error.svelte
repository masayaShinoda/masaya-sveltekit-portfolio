<script>
	import { page } from '$app/stores';
</script>

<div class="mx-auto flex flex-col items-center py-4">
	<h1 class="text-scale-3 mx-auto mb-6 text-center">{$page.status} {$page.error?.message}</h1>
	<a
		href="/"
		class="border-grey-2 bg-gradient-neutral text-scale-0 text-primary shadow-convex dark:text-grey-6 flex w-full items-center justify-center rounded-full border p-4 text-center transition-all hover:brightness-105 active:translate-y-px md:w-auto"
	>
		Homepage →
	</a>
</div>
