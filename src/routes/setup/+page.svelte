<script lang="ts">
	type SpecRow = { label: string; desktop: string; laptop: string };

	// When desktop and laptop share a value, the row renders as a single
	// cell spanning both columns instead of repeating the value twice.
	const specs: SpecRow[] = [
		{ label: 'CPU', desktop: 'AMD Ryzen 7 4750G', laptop: '11th Gen Intel Core i7-1185G7' },
		{
			label: 'GPU',
			desktop: 'AMD Radeon RX 6700 XT',
			laptop: 'Intel Iris Xe Graphics'
		},
		{
			label: 'OS',
			desktop: 'Fedora Linux, x86_64',
			laptop: 'Fedora Linux, x86_64'
		},
		{ label: 'Desktop Environment', desktop: 'GNOME', laptop: 'GNOME' },
		{ label: 'Shell', desktop: 'bash', laptop: 'bash' },

		{ label: 'Coding Setup', desktop: 'tmux, Neovim, Alacritty', laptop: 'tmux, Neovim, Alacritty' }
	];

	type Segment = { t: string; c?: string };
	type Line = Segment[];

	const c1 = 'text-secondary dark:text-secondary-shade-b';
	const c2 = 'text-primary dark:text-grey-6';
	const str = 'text-secondary dark:text-secondary-shade-b';

	// Fedora logo, sourced from fastfetch's ascii logo pack (src/logo/ascii/f/fedora.txt).
	const fedora_ascii: Line[] = [
		[{ t: "             .',;::::;,'.", c: c1 }],
		[{ t: "         .';:cccccccccccc:;,.", c: c1 }],
		[{ t: '      .;cccccccccccccccccccccc;.', c: c1 }],
		[{ t: '    .:cccccccccccccccccccccccccc:.', c: c1 }],
		[
			{ t: '  .;ccccccccccccc;', c: c1 },
			{ t: '.:dddl:.', c: c2 },
			{ t: ';ccccccc;.', c: c1 }
		],
		[
			{ t: ' .:ccccccccccccc;', c: c1 },
			{ t: 'OWMKOOXMWd', c: c2 },
			{ t: ';ccccccc:.', c: c1 }
		],
		[
			{ t: '.:ccccccccccccc;', c: c1 },
			{ t: 'KMMc', c: c2 },
			{ t: ';cc;', c: c1 },
			{ t: 'xMMc', c: c2 },
			{ t: ';ccccccc:.', c: c1 }
		],
		[
			{ t: ',cccccccccccccc;', c: c1 },
			{ t: 'MMM.', c: c2 },
			{ t: ';cc;', c: c1 },
			{ t: ';WW:', c: c2 },
			{ t: ';cccccccc,', c: c1 }
		],
		[
			{ t: ':cccccccccccccc;', c: c1 },
			{ t: 'MMM.', c: c2 },
			{ t: ';cccccccccccccccc:', c: c1 }
		],
		[
			{ t: ':ccccccc;', c: c1 },
			{ t: 'oxOOOo', c: c2 },
			{ t: ';', c: c1 },
			{ t: 'MMM000k.', c: c2 },
			{ t: ';cccccccccccc:', c: c1 }
		],
		[
			{ t: 'cccccc;', c: c1 },
			{ t: '0MMKxdd:', c: c2 },
			{ t: ';', c: c1 },
			{ t: 'MMMkddc.', c: c2 },
			{ t: ';cccccccccccc;', c: c1 }
		],
		[
			{ t: 'ccccc;', c: c1 },
			{ t: "XMO'", c: c2 },
			{ t: ';cccc;', c: c1 },
			{ t: 'MMM.', c: c2 },
			{ t: ";cccccccccccccccc'", c: c1 }
		],
		[
			{ t: 'ccccc;', c: c1 },
			{ t: 'MMo', c: c2 },
			{ t: ';ccccc;', c: c1 },
			{ t: 'MMW.', c: c2 },
			{ t: ';ccccccccccccccc;', c: c1 }
		],
		[
			{ t: 'ccccc;', c: c1 },
			{ t: '0MNc.', c: c2 },
			{ t: 'ccc', c: c1 },
			{ t: '.xMMd', c: c2 },
			{ t: ';ccccccccccccccc;', c: c1 }
		],
		[
			{ t: 'cccccc;', c: c1 },
			{ t: 'dNMWXXXWM0:', c: c2 },
			{ t: ';cccccccccccccc:,', c: c1 }
		],
		[
			{ t: 'cccccccc;', c: c1 },
			{ t: '.:odl:.', c: c2 },
			{ t: ';cccccccccccccc:,.', c: c1 }
		],
		[{ t: "ccccccccccccccccccccccccccccc:'.", c: c1 }],
		[{ t: ':ccccccccccccccccccccccc:;,..', c: c1 }],
		[{ t: " ':cccccccccccccccc::;,.", c: c1 }]
	];

	const chadrc_lua: Line[] = [
		[{ t: 'M.base46 = {' }],
		[{ t: '  theme = ' }, { t: '"oxocarbon"', c: str }, { t: ',' }],
		[{ t: '}' }]
	];

	const tmux_conf: Line[] = [
		[{ t: 'set -g @plugin ' }, { t: "'iggredible/tmux-colorful'", c: str }],
		[
			{ t: 'set -g @tmux_colorful_color_scheme ' },
			{ t: "'https://coolors.co/fdc5f5-f7aef8-b388eb-8093f1-72ddf7'", c: str }
		]
	];

	const tmux_swatches = ['#fdc5f5', '#f7aef8', '#b388eb', '#8093f1', '#72ddf7'];

	const alacritty_toml: Line[] = [
		[{ t: '[window]' }],
		[{ t: 'opacity = ' }, { t: '0.90', c: str }],
		[{ t: 'blur = ' }, { t: 'true', c: str }],
		[{ t: '' }],
		[{ t: '[font]' }],
		[{ t: 'size = ' }, { t: '12.0', c: str }]
	];
