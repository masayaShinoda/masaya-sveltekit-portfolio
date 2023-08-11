<script>
	const technologies_icons = [
		{
			categ: 'Web Technologies',
			icons: [
				{
					fileName: 'html-css.svg',
					width: '62',
					height: '40'
				},
				{
					fileName: 'javascript.svg',
					width: '40',
					height: '40'
				},
				{
					fileName: 'nextjs.svg',
					width: '66',
					height: '40'
				},
				{
					fileName: 'react.svg',
					width: '40',
					height: '40'
				},
				{
					fileName: 'svelte.svg',
					width: '128',
					height: '32'
				},
				{
					fileName: 'django.svg',
					width: '92',
					height: '32'
				}
			]
		},
		{
			categ: 'UI Design',
			icons: [
				{
					fileName: 'figma.svg',
					width: '40',
					height: '40'
				},
				{
					fileName: 'adobe-xd.svg',
					width: '40',
					height: '40'
				}
			]
		},
		{
			categ: 'Graphic Design',
			icons: [
				{
					fileName: 'adobe-illustrator.svg',
					width: '40',
					height: '40'
				},
				{
					fileName: 'adobe-photoshop.svg',
					width: '40',
					height: '40'
				}
			]
		}
	];
</script>

<section class="content_section_2_container">
	<div class="content">
		<h3>Skillset</h3>
		<p>
			I'm constantly learning different technologies and software to complete projects efficiently.
		</p>
		<div class="technology_icons_container">
			{#each technologies_icons as { categ, icons }}
				<div class="box">
					<h4>{categ}</h4>
					<div>
						{#each icons as icon}
							<img
								src={`/images/${icon.fileName}`}
								alt={icon.fileName.slice(0, icon.fileName.length - 4).replace('-', ' ')}
								title={icon.fileName.slice(0, icon.fileName.length - 4).replace('-', ' ')}
								width={icon.width}
								height={icon.height}
							/>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	@import './ContentSection2.module.css';
</style>
