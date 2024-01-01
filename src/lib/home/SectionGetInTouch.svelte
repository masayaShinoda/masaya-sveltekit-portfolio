<script lang="ts">
	let contact_links = [
		{
			title: 'Email',
			url: 'mailto:masayashida@gmail.com',
			iconName: 'gmail'
		},
		{
			title: 'Github',
			url: 'https://github.com/masayaShinoda',
			iconName: 'github'
		},
		{
			title: 'Telegram',
			url: 'https://t.me/shinoda17',
			iconName: 'telegram'
		}
	];
</script>

<section class="section-container">
	<div class="content">
		<div class="section__left">
			<h2>Get in touch</h2>
			<p>
				Thank you for visiting my page. Feel free to reach out to me if you wish to build something
				together, or if you have any inquiries.
			</p>
			<button class="btn-main">Get a quote</button>
		</div>
		<div class="section__right">
			<ul>
				{#each contact_links as item}
					<li>
						<a href={item.url} class="btn-main btn-main__bg-mono">
							<img
								src={`/images/social-icons/${item.iconName}.svg`}
								alt={`${item.iconName} icon`}
								width={20}
								height={20}
							/>
							{item.title}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style>
	.section-container {
		width: 100%;
		max-width: min(var(--content-max-width), 100%);
		margin: 0 auto;
		padding: 5rem 0;
	}
	.section-container .content {
		width: 100%;
		max-width: 100%;

		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 auto;
		padding: 5rem var(--padding-horizontal);
		/* padding: 5rem 0; */
		/* outline: 1px solid red; */
	}
	@media screen and (max-width: 48em) {
		.section-container {
			padding: 2.5rem var(--padding-horizontal);
		}
		.section-container .content {
			flex-direction: column;
			align-items: flex-start;
			padding: 0;
			max-width: min(32em, 100%);
		}
	}

	.section__left {
		max-width: 40%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		/* background-color: var(--clr-primary); */
	}
	.section__left h2 {
		color: var(--clr-primary);
		margin-bottom: 1rem;
		font-size: var(--type-scale-3);
	}
	[data-theme='dark'] .section__left h2 {
		color: var(--clr-secondary-shade-b);
	}
	.section__left p {
		max-width: min(100%, 40ch);
		color: var(--clr-grey-5);
		margin-bottom: 2rem;
	}
	[data-theme='dark'] .section__left p {
		color: var(--clr-grey-2);
	}
	@media screen and (max-width: 48em) {
		.section__left p {
			max-width: 100%;
		}
	}
	.section__right {
		max-width: 45%;
	}
	[data-theme='dark'] .content .section__right {
		background-color: var(--clr-grey-6);
	}

	@media screen and (max-width: 48em) {
		.section__left,
		.section__right {
			width: 100%;
			max-width: 100%;
		}
		.section__right {
			margin-bottom: 3.25rem;
			padding: 0;
			background: none;
			box-shadow: none;
			max-width: 100%;
		}
	}

	.section__right ul {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	.section__right ul li {
		margin-left: 1rem;
	}
	@media screen and (max-width: 48em) {
		.section__right ul {
			justify-content: space-evenly;
			flex-wrap: wrap;
			max-width: 100%;
			margin-top: 2.5rem;
			gap: 1rem;
		}
		.section__right ul li {
			margin-left: unset;
			flex-grow: 1;
		}
	}
</style>
