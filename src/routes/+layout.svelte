<script>
import Nav from "$lib/Nav.svelte" 
// vercel analytics
import { dev } from '$app/environment'
import { inject } from '@vercel/analytics'
 
inject({ mode: dev ? 'development' : 'production' })
</script>

<Nav />
<slot><!-- optional fallback --></slot>
