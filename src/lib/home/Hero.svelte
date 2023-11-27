<section class="hero-container">
	<div class="hero-content">
		<span>
			<h1>
				<span class="subtitle"> Hi, I'm Masaya! </span>
				<span class="title"
					>Cambodia-based developer & designer passionate about digital literacy.</span
				>
			</h1>
			<div class="hero-actions">
				<a href="#portfolio" class="btn-main">Get a quote</a>
				<a href="#portfolio" class="btn-main btn-main__bg-mono">See my projects</a>
			</div>
		</span>
		<!-- <img src="/images/shinjang.png" alt="Hero" width="200" height="400" style="object-fit: contain" /> -->
		<img
			src="/images/g14-shadow_result.png"
			alt="ASUS G14 laptop, decorative."
			width="330"
			height="220"
		/>
	</div>
</section>

<style>
	.hero-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 5rem 0;

		width: 100%;
		max-width: 100%;
	}

	.hero-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: var(--content-max-width);
		margin: 0 auto;
		padding: 0 var(--padding-horizontal);
	}

	@media screen and (max-width: 48em) {
		.hero-container {
			padding: 3.25rem 0;
			/* outline: 1px solid red; */
		}

		.hero-content {
			flex-direction: column-reverse;
			align-items: flex-start;
			width: 100%;
			max-width: 100%;
			padding: 0;
			/* outline: 1px solid red; */
		}
	}

	.hero-content > span {
		max-width: min(32rem, 50%);
	}

	.hero-content > span h1 {
		margin-bottom: 2rem;
	}

	.hero-content > span .hero-actions {
		display: flex;
	}
	@media screen and (max-width: 40em) {
		.hero-content > span .hero-actions {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: .5rem;
		}
	}

	.hero-content > span .hero-actions .btn-main:not(:last-of-type) {
		margin-right: 1rem;
	}
	@media screen and (max-width: 40em) {
		.hero-content > span .hero-actions .btn-main:not(:last-of-type) {
			margin-right: unset;
		}
	}
	

	.hero-content > img {
		max-width: 45%;
		object-fit: contain;
	}

	@media screen and (max-width: 64em) {
		.hero-content > img {
			max-width: 35%;
		}
	}

	@media screen and (max-width: 48em) {
		.hero-content > span {
			max-width: 100%;
			padding: 0 var(--padding-horizontal);
		}
		.hero-content > img {
			max-width: 50%;
		}
	}

	@media screen and (max-width: 48em) {
		.hero-content > img {
			margin: 0 auto 1rem auto;
			max-height: 8.75rem;
		}
	}

	.subtitle,
	.title {
		display: inline-block;
	}

	.subtitle {
		font-size: var(--type-scale-1);
		color: var(--clr-grey-5);
		margin-bottom: 0.5rem;
	}

	[data-theme='dark'] .hero-content .subtitle {
		color: var(--clr-grey-2);
	}

	.title {
		font-size: var(--type-scale-4);
		color: var(--clr-primary);
		line-height: 1.6;
	}
	[data-theme='dark'] .hero-content .title {
		color: var(--clr-grey-1);
	}

	@media screen and (max-width: 64em) {
		.title {
			font-size: var(--type-scale-3);
		}
		.subtitle {
			font-size: var(--type-scale-0);
		}
	}
</style>
