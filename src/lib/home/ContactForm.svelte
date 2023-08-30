<div class="contact_page_container">
	<div class="content">
		<section>
			<h3>Get in Touch</h3>
			<span class="socials_container">
				<a href="https://github.com/masayaShinoda">GitHub</a>
				<a href="https://t.me/shinoda17">Telegram</a>
				<a href="mailto:masayashida@gmail.com">Email</a>
			</span>
		</section>
		<section class="form_section">
			<form action="https://formspree.io/f/xrgjzevq" method="POST">
				<span>
					<label for="fname">
						First name
						<input type="text" id="fname" name="fname" required /><br />
					</label>
					<label for="lname">
						Last name
						<input type="text" id="lname" name="lname" required /><br />
					</label>
				</span>
				<label>
					Email
					<input type="email" name="_replyto" required />
				</label>
				<label>
					Message:
					<textarea name="message" wrap="off" required />
				</label>
				<button type="submit">Send message</button>
			</form>
		</section>
	</div>
</div>

<style>
	.contact_page_container {
		width: 100%;
		max-width: 100%;
	}
	.contact_page_container .content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin: 0 auto;
		width: -moz-fit-content;
		width: fit-content;
		max-width: var(--content_max_width);
		padding: 5rem var(--padding_horizontal);
	}
	@media screen and (max-width: 64em) {
		.contact_page_container .content {
			margin: 0 auto;
			width: -moz-fit-content;
			width: fit-content;
		}
	}
	@media screen and (max-width: 48em) {
		.contact_page_container .content {
			width: 80%;
			max-width: 80%;
			align-items: flex-start;
			padding: 5rem var(--padding_horizontal);
		}
	}
	@media screen and (max-width: 32em) {
		.contact_page_container .content {
			width: 100%;
			max-width: 100%;
		}
	}

	.contact_page_container .content h3 {
		font-size: var(--type_scale_4);
		margin-bottom: 1.5rem;
		color: var(--clr_primary);
	}
	[data-theme='dark'] .contact_page_container .content h3 {
		color: #fff;
	}

	.socials_container {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
	}
	.socials_container a {
		display: flex;
		align-items: center;
		font-family: var(--font_primary);
		color: var(--clr_secondary);
		text-decoration: none;
		margin-right: 1rem;
		margin-bottom: 0.5rem;
	}
	[data-theme='dark'] .socials_container a {
		color: var(--clr_secondary_shade_b);
	}
	.socials_container a:hover {
		text-decoration: underline;
	}
	.form_section {
		padding: 1.5rem 0;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 30rem;
	}
	@media screen and (max-width: 48em) {
		.form_section {
			width: 100%;
		}
	}
	.form_section form {
		display: flex;
		flex-direction: column;
		align-items: space-between;
		width: 100%;
		max-width: 100%;
	}

	.form_section form > span {
		display: flex;
	}
	.form_section form > span label:first-of-type {
		padding-right: 0.5rem;
	}
	.form_section form > span label:last-of-type {
		padding-left: 0.5rem;
	}
	@media screen and (max-width: 48em) {
		.form_section form > span {
			flex-direction: column;
		}
		.form_section form > span label:first-of-type {
			padding-right: 0;
		}
		.form_section form > span label:last-of-type {
			padding-left: 0;
		}
	}

	.form_section form label {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 100%;
		font-family: var(--font_primary);
		color: var(--clr_grey_shade_a);
		padding: 0.5rem 0;
		margin-bottom: 0.5rem;
		font-size: 0.875rem;
	}
	[data-theme='dark'] .form_section form label {
		color: var(--clr_grey_shade_e);
	}
	.form_section form input {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		padding: 1rem 0.5rem;
		margin-top: 0.5rem;
		outline: none;
		border-radius: 0.5rem;
		font-family: var(--font_primary);
	}
	.form_section form input,
	.form_section form textarea {
		background-color: var(--clr_grey_shade_f);
		border: 1px solid var(--clr_grey_shade_d);
	}
	[data-theme='dark'] .form_section form input,
	[data-theme='dark'] .form_section form textarea {
		color: #fff;
		background-color: var(--clr_grey_shade_a);
		border-color: var(--clr_grey_shade_b);
	}
	.form_section form textarea {
		display: flex;
		justify-content: center;
		align-items: center;
		outline: none;
		border: none;
		padding: 0.5rem 0.5rem;
		margin-top: 0.5rem;

		border: 1px solid rgba(0, 0, 0, 0.25);
		border-radius: 0.5rem;
		min-height: 7.5rem;

		font-family: var(--font_primary);
	}
	.form_section form input:focus,
	.form_section form textarea:focus {
		border-color: var(--clr_secondary);
	}

	.form_section form button {
		border: none;
		outline: none;
		padding: 1rem 1rem;

		font-size: var(--type_scale_1);
		font-weight: 600;
		background-color: var(--clr_secondary);
		color: #fff;
		border-radius: 100vmax;
		margin: 1rem 0;
	}
	.form_section form button:hover {
		cursor: pointer;
		filter: brightness(1.125);
	}
	.form_section form button:active {
		transform: scale(0.98);
	}
</style>
