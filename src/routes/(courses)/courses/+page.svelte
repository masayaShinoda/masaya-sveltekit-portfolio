<script>
	import { goto } from '$app/navigation';
</script>

<div lang="km" class="courses_page_wrapper">
	<p class="coming_soon">មកដល់ឆាប់ៗនេះ</p>
	<!-- <a on:click|preventDefault={() => goto('/')} href="/">← ទៅទំព័រដើម</a> -->
	<a href="/">← ទៅទំព័រដើម</a>
</div>

<style>
	.courses_page_wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 7.5rem auto;
	}
	.coming_soon {
		font-size: 5rem;
		margin: 2.5rem auto;
	}
	@media screen and (max-width: 48em) {
		.coming_soon {
			font-size: 3.5rem;
		}
	}
	a {
		font-size: 1.5rem;
	}
</style>
