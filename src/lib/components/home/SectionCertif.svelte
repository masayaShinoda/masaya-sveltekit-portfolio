<script lang="ts">
	let certifs = [
		{
			name: 'EF SET English Certificate (C2)',
			url: 'https://www.efset.org/cert/mxHsCK',
			completed: 'Aug 2023',
			fileName: 'EF-SET-Certificate-01_result.jpg'
		},
		{
			name: 'Harvard CS50 Web Programming with Python and JavaScript',
			url: 'https://certificates.cs50.io/2492c4fe-14ce-4c45-ba99-9406f584f1e4.pdf?size=letter',
			completed: 'May 2023',
			fileName: 'CS50W_result.jpg'
		},
		{
			name: "freeCodeCamp's Responsive Web Design",
			url: 'https://www.freecodecamp.org/certification/masaya-shida/responsive-web-design/',
			completed: 'Dec 2021',
			fileName: 'fcc-certif-responsive-web-design-cropped_result.jpg'
		}
	];
</script>

<section class="max-w-content-max px-horizontal mx-auto my-24 flex flex-col md:my-32">
	<h2 class="text-scale-3 text-primary dark:text-secondary-shade-b mb-4">Certifications</h2>
	<div class="grid w-full gap-8 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-4 lg:gap-9">
		{#each certifs as certif (certif.url)}
			<a href={certif.url} class="group grid grid-cols-2 gap-2 sm:flex sm:flex-col">
				<div
					class="bg-grey-1 sm:shadow-flat mb-2 flex w-full rounded-xl p-0 shadow-none transition-all sm:p-2"
				>
					<img
						src={`/images/certif/${certif.fileName}`}
						alt={certif.name}
						width="336"
						height="242"
						class="w-full overflow-clip rounded-lg object-contain object-center"
					/>
				</div>
				<div class="w-full py-4 sm:py-0">
					<h3
						class="text-scale-0 group-hover:text-secondary dark:group-hover:text-secondary-shade-b mx-2 mb-1 underline group-hover:underline"
					>
						{certif.name}
					</h3>
					<p class="text-grey-5 mx-2">{certif.completed}</p>
				</div>
			</a>
		{/each}
	</div>
</section>
