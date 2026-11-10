<script lang="ts">
	import { onMount } from 'svelte';

	export let src: string;
	export let alt: string;
	export let domain: string;

	// Show the minimap only when the capture is this many times taller than the frame
	const TALL_RATIO = 1.4;

	let row: HTMLDivElement;
	let viewport: HTMLDivElement;
	let img: HTMLImageElement;
	let minimap: HTMLButtonElement;
	let mode: 'unknown' | 'tall' | 'short' = 'unknown';
	let lensTop = 0;
	let lensHeight = 100;

	function updateLens() {
		const h = viewport.scrollHeight || 1;
		lensTop = (viewport.scrollTop / h) * 100;
		lensHeight = Math.min(100, (viewport.clientHeight / h) * 100);
	}

	function classify() {
		if (!img?.naturalWidth) return;
		// Keep in sync with the max-h/h classes on the viewport below
		const frameMax = window.matchMedia('(min-width: 48rem)').matches
			? Math.min(640, window.innerHeight * 0.75)
			: Math.min(480, window.innerHeight * 0.6);
		const shown = (img.naturalHeight * row.clientWidth) / img.naturalWidth;
		mode = shown >= frameMax * TALL_RATIO ? 'tall' : 'short';
		requestAnimationFrame(updateLens);
	}

	function jump(e: MouseEvent) {
		const r = minimap.getBoundingClientRect();
		viewport.scrollTo({
			top: ((e.clientY - r.top) / r.height) * viewport.scrollHeight - viewport.clientHeight / 2,
			behavior: 'smooth'
		});
	}

	onMount(() => {
		if (img.complete) classify();
		const observer = new ResizeObserver(classify);
		observer.observe(row);
		return () => observer.disconnect();
	});
</script>

<div>
	<div class="text-scale-neg-1 text-grey-5 mb-3 flex items-center justify-between gap-4">
		<span class="truncate">{domain}</span>
		{#if mode === 'tall'}
			<span class="shrink-0 md:hidden">Scroll or tap the thumbnail</span>
			<span class="hidden shrink-0 md:inline">Scroll or click the thumbnail</span>
		{/if}
	</div>
	<div bind:this={row} class="flex gap-3">
		<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
		<div
			bind:this={viewport}
			on:scroll={updateLens}
			tabindex="0"
			role="region"
			aria-label={`Full-page screenshot of ${domain}`}
			class="border-grey-3 bg-grey-2 min-w-0 flex-1 rounded-lg border md:overscroll-contain {mode ===
			'short'
				? 'overflow-hidden'
				: 'max-h-[min(480px,60svh)] overflow-y-auto md:max-h-[min(640px,75svh)]'} {mode === 'tall'
				? 'h-[min(480px,60svh)] md:h-[min(640px,75svh)]'
				: ''}"
		>
			<img bind:this={img} on:load={classify} {src} {alt} class="block h-auto w-full" />
		</div>
		{#if mode === 'tall'}
			<button
				bind:this={minimap}
				on:click={jump}
				type="button"
				tabindex="-1"
				aria-hidden="true"
				class="border-grey-3 bg-grey-2 relative w-12 shrink-0 cursor-pointer self-start overflow-hidden rounded-md border md:w-18"
			>
				<img {src} alt="" class="block h-auto w-full opacity-85" />
				<span
					class="border-secondary bg-secondary/15 dark:border-secondary-shade-b absolute inset-x-0 rounded-sm border-2"
					style:top={`${lensTop}%`}
					style:height={`${lensHeight}%`}
				></span>
			</button>
		{:else}
			<div class="hidden w-18 shrink-0 md:block" aria-hidden="true"></div>
		{/if}
	</div>
</div>
