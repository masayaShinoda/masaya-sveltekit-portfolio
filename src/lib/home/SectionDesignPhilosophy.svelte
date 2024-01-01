<section class="section-container">
	<div class="content">
		<div class="section__left">
			<h2>Design Philosphy</h2>
			<p>
				In this busy world, we tend to overlook how important it is to keep things simple. My
				approach in creating websites and infographics is to deliver essential information in an
				easy-to-digest manner.
			</p>
			<p>
				I make a conscious effort to create websites that are intuitive and accessible.
				Accessibility is a necessity, not an afterthought.
			</p>
		</div>
		<div class="section__right">
			<img src="/images/golden-ratio.svg" alt="Golden Ratio" width="387" height="240" />
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
			flex-direction: column-reverse;
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
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: var(--clr-grey-1);
		padding: 2rem;
		border-radius: 2rem;
		box-shadow: var(--shadow-flat);
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
			max-width: 20em;
		}
	}

	.section__right img {
		width: 100%;
		max-width: 100%;
		object-fit: contain;
		object-position: center;
		filter: brightness(0) var(--filter-clr-primary);
		margin: auto;
		height: fit-content;
		/* border: 2px solid var(--clr-primary); */
	}
	[data-theme='dark'] .section__right img {
		filter: brightness(0) var(--filter-clr-secondary-shade-b);
	}
</style>
