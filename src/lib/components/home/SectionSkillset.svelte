<script lang="ts">
	import { tool_logos as tool_logos_arr } from '$lib/components/tool-logos';

	let tool_logos = tool_logos_arr;

	let tech_stack = {
		web_development: ['HTML', 'CSS', 'JavaScript', 'Python', 'React', 'Svelte', 'Django'],
		ui_design: ['Figma', 'Adobe XD'],
		graphic_design: ['Adobe Illustrator', 'Adobe Photoshop']
	};

	// console.log(tool_logos.filter(logo => logo.name === "HTML")[0]['fileName'])
</script>

<section
	class="mx-auto my-32 flex max-w-content-max flex-col justify-between gap-6 px-horizontal md:flex-row"
>
	<div class="mb-4 flex md:max-w-[360px] flex-col items-start md:mb-0">
		<h2 class="mb-4 text-scale-3 text-primary dark:text-secondary-shade-b">Skill Set</h2>
		<p class="mb-4 text-scale-0 text-grey-5">
			I'm always learning different technologies and software to complete projects efficiently.
		</p>
		<p class="mb-4 text-scale-0 text-grey-5">
			I can help turn project ideas into reality, from wireframing and design to coding a functional
			web app.
		</p>
	</div>
	<div class="flex gap-4 sm:justify-end sm:gap-12">
		<div class="flex w-full flex-col items-start">
			<h3 class="mb-4 text-scale-0 text-grey-6 sm:text-scale-1">Web Development</h3>
			<ul>
				{#each tech_stack.web_development as tool}
					<li class="mb-4 flex items-center">
						<img
							src={`/images/tech-stack-logos/${tool_logos.find((logo) => logo.name === tool)?.fileName}`}
							alt={tool}
							width="24"
							height="24"
							title={tool}
							class="mr-2 max-h-6 max-w-6 object-contain object-center"
						/>
						<span class="text-scale-0 text-grey-5">{tool}</span>
					</li>
				{/each}
			</ul>
		</div>
		<div class="flex w-full flex-col items-start gap-8">
			<div class="flex w-full flex-col items-start">
				<h3 class="mb-4 text-scale-0 text-grey-6 sm:text-scale-1">UI/UX Design</h3>
				<ul>
					{#each tech_stack.ui_design as tool}
						<li class="mb-4 flex items-center">
							<img
								src={`/images/tech-stack-logos/${tool_logos.find((logo) => logo.name === tool)?.fileName}`}
								alt={tool}
								width="24"
								height="24"
								title={tool}
								class="mr-2 max-h-6 max-w-6 object-contain object-center"
							/>
							<span class="text-scale-0 text-grey-5">{tool}</span>
						</li>
					{/each}
				</ul>
			</div>
			<div class="flex w-full flex-col items-start">
				<h3 class="mb-4 text-scale-0 text-grey-6 sm:text-scale-1">Graphic Design</h3>
				<ul>
					{#each tech_stack.graphic_design as tool}
						<li class="mb-4 flex items-center">
							<img
								src={`/images/tech-stack-logos/${tool_logos.find((logo) => logo.name === tool)?.fileName}`}
								alt={tool}
								width="24"
								height="24"
								title={tool}
								class="mr-2 max-h-6 max-w-6 object-contain object-center"
							/>
							<span class="text-scale-0 text-grey-5">{tool}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>
