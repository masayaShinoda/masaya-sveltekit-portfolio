<script class="ts">
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
	class="mx-auto my-32 flex max-w-content-max flex-col items-center justify-between gap-6 rounded-xl p-horizontal md:mb-0 md:flex-row md:rounded-4xl"
>
	<div class="flex flex-col items-start md:mb-0 md:max-w-[360px]">
		<h2 class="mb-4 text-scale-3 text-primary dark:text-secondary-shade-b">Get in Touch</h2>
		<p class="mb-8 text-scale-0 text-grey-5">
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
	<div class="flex w-full items-center justify-center gap-2 md:justify-end">
		{#each contact_links as link}
			<a
				href={link.href}
				class="flex w-full items-center justify-center rounded-full border border-grey-2 bg-gradient-neutral p-4 text-center text-scale-0 text-primary shadow-convex transition-all hover:brightness-105 active:translate-y-px dark:text-grey-6 md:w-auto"
			>
				<img
					src={`/images/social/${link.icon}`}
					alt={`{link.name} icon`}
					width={32}
					height={32}
					class="mr-2"
				/>
				{link.name}
			</a>
		{/each}
	</div>
</section>
