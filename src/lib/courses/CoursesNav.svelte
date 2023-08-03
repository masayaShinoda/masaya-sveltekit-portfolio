<script>
	import ThemeToggler from '$lib/components/ThemeToggler.svelte';
</script>

<section lang="km" class="nav_container">
	<div class="nav_content">
		<a href="/" class="logo_link">
			<img src="/images/maya-logo-icon.svg" alt="Logo" width="60" height="60" />
		</a>
		<div class="nav_links">
			<nav>
				<!-- <a href="#">វគ្គសិក្សា</a>
				<a href="#">អ្នកបង្រៀន</a> -->
			</nav>
			<ThemeToggler />
		</div>
	</div>
</section>

<style>
	@import '$lib/components/Nav.module.css';
</style>
