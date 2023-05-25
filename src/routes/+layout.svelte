<script>
import { browser } from "$app/environment"

import Nav from "$lib/Nav.svelte" 
// vercel analytics
import { dev } from '$app/environment'
import { inject } from '@vercel/analytics'
 
import { setContext } from "svelte";

inject({ mode: dev ? 'development' : 'production' })

// handle theme-ing
export let theme

if(browser) {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

    function getTheme() {
        // check localStorage for existing theme preference
        const theme = localStorage.getItem('theme')
        // either return the theme if it exists, or return systemTheme
        if(theme) {
            return theme
        } else {
            return systemTheme
        }
    }
    
    theme = getTheme()
    localStorage.setItem("theme", theme)
    setContext("themeContext", theme)

    document.body.dataset.theme = theme
}
</script>

<Nav />
<slot><!-- optional fallback --></slot>