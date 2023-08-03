<script>
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	onMount(() => {
		if (localStorage.getItem('theme') === 'dark') {
			document.getElementById('toggle_checkbox').checked = true;
		} else {
			document.getElementById('toggle_checkbox').checked = false;
		}
	});
	function toggleTheme(e) {
		if (browser) {
			if (e.target.checked) {
				localStorage.setItem('theme', 'dark');
				document.querySelector('body').dataset.theme = 'dark';
			} else {
				localStorage.setItem('theme', 'light');
				document.querySelector('body').dataset.theme = 'light';
			}
		}
	}
</script>

<div class="theme_toggle">
	<input type="checkbox" id="toggle_checkbox" on:change={toggleTheme} />
	<label for="toggle_checkbox" title="Toggle website theme.">
		<div id="star">
			<div class="star" id="star-1">★</div>
			<div class="star" id="star-2">★</div>
		</div>
		<div id="moon" />
	</label>
</div>

<style>
	.theme_toggle {
		--multiplier: 0.425;
		/* outline: 1px solid red; */
	}
	@media screen and (max-width: 64em) {
		.theme_toggle {
			--multiplier: 0.375;
		}
	}
	@media screen and (max-width: 48em) {
		.theme_toggle {
			--multiplier: 0.425;
		}
	}

	#toggle_checkbox {
		display: none;
	}

	.theme_toggle label {
		display: block;
		width: calc(116px * var(--multiplier));
		height: calc(56px * var(--multiplier));
		/* margin: 0 auto; */
		background-color: var(--clr_secondary);
		border-radius: calc(56px * var(--multiplier));
		transform: translateY(-50%);
		cursor: pointer;
		transition: 0.3s ease background-color;
		overflow: hidden;

		transform: scale(1);
		margin: auto 0 auto 0.875rem;

		/* transform: scale(var(--multiplier)); */
		-webkit-user-select: none; /* Safari */
		-ms-user-select: none; /* IE 10 and IE 11 */
		user-select: none; /* Standard syntax */
	}
	@media screen and (max-width: 64em) {
		.theme_toggle label {
			margin: auto 0 auto 0.75rem;
		}
	}
	@media screen and (max-width: 48em) {
		.theme_toggle label {
			margin: auto 0;
		}
	}

	#star {
		position: absolute;
		top: calc(13px * var(--multiplier));
		left: calc(13px * var(--multiplier));
		width: calc(30px * var(--multiplier));
		height: calc(30px * var(--multiplier));
		background-color: #fafd0f;
		transform: scale(1);
		border-radius: 50%;
		transition: 0.3s ease top, 0.3s ease left, 0.3s ease transform, 0.3s ease background-color;
		z-index: 1;
	}

	#star-1 {
		position: relative;
	}

	#star-2 {
		position: absolute;
		transform: rotateZ(36deg);
	}

	.theme_toggle .star {
		top: 0;
		left: calc(-7px * var(--multiplier));
		font-size: calc(54px * var(--multiplier));
		line-height: calc(28px * var(--multiplier));
		color: #fafd0f;
		transition: 0.3s ease color;
	}

	#moon {
		position: absolute;
		bottom: calc(-52px * var(--multiplier));
		right: calc(8px * var(--multiplier));
		width: calc(40px * var(--multiplier));
		height: calc(40px * var(--multiplier));
		background-color: #fff;
		border-radius: 50%;
		transition: 0.3s ease bottom;
	}

	#moon:before {
		content: '';
		position: absolute;
		top: calc(-12px * var(--multiplier));
		left: calc(-17px * var(--multiplier));
		width: calc(40px * var(--multiplier));
		height: calc(40px * var(--multiplier));
		background-color: #03a9f4;
		border-radius: 50%;
		transition: 0.3s ease background-color;
	}

	#toggle_checkbox:checked + label {
		background-color: var(--clr_grey_shade_a);
	}

	#toggle_checkbox:checked + label #star {
		top: calc(3px * var(--multiplier));
		left: calc(64px * var(--multiplier));
		transform: scale(0.3);
		background-color: yellow;
	}

	#toggle_checkbox:checked + label .star {
		color: yellow;
	}

	#toggle_checkbox:checked + label #moon {
		bottom: calc(8px * var(--multiplier));
	}

	#toggle_checkbox:checked + label #moon:before {
		background-color: var(--clr_grey_shade_a);
	}
</style>
