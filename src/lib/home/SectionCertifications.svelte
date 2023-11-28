<script lang="ts">
	import styles from './ContentSection4.module.css';

	let certificates = [
		{
			title: "Certificate from CS50's Web Development with Python and JavaScript course.",
			url: 'https://cs50.harvard.edu/certificates/2492c4fe-14ce-4c45-ba99-9406f584f1e4',
			img: '/images/certif/CS50W_result.jpg'
		},
		{
			title: "Certificate from freeCodeCamp's Responsive Web Design course.",
			url: 'https://www.freecodecamp.org/certification/masaya-shida/responsive-web-design',
			img: '/images/certif/fcc-certif-responsive-web-design-cropped_result.jpg'
		},
		{
			title: 'EF SET English Certificate 82/100 (C2 Proficient)',
			url: 'https://www.efset.org/cert/mxHsCK',
			img: '/images/certif/EF-SET-Certificate-01_result.jpg'
		}
	];
</script>

<section id="certifications" class={styles.content_section_4_container}>
	<div class={styles.content}>
		<h2>Certifications</h2>
		<div class={styles.certif_grid}>
			{#each certificates as certificate}
				<div class={styles.certif_item}>
					<a href={certificate.url}>
						<img
							src={certificate.img}
							alt={certificate.title}
							title={certificate.title}
							width="423"
							height="300"
							loading="lazy"
						/>
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>
