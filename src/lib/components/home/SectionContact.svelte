<script lang="ts">
	let contact_links = [
		{
			name: 'Email',
			href: 'mailto:masayashida@gmail.com',
			icon: 'gmail.svg'
		},
		{
			name: 'Github',
			href: 'https://github.com/masayaShinoda/',
			icon: 'github.svg'
		},
		{
			name: 'Telegram',
			href: 'https://t.me/shinoda17',
			icon: 'telegram.svg'
		}
	];
</script>

<section
	class="max-w-content-max p-horizontal md:bg-gradient-card mx-auto my-24 flex flex-col items-center justify-between gap-6 rounded-xl md:my-32 md:mb-0 md:flex-row md:rounded-4xl"
>
	<div class="flex flex-col items-start md:mb-0 md:max-w-[360px]">
		<h2 class="text-scale-3 text-primary dark:text-secondary-shade-b mb-4">Get in Touch</h2>
		<p class="text-scale-0 text-grey-5 mb-8">
			Thank you for visiting my page. Feel free to reach out to me if you wish to build something
			together, or if you have any inquiries.
		</p>
		<!-- <a
			href="#"
			class="mr-2 w-full rounded-full border border-secondary bg-gradient-secondary p-4 text-center text-scale-0 text-grey-1 shadow-convex transition-all hover:brightness-105 active:translate-y-px dark:text-grey-6 md:w-auto"
		>
			Get a quote
		</a> -->
	</div>
	<div class="grid w-full grid-cols-3 items-center justify-center gap-2 sm:flex md:justify-end">
		{#each contact_links as link (link.href)}
			<a
				href={link.href}
				class="border-grey-2 bg-gradient-neutral text-scale-0 text-primary shadow-convex dark:text-grey-6 flex w-full items-center justify-center rounded-full border p-4 text-center transition-all hover:brightness-105 active:translate-y-px md:w-auto"
			>
				<img
					src={`/images/social/${link.icon}`}
					alt={`{link.name} icon`}
					width={32}
					height={32}
					class="mr-2 max-h-5 max-w-5 sm:max-h-8 sm:max-w-8"
				/>
				{link.name}
			</a>
		{/each}
	</div>
</section>