</script>

{#snippet codeBlock(
	lines: Line[]
)}{#each lines as line, i (i)}{#each line as seg, j (j)}{#if seg.c}<span class={seg.c}>{seg.t}</span
				>{:else}{seg.t}{/if}{/each}{i < lines.length - 1 ? '\n' : ''}{/each}{/snippet}

{#snippet prompt(command: string)}<p
		class="text-scale-neg-1 text-grey-5 sm:text-scale-0 mb-4 font-mono"
	>
		<span class="text-secondary dark:text-secondary-shade-b">$</span>
		{command}
	</p>{/snippet}

<svelte:head>
	<title>My Setup | Masaya Shida</title>
	<meta name="description" content="My computer and terminal setup." />
</svelte:head>

<header
	class="max-w-content-max px-horizontal mx-auto mb-8 flex w-full flex-col items-start px-4 md:mb-12"
>
	<h1 class="text-scale-3 text-primary dark:text-secondary-shade-b md:text-scale-4">My Setup</h1>
</header>

<section class="max-w-content-max px-horizontal mx-auto mb-16 w-full md:mb-16">
	<h2 class="text-scale-2 text-primary dark:text-secondary-shade-b md:text-scale-2 mb-4">
		Machines
	</h2>
	<div class="bg-grey-1 bg-gradient-card w-full rounded-3xl p-6">
		{@render prompt('fastfetch')}
		<div class="flex w-full flex-col items-center gap-6 lg:flex-row lg:items-center lg:gap-10">
			<div
				class="border-grey-2 flex w-full justify-center pb-6 lg:w-auto lg:justify-start lg:pr-10 lg:pb-0"
			>
				<pre class="font-mono text-[10px] leading-[1.2] sm:text-[12px]">{@render codeBlock(
						fedora_ascii
					)}</pre>
			</div>
			<div class="w-full">
				<!-- Below md, two columns of data can't fit next to a label column without
				     cramping every value into a horizontal scroll, so each machine gets its
				     own stacked block instead of sharing the table. -->
				<div class="flex w-full flex-col gap-6 md:hidden">
					<div>
						<h3 class="text-scale-0 text-grey-6 sm:text-scale-1 mb-2">Desktop</h3>
						<dl class="flex flex-col">
							{#each specs as row (row.label)}
								<div
									class="border-grey-2 flex items-baseline justify-between gap-4 border-b py-2 last:border-0"
								>
									<dt class="text-scale-neg-1 text-grey-5 sm:text-scale-0">{row.label}</dt>
									<dd class="text-scale-neg-1 text-grey-6 sm:text-scale-0 text-right">
										{row.desktop}
									</dd>
								</div>
							{/each}
						</dl>
					</div>
					<div>
						<h3 class="text-scale-0 text-grey-6 sm:text-scale-1 mb-2">Laptop</h3>
						<dl class="flex flex-col">
							{#each specs as row (row.label)}
								<div
									class="border-grey-2 flex items-baseline justify-between gap-4 border-b py-2 last:border-0"
								>
									<dt class="text-scale-neg-1 text-grey-5 sm:text-scale-0">{row.label}</dt>
									<dd class="text-scale-neg-1 text-grey-6 sm:text-scale-0 text-right">
										{row.laptop}
									</dd>
								</div>
							{/each}
						</dl>
					</div>
				</div>
				<div class="hidden w-full overflow-x-auto md:block">
					<table class="w-full border-collapse">
						<thead>
							<tr>
								<th class="w-0"></th>
								<th
									scope="col"
									class="text-scale-0 text-grey-6 sm:text-scale-1 px-4 py-3 text-left font-normal whitespace-nowrap"
								>
									Desktop
								</th>
								<th
									scope="col"
									class="text-scale-0 text-grey-6 sm:text-scale-1 py-3 pl-4 text-left font-normal whitespace-nowrap"
								>
									Laptop
								</th>
							</tr>
						</thead>
						<tbody>
							{#each specs as row (row.label)}
								<tr class="border-grey-2 border-b last:border-0">
									<th
										scope="row"
										class="text-scale-0 text-grey-5 py-3 pr-4 text-left font-normal whitespace-nowrap"
									>
										{row.label}
									</th>
									{#if row.desktop === row.laptop}
										<td colspan="2" class="text-scale-0 text-grey-6 px-4 py-3 text-center">
											{row.desktop}
										</td>
									{:else}
										<td class="text-scale-0 text-grey-6 px-4 py-3">{row.desktop}</td>
										<td class="text-scale-0 text-grey-6 py-3 pl-4">{row.laptop}</td>
									{/if}
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="max-w-content-max px-horizontal mx-auto mb-16 w-full md:mb-16">
	<h2 class="text-scale-2 text-primary dark:text-secondary-shade-b md:text-scale-2 mb-4">
		Configs
	</h2>
	<div class="flex w-full flex-col gap-6">
		<div class="bg-grey-1 bg-gradient-card w-full rounded-3xl p-6">
			<h3 class="text-scale-0 text-grey-6 sm:text-scale-1 mb-4">Neovim — NvChad</h3>
			<div class="flex flex-col gap-6 md:flex-row md:gap-10">
				<div class="border-grey-2 w-full pb-6 md:w-auto md:pr-10 md:pb-0">
					{@render prompt('bat chadrc.lua')}
					<div class="overflow-x-auto">
						<pre class="font-mono text-[11px] leading-[1.6] sm:text-[13px]">{@render codeBlock(
								chadrc_lua
							)}</pre>
					</div>
				</div>
			</div>
		</div>
		<div class="bg-grey-1 bg-gradient-card w-full rounded-3xl p-6">
			<h3 class="text-scale-0 text-grey-6 sm:text-scale-1 mb-4">tmux</h3>
			<div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
				<div>
					{@render prompt('bat .tmux.conf')}
					<div class="overflow-x-auto">
						<pre class="font-mono text-[11px] leading-[1.6] sm:text-[13px]">{@render codeBlock(
								tmux_conf
							)}</pre>
					</div>
				</div>
				<div class="flex gap-3 md:pl-10">
					{#each tmux_swatches as hex (hex)}
						<span class="border-grey-2 h-8 w-8 rounded-full border" style="background-color: {hex}"
						></span>
					{/each}
				</div>
			</div>
		</div>
		<div class="bg-grey-1 bg-gradient-card w-full rounded-3xl p-6">
			<h3 class="text-scale-0 text-grey-6 sm:text-scale-1 mb-4">Alacritty</h3>
			<div class="flex flex-col gap-6 md:flex-row md:gap-10">
				<div class="border-grey-2 w-full pb-6 md:w-auto md:pr-10 md:pb-0">
					{@render prompt('bat alacritty.toml')}
					<div class="overflow-x-auto">
						<pre class="font-mono text-[11px] leading-[1.6] sm:text-[13px]">{@render codeBlock(
								alacritty_toml
							)}</pre>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
