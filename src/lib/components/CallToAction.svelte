<div class="call_to_action_container">
	<div class="content">
		<h2 id="contact">Get in Touch</h2>
		<p>Thank you for visiting my page, let's build something together.</p>
		<ul>
			<li>
				<a href="https://github.com/masayaShinoda" class="action_btn">GitHub</a>
			</li>
			<li>
				<a href="https://t.me/shinoda17" class="action_btn">Telegram</a>
			</li>
			<li>
				<a href="mailto:masayashida@gmail.com" class="action_btn">Email</a>
			</li>
		</ul>

		<div style="margin: 1rem 0;">
			<div
				title="Hire me on the Contra platform"
				class="contra-hire-me-button"
				data-analyticsUserId="49a0c6a5-74b8-4b72-8c8f-c2e7f3b1877c"
				data-theme="light"
				data-username="masayashida"
			/>
			<script async src="https://contra.com/static/embed/sdk.js" charset="utf-8"></script>
		</div>
	</div>
</div>

<style>
	.call_to_action_container {
		width: 100%;
		max-width: 100%;
		margin-bottom: 5rem;
	}
	.call_to_action_container .content {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
		width: 100%;
		max-width: var(--content_max_width);
		/* padding: 5rem var(--padding_horizontal); */
		padding: 3.25rem 0;
	}
	@media screen and (max-width: 48em) {
		.call_to_action_container .content {
			padding: 4.25rem 0;
			width: calc(100% - calc(var(--padding_horizontal) * 2));
		}
	}

	.call_to_action_container .content > h2 {
		margin-bottom: 0.75rem;
	}

	.call_to_action_container .content > p {
		font-size: var(--type_scale_1);
		margin-bottom: 1.5rem;
		color: var(--clr_grey_shade_a);
	}
	[data-theme='dark'] .call_to_action_container .content > p {
		color: var(--clr_grey_shade_e);
	}

	.call_to_action_container .content ul {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 1.5rem 0;
	}
	.call_to_action_container .content ul li {
		padding: 0 1rem;
	}
	.call_to_action_container .content ul li:not(:last-of-type)::after {
		content: "●";
		position: relative;
		left: 1rem;
		font-size: .75rem;
		bottom: .125rem;
		opacity: 0.5;
	}
	[data-theme='dark'] .call_to_action_container .content ul li:not(:last-of-type) {
		border-right-color: var(--clr_grey_shade_a);
	}

	.action_btn {
		color: var(--clr_secondary);
		font-size: var(--type_scale_3);
		font-weight: 600;
		padding: 0.125rem 0;
		text-decoration: none;
		text-align: center;
		line-height: 1.4;
	}
	@media screen and (max-width: 48em) {
		.action_btn {
			text-align: center;
			font-size: var(--type_scale_3);
		}
	}
	.action_btn:hover,
	.action_btn:focus {
		text-decoration: underline;
	}
</style>
