<footer>
	<div>
		<a href="/">masayashida.com</a>
	</div>
</footer>

<style>
	footer {
		width: 100%;
	}
	footer div {
        padding: .5rem 0;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		background-color: var(--clr_primary);
	}
	[data-theme='dark'] footer div {
		background-color: hsl(205, 75%, 5%);
	}
    footer a {
        color: var(--clr_grey_shade_e);
        text-decoration: none;
        font-size: calc(var(--type_scale_1) * 0.8);
        font-weight: 400;
    }
</style>
