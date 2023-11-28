<section class="section-container">
	<div class="section-content">
		<div class="section-content__left">
			<div>
				<h2>Courses (Khmer)</h2>
				<p>
					I am working on creating online courses spoken in Khmer that are introductions to useful
					skills in the digital sector.
				</p>
			</div>
			<div class="section-content__left-actions">
				<a href="#" class="btn-main">YouTube channel</a>
				<a href="#" class="btn-main btn-main__bg-mono">Go to courses page</a>
			</div>
		</div>
		<div class="section-content__right">
			<img
				src="images/thumbnail-intro-figma.png"
				alt="Thumbnail for introduction to Figma video course"
				width="384"
				height="216"
			/>
		</div>
	</div>
</section>

<style>
	.section-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 5rem 0;
		width: 100%;
		max-width: 100%;
	}
	.section-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		max-width: var(--content-max-width);
		margin: 0 auto;
		padding: var(--padding-horizontal);
		border-radius: 2rem;
		background: linear-gradient(107deg, rgba(255, 255, 255, 0.05) 0%, rgba(0, 119, 204, 0.05) 100%);
	}

	@media screen and (max-width: 40em) {
		.section-container {
			padding: 3.25rem 0;
		}
		.section-content {
			background: unset;
			flex-direction: column-reverse;
			align-items: flex-start;
			width: 100%;
			max-width: 100%;
		}
	}

	.section-content__left {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		max-width: min(23.75rem, 100%);
	}
	@media screen and (max-width: 40em) {
		.section-content__left {
			margin: 2.5rem 0;
		}
	}

	.section-content__left h2 {
		font-size: var(--type-scale-3);
		color: var(--clr-primary);
		margin-bottom: 1rem;
	}
	[data-theme='dark'] .section-content__left h2 {
		color: var(--clr-secondary-shade-b);
	}
	.section-content__left p {
		color: var(--clr-grey-5);
		margin-bottom: 2rem;
	}
	[data-theme='dark'] .section-content__left p {
		color: var(--clr-grey-2);
	}

	.section-content__left-actions {
		display: flex;
        width: 100%;
	}
	@media screen and (max-width: 40em) {
		.section-content__left-actions {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 0.5rem;
		}
	}
	.section-content__left-actions .btn-main:not(:last-of-type) {
		margin-right: 1rem;
	}
	@media screen and (max-width: 40em) {
		.section-content__left-actions .btn-main:not(:last-of-type) {
			margin-right: unset;
		}
	}

	.section-content .section-content__right {
		background-color: var(--clr-grey-1);
		padding: 1.5rem;
		border-radius: 1rem;
		max-width: 27rem;
		box-shadow: var(--shadow-flat);
	}
	[data-theme='dark'] .section-content .section-content__right {
		background-color: var(--clr-grey-5);
	}
	@media screen and (max-width: 40em) {
		.section-content .section-content__right {
			max-width: 100%;
			margin: 0 auto;
			/* aspect-ratio: 16 / 9; */
		}
	}
	.section-content__right img {
		position: relative;
		border-radius: 0.5rem;
		object-position: center;
		object-fit: contain;
		width: 100%;
		height: 100%;
	}
</style>
