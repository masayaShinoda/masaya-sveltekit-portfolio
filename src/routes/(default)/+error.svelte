<script>
import { page } from '$app/stores';
</script>
  
<svelte:head>
    <title>Error {$page.status}</title>
</svelte:head>
<section class="error_section_container">
    <div class="content">
        <h2>
            🧐 Error
            {$page.status}
        </h2>
        <p>
            {$page.error.message}
        </p>

    </div>
    
</section>
    

<style>
.error_section_container {
    width: 100%;
    max-width: 100%;
}
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    max-width: var(--content_max_width);
    padding: 5rem var(--padding_horizontal);
    text-align: center;
}
.content h2 {
    margin-bottom: 1rem;
}


</style>