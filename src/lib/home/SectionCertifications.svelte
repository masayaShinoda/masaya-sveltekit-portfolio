<script lang="ts">
	let certificates = [
		{
			title: "Certificate from CS50's Web Development with Python and JavaScript course.",
			url: 'https://cs50.harvard.edu/certificates/2492c4fe-14ce-4c45-ba99-9406f584f1e4',
			img: '/images/certif/exported/CS50W_result_result.jpg'
		},
		{
			title: "Certificate from freeCodeCamp's Responsive Web Design course.",
			url: 'https://www.freecodecamp.org/certification/masaya-shida/responsive-web-design',
			img: '/images/certif/exported/fcc-certif-responsive-web-design-cropped_result_result.jpg'
		},
		{
			title: 'EF SET English Certificate 82/100 (C2 Proficient)',
			url: 'https://www.efset.org/cert/mxHsCK',
			img: '/images/certif/exported/EF-SET-Certificate-01_result_result.jpg'
		}
	];
</script>

<section class="section-container">
	<div class="section-content">
		<h2>Certifications</h2>
		<div class="certifications">
			{#each certificates as certificate}
				<a href={certificate.url} class="certification-wrapper">
					<img
						src={certificate.img}
						alt={certificate.title}
						title={certificate.title}
						width="423"
						height="300"
						loading="lazy"
					/>
				</a>
			{/each}
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
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		max-width: var(--content-max-width);
		margin: 0 auto;
		padding: var(--padding-horizontal);
		border-radius: 2rem;
	}

	@media screen and (max-width: 48em) {
		.section-container {
			padding: 1.75rem var(--padding-horizontal);
		}
		.section-content {
			flex-direction: column;
			align-items: flex-start;
			width: 100%;
			max-width: min(32em, 100%);
			padding: 0;
		}
	}
	.section-content h2 {
		font-size: var(--type-scale-3);
		color: var(--clr-primary);
		margin-bottom: 1rem;
	}
	[data-theme='dark'] .section-content h2 {
		color: var(--clr-secondary-shade-b);
	}
	.certifications {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		max-width: 100%;
		gap: 2.25rem;
	}
	@media screen and (max-width: 64em) {
		.certifications {
			gap: 1.5rem;
		}
	}
	@media screen and (max-width: 48em) {
		.certifications {
			grid-template-columns: repeat(2, 1fr);
			gap: 1.5rem;
		}
	}
	
	@media screen and (max-width: 32em) {
		.certifications {
			grid-template-columns: 1fr;

		}
	}
	.certifications .certification-wrapper {
		padding: 0.5rem;
		border-radius: 0.5rem;
		background-color: var(--clr-grey-1);
		box-shadow: var(--shadow-flat);
	}
	.certification-wrapper > img {
		max-width: 100%;
		height: 100%;
		object-fit: contain;
		object-position: center;
	}
</style>
