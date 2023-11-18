<div class="footer_wrapper">
	<footer>
		<div>
			<a href="/">masayashida.com</a>
		</div>
	</footer>
</div>

<style>
	.footer_wrapper footer {
		background-color: #fff;
	}
	[data-theme='dark'] .footer_wrapper footer {
		background-color: #000;
	}
	@media screen and (max-width: 48em) {
		.footer_wrapper footer,
		[data-theme='dark'] .footer_wrapper footer {
			background: none;
		}
	}
	footer {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
		min-height: 30vh;
	}
	footer div {
		padding: 1rem 0;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		background-color: var(--clr-primary);
	}
	[data-theme='dark'] footer div {
		background-color: hsl(205, 75%, 5%);
	}
	footer a {
		color: var(--clr-grey-1);
		text-decoration: none;
		font-size: calc(var(--type-scale-1) * 0.8);
		font-weight: 400;
		margin: 0;
	}
</style>
