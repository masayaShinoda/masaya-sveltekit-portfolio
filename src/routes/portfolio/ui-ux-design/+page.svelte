<script lang="ts">
	// import BackToTop from '$lib/components/BackToTop.svelte';
	import data from './data';
	import { tool_logos as tool_logos_arr } from '$lib/components/tool-logos';
	// import styles from '$lib/web-development/WebDevelopment.module.css';

	let tool_logos = tool_logos_arr;
	let projects = data.projects;
</script>

<svelte:head>
	<title>Web Development Portfolio | Masaya Shida</title>
</svelte:head>
<header class="mb-20 flex flex-col items-start px-4 md:mb-10 md:items-center">
	<img
		src="/images/icon-code.svg"
		width="40"
		height="40"
		style="filter: brightness(0) saturate(0) var(--filter-clr-primary);"
		alt="Web development icon"
		class="mb-4 max-h-8 max-w-8 dark:hidden md:max-h-10 md:max-w-10"
	/>
	<img
		src="/images/icon-explorer.svg"
		width="40"
		height="40"
		style="filter: brightness(0) saturate(0) var(--filter-clr-secondary-shade-b);"
		alt="Web development icon"
		class="mb-4 hidden max-h-8 max-w-8 dark:block md:max-h-10 md:max-w-10"
	/>
	<h1
		class="mb-4 text-scale-2 text-primary dark:text-secondary-shade-b md:text-center md:text-scale-4"
	>
		UI/UX Design Portfolio
	</h1>
	<p class="max-w-[720px] text-scale-0 text-grey-5 md:text-center">
		My approach to UI/UX design focuses on creating intuitive experiences that meet users' needs,
		allowing them to achieve their goals quickly. Through research, prototyping, and user testing, I
		strive to bridge the gap between users' goals and digital solutions.
	</p>
</header>
<section class="mx-auto flex w-full max-w-content-max flex-col gap-y-20 p-4 md:gap-y-10 md:p-10">
	{#each projects as project}
		<div class="flex w-full flex-col gap-6 md:grid md:grid-cols-7 md:gap-x-12 md:p-8" itemscope>
			<div
				class="col-span-3 flex items-center justify-center rounded-lg p-6"
				style="background: linear-gradient(106.93deg, rgba(255, 255, 255, 0.05) 0%, rgba(0, 119, 204, 0.05) 100%);"
			>
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
					<p class="-text-scale-1 text-grey-5">Duration: {project.duration}</p>
					<h2 class="text-scale-2 leading-snug text-primary dark:text-grey-6 md:text-scale-3">
						{project.name}
					</h2>
				</header>
				<section>
					<h3 class="mb-1 text-scale-1 text-grey-6">Tools</h3>
					{#if project.tools}
						<ul class="flex items-center gap-4">
							{#each project.tools as tool}
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
					<h3 class="mb-1 text-scale-1 text-grey-6">Overview</h3>
					<p class="text-scale-0 text-grey-5">{project.overview}</p>
				</section>
				{#if project.responsibilities}
					<section>
						<h3 class="mb-1 text-scale-1 text-grey-6">Responsibilities</h3>
						<p class="text-scale-0 text-grey-5">{project.responsibilities}</p>
					</section>
				{/if}
				<a
					href={project.link}
					class="w-full rounded-full border border-secondary bg-gradient-secondary p-4 text-center text-scale-0 text-grey-1 shadow-convex transition-all hover:brightness-105 active:translate-y-px dark:text-grey-6 md:w-auto"
				>
					Go to design
				</a>
			</div>
		</div>
	{/each}
</section>
