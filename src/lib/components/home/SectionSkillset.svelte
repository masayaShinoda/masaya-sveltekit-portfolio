<script lang="ts">
    import type { Technology } from "$lib/types";
	import { tool_logos as tool_logos_arr } from '$lib/components/tool-logos';

	type TechStack = Array<{
		category: string;
		tools: Array<Technology>;
	}>;

	let tech_stack: TechStack = [
		{
			category: 'Web Development',
			tools: ['HTML & CSS', 'JavaScript', 'React', 'Svelte', 'Django']
		},
		{
			category: 'UI Design',
			tools: ['Figma', 'Adobe XD']
		},
		{
			category: 'Graphic Design',
			tools: ['Adobe Illustrator', 'Adobe Photoshop']
		}
	];
</script>
