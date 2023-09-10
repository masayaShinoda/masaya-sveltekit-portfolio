<section class="hero_container">
	<div class="hero_section">
		<div class="hero_content">
			<h1>វគ្គសិក្សាសរសេរកូដ<wbr />និងឌីស្សាញ</h1>
			<p>មេរៀនជាភាសាខ្មែរនិងមានការពន្យល់លម្អិត។</p>
			<div class="hero_links">
				<ul>
					<li>
						<a href="#">
							<img src="/images/icon-code.svg" alt="programming icon" width="48" height="48" />
							<span>សរសេរកូដ</span>
							<small>Programming</small>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="/images/icon-pen.svg" alt="programming icon" width="48" height="48" />
							<span>រចនាក្រាហ្វិក</span>
							<small>Graphic Design</small>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="/images/icon-explorer.svg" alt="programming icon" width="48" height="48" />
							<span>រចនាទម្រង់កម្មវិធី</span>
							<small>UI Design</small>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<style>
	.hero_container .hero_section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 33.75rem;
		background-color: rgba(255, 255, 255, 0.875);
		background-image: url('/images/bg-angkor_result.jpg');
		background-blend-mode: soft-light;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	[data-theme='dark'] .hero_container .hero_section {
		background-color: rgba(0, 0, 0, 0.875);
	}
	@media screen and (max-width: 48em) {
		.hero_container .hero_section {
			background: none;
			height: auto;
			margin-top: 3.5rem;
		}
		[data-theme='dark'] .hero_container .hero_section {
			background: none;
		}
	}

	.hero_content {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: auto;
		max-width: var(--content_max_width);
	}
	@media screen and (max-width: 48em) {
		.hero_content {
			width: 100%;
			padding: 0 1rem;
			align-items: flex-start;
		}
	}

	.hero_content h1 {
		text-align: center;
		color: var(--clr_primary);
		font-size: calc(var(--type_scale_6) * 1.25);
		line-height: 1.6;
		margin-bottom: 1rem;
		margin-top: -1rem; /* compensate for line height */
	}
	[data-theme='dark'] .hero_content h1 {
		color: #fff;
	}
	@media screen and (max-width: 48em) {
		.hero_content h1 {
			font-size: var(--type_scale_6);
			overflow-wrap: break-word;
			max-width: 100%;
			text-align: left;
			margin-top: 0;
			/* max-width: 100%; */
		}
	}
	.hero_content p {
		text-align: center;
		color: var(--clr_grey_shade_a);
		margin-bottom: 2.5rem;
	}
	[data-theme='dark'] .hero_content p {
		color: var(--clr_grey_shade_d);
	}
	@media screen and (max-width: 48em) {
		.hero_content p {
			text-align: left;
		}
	}
	@media screen and (max-width: 48em) {
		.hero_links {
			width: 100%;
			max-width: 100%;
		}
	}
	.hero_links ul {
		display: flex;
		align-items: center;
		justify-content: center;
		list-style-type: none;
	}
	@media screen and (max-width: 48em) {
		.hero_links ul {
			flex-direction: column;
			align-items: flex-start;
			width: 100%;
		}
		.hero_links ul li {
			width: 100%;
		}
	}
	.hero_links a {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-decoration: none;
		color: var(--clr_primary);
		padding: 1.5rem 1rem;
		width: 17.5rem;
		margin: 0 1rem;
		border-radius: 1rem;
		border: 1px solid var(--clr_grey_shade_d);
		transition: color 100ms ease-out;
	}
	.hero_links a:hover,
	.hero_links a:focus-visible {
		color: var(--clr_secondary);
	}
	[data-theme='dark'] .hero_links a:hover,
	[data-theme='dark'] .hero_links a:focus-visible {
		color: var(--clr_secondary_shade_a);
	}

	[data-theme='dark'] .hero_links a {
		color: #fff;
		border-color: var(--clr_grey_shade_a);
	}
	@media screen and (max-width: 64em) {
		.hero_links a {
			width: 30vw;
			margin: 0;
			border: none;
			/* outline: 1px solid red; */
		}
	}
	@media screen and (max-width: 48em) {
		.hero_links a {
			display: grid;
			align-items: center;
			justify-items: start;
			gap: 0 0.5rem;
			grid-template-columns: 1fr 9fr;
			grid-template-areas:
				'a b b'
				'a c c';
			width: 100%;
			max-width: 100%;
			padding: 1rem 0;
			border-radius: 0;
			border-bottom: 1px solid;
		}
	}
	.hero_links a > img {
		filter: var(--filter_clr_primary);
		margin-bottom: 1.5rem;
		object-fit: contain;
		transition: transform 200ms ease-out;
	}
	.hero_links a:hover > img,
	.hero_links a:focus-visible > img {
		transform: scale(1.125);
		filter: var(--filter_clr_secondary);
	}

	[data-theme='dark'] .hero_links a > img {
		filter: invert(1);
	}
	[data-theme='dark'] .hero_links a:hover > img,
	[data-theme='dark'] .hero_links a:focus-visible > img {
		filter: var(--filter_clr_secondary_shade_b);
	}

	@media screen and (max-width: 48em) {
		.hero_links a > img {
			grid-area: a;
			transform: scale(0.75);
		}
	}
	.hero_links a span {
		text-align: center;
		font-size: var(--type_scale_4);
		margin-bottom: 0.75rem;
		line-height: 1.24;
	}
	@media screen and (max-width: 48em) {
		.hero_links a span {
			grid-area: b;
			margin: 0;
		}
	}
	.hero_links a small {
		text-align: center;
		font-size: calc(var(--type_scale_1) * 0.875);
		font-family: var(--font_primary);
		color: var(--clr_grey_shade_b);
	}
	[data-theme='dark'] .hero_links a small {
		color: var(--clr_grey_shade_c);
	}
	@media screen and (max-width: 48em) {
		.hero_links a small {
			grid-area: c;
		}
	}
</style>
