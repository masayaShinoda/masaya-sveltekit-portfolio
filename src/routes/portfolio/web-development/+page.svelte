<script lang="ts">
	// import BackToTop from '$lib/components/BackToTop.svelte';
	import data from './data';
	import { tool_logos as tool_logos_arr } from '$lib/components/tool-logos';
	import { formatCompletedDate } from '$lib';

	let tool_logos = tool_logos_arr;
	let projects = data.projects;
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
<section class="max-w-content-max mx-auto flex w-full flex-col gap-y-20 p-4 md:gap-y-10 md:p-10">
	{#each projects as project (project.id)}
		<div class="flex w-full flex-col gap-6 md:grid md:grid-cols-7 md:gap-x-12 md:p-8" itemscope>
			<div class="bg-gradient-card col-span-3 flex items-center justify-center rounded-lg p-6">
				<img
					src={project.image}
					width="312"
					height="176"
					class="object-contain object-center"
					alt={`Screenshot of project: ${project.name}`}
					loading="lazy"
				/>
			</div>
			<div class="col-span-4 flex flex-col items-start gap-6">
				<header>
					<p class="text-scale-0 text-grey-5">Industry: {project.industry}</p>
					<h2 class="text-scale-2 text-primary dark:text-grey-6 md:text-scale-3 leading-snug">
						{project.name}
					</h2>
					<p class="text-scale-0 text-grey-5">
						{project.duration} · Completed {formatCompletedDate(project.completedDate)}
					</p>
				</header>
				<section>
					<h3 class="text-scale-1 text-grey-6 mb-1">Tools</h3>
					{#if project.tools}
						<ul class="flex items-center gap-4">
							{#each project.tools as tool (tool)}
								<li class="flex items-center gap-x-2">
									{#if tool_logos.find((logo) => logo.name === tool)}
										<img
											src={`/images/tech-stack-logos/${tool_logos.find((logo) => logo.name === tool)?.fileName}`}
											width="24"
											height="24"
											class="object-scale-down object-center"
											alt={`${tool} icon`}
										/>
									{/if}
									<p class="text-scale-0 text-grey-5">{tool}</p>
								</li>
							{/each}
						</ul>
					{/if}
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
				<a
					href={project.link}
					class="border-secondary bg-gradient-secondary text-scale-0 text-grey-1 shadow-convex dark:text-grey-6 w-full rounded-full border p-4 text-center transition-all hover:brightness-105 active:translate-y-px md:w-auto"
				>
					See live demo
				</a>
			</div>
		</div>
	{/each}
</section>
