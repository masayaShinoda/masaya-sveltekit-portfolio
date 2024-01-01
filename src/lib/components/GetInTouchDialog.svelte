<script lang="ts">
	import { browser } from '$app/environment';
	import { slugify } from '$lib/utils/slugify';

	export let showModal: boolean;

	let dialog: HTMLDialogElement;

	$: if (dialog && showModal) {
		dialog.showModal();
		if (browser) document.body.style.overflowY = 'hidden';
	} else {
		if (browser) document.body.style.overflowY = 'auto';
	}

	let services = ['Web development', 'Web design', 'Mobile app design', 'Graphic design'];
</script>

<div class="dialog-wrapper">
	<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
	<dialog
		bind:this={dialog}
		on:close={() => (showModal = false)}
		on:click|self={() => dialog.close()}
		aria-labelledby="get-in-touch-dialog-heading"
		id="get-in-touch-dialog"
	>
		<!-- svelte-ignore a11y-autofocus -->
		<header>
			<h3 id="get-in-touch-dialog-heading">Get a quote</h3>
			<button
				autofocus
				on:click={() => dialog.close()}
				title="Close dialog"
				aria-label="Close dialog"
			>
				<svg
					width="40"
					height="40"
					viewBox="0 0 40 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20.0012 17.6442L28.2507 9.39453L30.6077 11.7515L22.3582 20.0012L30.6077 28.2507L28.2507 30.6077L20.0012 22.3582L11.7515 30.6077L9.39453 28.2507L17.6442 20.0012L9.39453 11.7515L11.7515 9.39453L20.0012 17.6442Z"
						fill="#495057"
					/>
				</svg>
			</button>
		</header>
		<div class="dialog-content">
			<section class="dialog-section dialog-section__service">
				<p>Choose service(s)</p>
				<div class="checkbox-group">
					{#each services as service}
						<label for={`checkbox-${slugify(service)}`}>
							<input type="checkbox" name={`${service}`} id={`checkbox-${slugify(service)}`} />
							{service}
						</label>
					{/each}
				</div>
			</section>
			<section></section>
		</div>
	</dialog>
</div>

<style>
	dialog {
		appearance: none;
		border-radius: 1rem;
		border: none;
		outline: none;
		box-shadow: var(--shadow-md);
		background-color: var(--clr-grey-1);
		width: min(36em, 95%);
		padding: 0;
		/* transition: all 500ms ease-out; */
	}
    [data-theme='dark'] .dialog-wrapper dialog {
        background-color: var(--clr-grey-6);
	    }
	dialog::backdrop {
		background-color: var(--clr-grey-6);
		opacity: 0.75;
	}

	dialog header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.25rem 1.25rem 0 1.25rem;
		margin-bottom: 1rem;
	}
	dialog header h3 {
		color: var(--clr-primary);
	}
	[data-theme="dark"] dialog header h3 {
		color: var(--clr-secondary-shade-b);
	}
	/* close btn */
	dialog header > button {
		appearance: none;
		border: none;
		background: none;
		cursor: pointer;
		border: none;
		border-radius: 0.25rem;
		padding: 0;
		width: 2.5rem;
		height: 2.5rem;
	}
	[data-theme="dark"] dialog header > button svg  path {
		fill: var(--clr-grey-2);
	}
	dialog header > button:hover,
	dialog header > button:focus-visible {
		background-color: var(--clr-grey-2);
	}
	[data-theme="dark"] dialog header > button:hover,
	[data-theme="dark"] dialog header > button:focus-visible {
		background-color: var(--clr-grey-5);
	}
	

	.dialog-content {
		padding: 0 1.25rem 1.25rem 1.25rem;
		color: var(--clr-grey-6);
	}
	.dialog-content .dialog-section p {
        color: var(--clr-grey-5);
		margin-bottom: 0.5rem;
	}
	[data-theme="dark"] .dialog-content p {
		color: var(--clr-grey-2);
	}
	.dialog-section__service {
		margin-bottom: 1.5rem;
	}
	.checkbox-group {
		display: flex;
		flex-wrap: wrap;
		gap: 0 1rem;
	}
	.checkbox-group label {
		color: var(--clr-grey-6);
		display: flex;
		align-items: center;
		margin-bottom: 0.5rem;
		cursor: pointer;
	}
	[data-theme="dark"] .checkbox-group label {
		color: var(--clr-grey-1);
	}
	.checkbox-group input[type='checkbox'] {
		/* appearance: none; */
		width: 1rem;
		height: 1rem;
		margin-right: 0.375rem;
		border: 1px solid var(--clr-grey-4);
		cursor: pointer;
	}
</style>
