<script lang="ts">
	export let active: boolean;
	export let label: string
</script>

<label class="switch" aria-label={label} title={label}>
	<input type="checkbox" checked={active} on:change />
	<span class="slider round"></span>
	{#if active}
		<div class="switch-icon switch-icon__true">
			<slot name="true_icon" />
		</div>
	{:else}
		<div class="switch-icon switch-icon__false">
			<slot name="false_icon" />
		</div>
	{/if}
</label>

<style>
	.switch {
		position: relative;
		display: inline-block;
		width: 4rem;
		height: 2rem;
		cursor: pointer;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: var(--clr-grey-5);
		box-shadow: var(--shadow-pressed-dark);
		-webkit-transition: all ease-out 150ms;
		transition: all ease-out 150ms;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 1.5rem;
		width: 1.5rem;
		left: 0.3125rem;
		bottom: 0.25rem;
		background: var(--clr-gradient-light);
		-webkit-transition: all ease-out 150ms;
		transition: all ease-out 150ms;
		outline: 1px solid var(--clr-grey-5);
		box-shadow: 0px 4px 8px 0px rgba(33, 36, 41, 0.25);
	}

	input:checked + .slider {
		background: var(--clr-gradient-secondary);
		box-shadow: var(--shadow-pressed-secondary);
	}

	input:focus-visible + .slider {
		box-shadow: 0 0 1px #2196f3;
		outline: 2px solid var(--clr-secondary);
		outline-offset: 0.5rem;
	}

	input:checked + .slider:before {
		outline: 1px solid var(--clr-secondary);
		-webkit-transform: translateX(1.875rem);
		-ms-transform: translateX(1.875rem);
		transform: translateX(1.875rem);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 100vmax;
	}

	.slider.round:before {
		border-radius: 100vmax;
	}

	.switch-icon {
		width: 1rem;
		height: 1rem;
		position: absolute;
		left: 0.5625rem;
		bottom: 0.5rem;
		animation-duration: 250ms;
		animation-name: switch-icon-appear;
		animation-delay: 50ms;
		animation-fill-mode: backwards;
	}

	@keyframes switch-icon-appear {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1
		}
	}
	
	.switch-icon.switch-icon__true {
		left: unset;
		right: 0.5625rem;
	}
</style>
