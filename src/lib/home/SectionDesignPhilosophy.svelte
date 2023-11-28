<section class="section-container">
	<div class="content">
		<div class="section__left">
			<h2>My Design Philosphy</h2>
			<p>
				In this busy world, we tend to overlook how important it is to keep things simple. My
				approach in creating websites and infographics is to deliver essential information in an
				easy-to-digest manner.
			</p>
			<p>
				I make a conscious effort to create website navigations that are intuitive and accessible.
				Accessibility is a necessity, not an afterthought.
			</p>
		</div>
		<div class="section__right">
			<img src="/images/golden-ratio.svg" alt="Golden Ratio" width="480" height="297" />
		</div>
	</div>
</section>

<style>
	.section-container {
		width: 100%;
		max-width: min(var(--content-max-width), 100%);
		margin: 0 auto;
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
	@media screen and (max-width: 64em) {
		.section-container .content {
			max-width: 100%;
		}
	}
	@media screen and (max-width: 48em) {
		.section-container .content {
			flex-direction: column-reverse;
			align-items: flex-start;
			padding: 3.25rem var(--padding-horizontal);
			width: 100%;
			max-width: 100%;
		}
	}

	.section__left {
		width: 50%;
		max-width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		/* background-color: var(--clr-primary); */
	}
	.section__left p {
		margin-bottom: 1rem;
		max-width: min(100%, 40ch);
	}
	@media screen and (max-width: 48em) {
		.section__left p {
			max-width: 100%;
		}
	}
	.section__right {
		width: 50%;
		max-width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
		/* background-color: var(--clr-grey-1); */
		padding: 0;
	}
	@media screen and (max-width: 48em) {
		.section__left,
		.section__right {
			width: 100%;
			max-width: 100%;
		}
		.section__right {
			align-items: center;
			margin-bottom: 3.25rem;
		}
	}

	.section__right img {
		max-width: 65%;
		object-fit: contain;
		object-position: center;
		filter: brightness(0) var(--filter-clr-primary);
		/* border: 2px solid var(--clr-primary); */
	}
	[data-theme='dark'] .section__right img {
		filter: brightness(0) var(--filter-clr-secondary-shade-b);
	}
	@media screen and (max-width: 64em) {
		.section__right img {
			width: 80%;
			max-width: 80%;
			max-height: 12.5rem;
		}
	}

	.section__left h2 {
		color: var(--clr-primary);
		margin-bottom: 1.5rem;
		font-size: var(--type-scale-3);
	}
	[data-theme='dark'] .section__left h2 {
		color: #fff;
	}
	.section__left p {
		color: var(--clr-grey-6);
	}
	[data-theme='dark'] .section__left p {
		color: var(--clr-grey-1);
	}
</style>
