<script lang="ts">
	// import BackToTop from '$lib/components/BackToTop.svelte';
	import data from './data';
	import SiteScreenshot from '$lib/components/portfolio/SiteScreenshot.svelte';
	import { formatCompletedDate } from '$lib';

	let projects = data.projects;

	const domainOf = (link: string) => new URL(link).hostname.replace(/^www\./, '');
</script>

<svelte:head>
	<title>Web Development Portfolio | Masaya Shida</title>
</svelte:head>
<nav
	class="max-w-content-max px-horizontal mx-auto mb-8 flex w-full items-center justify-start md:mb-6 md:hidden"
>
	<a href="/portfolio" class="text-scale-0 text-grey-5 hover:underline">← Back</a>
</nav>
<nav
	class="max-w-content-max px-horizontal mx-auto mb-1 hidden w-full items-center justify-between md:flex"
>
	<a href="/portfolio/graphic-design" class="text-scale-0 text-grey-5 hover:underline"
		>← Graphic Design Portfolio</a
	>
	<a href="/portfolio/ui-ux-design" class="text-scale-0 text-grey-5 hover:underline"
		>UI/UX Design Portfolio →</a
	>
</nav>
<header class="mb-16 flex flex-col items-start px-4 md:mb-10 md:items-center">
	<img
		src="/images/icon-code.svg"
		width="40"
		height="40"
		style="filter: brightness(0) saturate(0) var(--filter-clr-primary);"
		alt="Web development icon"
		class="mb-4 max-h-8 max-w-8 md:max-h-10 md:max-w-10 dark:hidden"
	/>
	<img
		src="/images/icon-code.svg"
		width="40"
		height="40"
		style="filter: brightness(0) saturate(0) var(--filter-clr-secondary-shade-b);"
		alt="Web development icon"
		class="mb-4 hidden max-h-8 max-w-8 md:max-h-10 md:max-w-10 dark:block"
	/>
	<h1
		class="text-scale-2 text-primary dark:text-secondary-shade-b md:text-scale-4 mb-4 md:text-center"
	>
		Web Development Portfolio
	</h1>
	<p class="text-scale-0 text-grey-5 max-w-[720px] md:text-center">
		I see the web as an important and democratizing platform for people around the world to share
		their ideas and to show who they are and what they care about, where anyone with an internet
		connection can access.
	</p>
</header>
<section class="max-w-content-max mx-auto flex w-full flex-col p-4 md:p-10">
	{#each projects as project (project.id)}
		<article
			id={project.id}
			class="border-grey-2 grid grid-cols-1 gap-8 border-t py-16 first:border-t-0 first:pt-0 md:grid-cols-[5fr_6fr] md:gap-x-12 md:py-20 md:first:pt-8"
		>
			<!-- On phones this wrapper dissolves so the screenshot can sit between header and details -->
			<div
				class="contents md:sticky md:top-12 md:flex md:min-w-0 md:flex-col md:items-start md:gap-6 md:self-start"
			>
				<header class="order-1 md:order-none">
					<p class="text-scale-0 text-grey-5">
						{[project.industry, formatCompletedDate(project.completedDate)]
							.filter(Boolean)
							.join(', ')}
					</p>
					<h2 class="text-scale-2 text-primary dark:text-grey-6 md:text-scale-3 leading-snug">
						{project.name}
					</h2>
					{#if project.summary}
						<p class="text-scale-0 text-grey-5">{project.summary}</p>
					{/if}
				</header>
				<div class="order-3 flex min-w-0 flex-col items-start gap-6 md:order-none">
					<section>
						<h3 class="text-scale-1 text-grey-6 mb-1">Tools</h3>
						<ul class="flex flex-wrap items-center gap-x-4 gap-y-2">
							{#each project.tools as tool (tool)}
								<li class="text-scale-0 text-grey-5">{tool}</li>
							{/each}
						</ul>
					</section>
					<section>
						<h3 class="text-scale-1 text-grey-6 mb-1">Overview</h3>
						<p class="text-scale-0 text-grey-5">{project.overview}</p>
					</section>
					{#if project.responsibilities}
						<section>
							<h3 class="text-scale-1 text-grey-6 mb-1">Responsibilities</h3>
							<p class="text-scale-0 text-grey-5">{project.responsibilities}</p>
						</section>
					{/if}
					{#if project.link}
						<a
							href={project.link}
							target="_blank"
							rel="noopener"
							class="border-secondary bg-gradient-secondary text-scale-0 text-grey-1 shadow-convex dark:text-grey-6 w-full rounded-full border p-4 text-center transition-all hover:brightness-105 active:translate-y-px md:w-auto"
						>
							See live demo
						</a>
					{/if}
				</div>
			</div>
			<div class="order-2 min-w-0 md:order-none">
				{#if project.link}
					<SiteScreenshot
						src={project.image}
						alt={`Full home page of ${project.name}`}
						domain={domainOf(project.link)}
					/>
				{:else}
					<div class="bg-gradient-card flex items-center justify-center rounded-lg p-6">
						<img
							src={project.image}
							width="520"
							height="293"
							class="h-auto w-full max-w-[520px] object-contain object-center"
							alt={`Screenshot of project: ${project.name}`}
							loading="lazy"
						/>
					</div>
				{/if}
			</div>
		</article>
	{/each}
</section>
