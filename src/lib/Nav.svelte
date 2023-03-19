<script>
import { page } from '$app/stores'
// import { onMount } from 'svelte'
import { writable } from 'svelte/store'

function toggleLocale(e) {
    e.preventDefault()
    console.log(e)
    // console.log(locales)
}

const mobileNavActive = writable(false)

let isActive

mobileNavActive.subscribe(value => {
    isActive = value
})


function toggleMobileNav() {
    mobileNavActive.update(prevValue => !prevValue)
    if(isActive) {
        document.body.style.overflowY = "hidden"
    } else {
        document.body.style.overflowY = "scroll"
    }
}

</script>

<section class="nav_container">
    <div class="nav_content">
        <a href="/" class="logo_link">
            <img 
            src="/images/masaya-web-dev-logo.svg"
            alt="Logo"
            width="240" height="60"
            />
        </a>
        <nav>
            <p>
            </p>
            <a 
            href="/web-development"
            class={`${$page.url.pathname === "/web-development" ? "link__active" : null}`}
            >Web Development</a>
            <a 
            href="/ui-design"
            class={`${$page.url.pathname === "/ui-design" ? "link__active" : null}`}
            >UI Design</a>
            <a 
            href="/contact"
            class={`${$page.url.pathname === "/contact" ? "link__active" : null}`}
            >Contact</a>
            <a href="https://blog.masayashida.com">
            Blog</a>
            <!-- <button on:click={toggleLocale}>Toggle Language</button> -->
        </nav>
        <button 
        class={`mobile_nav_btn ${isActive ? "close" : null}`}
        on:click={toggleMobileNav}
        aria-label={`${isActive ? "Close" : "Open"} Menu`}
        >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </button>
    </div>
    <div class={`mobile_nav_container ${isActive ? "active" : null}`}>
        <nav class="mobile_nav_drawer">
            <a href="/web-development" on:click={toggleMobileNav}>Web Development</a>
            <a href="/ui-design" on:click={toggleMobileNav}>UI Design</a>
            <a href="/contact" on:click={toggleMobileNav}>Contact</a>
            <a href="https://blog.masayashida.com" on:click={toggleMobileNav}>Blog</a>
        </nav>
        <div class="remaining" on:click={toggleMobileNav}></div>
    </div>
</section>

<style>
.nav_container {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 100%;
    padding: .5rem var(--padding_horizontal_desktop);

    border-bottom: 1px solid #ececec;
}
.nav_content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: min(100%, var(--content_max_width_desktop));

    padding: .5rem var(--padding_horizontal_desktop);
    margin: 0 auto;
}
.mobile_nav_btn {
    display: none;
}
.mobile_nav_container {
    display: none;
}
.logo_link img {
    object-fit: contain;
    max-width: 12.5rem;
    /* outline: 1px solid red; */
}
.nav_content nav a {
    font-size: 1rem;
    font-family: var(--font_primary_semibold);
    text-decoration: none;
    margin-right: 1rem;
    color: var(--clr_primary);
    transition: color 200ms ease-out;
}
.nav_content nav a:hover {
    color: var(--clr_secondary);
}
.nav_content nav a:last-of-type {
    margin-right: 0;
}
.nav_content nav a.link__active {
    color: var(--clr_secondary);
    /* border-bottom: 1px solid var(--clr_secondary); */
}
@media screen and (max-width: 64em) {
    .nav_content {
        padding: .5rem 0;
    }
}
@media screen and (max-width: 48em) {
    .nav_content {
        justify-content: center;
        padding: .5rem var(--padding_horizontal_mobile);
    }
    .mobile_nav_btn {
        display: flex; 
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        position: fixed;
        top: .5rem;
        left: var(--padding_horizontal_mobile);
        width: 3.5rem; max-width: 3.5rem;
        height: 3.5rem; max-height: 3.5rem;
        border-radius: 100%;
        padding: 0.75rem;
        border: none; outline: none;
        background-color: var(--clr_secondary);
        box-shadow: 0 0 3px 1px rgba(0,0,0,.25);
        z-index: 100;
    }
    .mobile_nav_btn:hover, 
    .mobile_nav_btn:focus {
        cursor: pointer;
        filter: brightness(1.125);
    }
    .mobile_nav_btn:active {
        transform: scale(0.95);
    }
    
    .mobile_nav_btn > span {
        display: flex; justify-content: center; align-items: center;
        
        background: #fff;
        width: 1.75rem;
        height: .25rem;
        border-radius: .125rem;
        
        transition: transform 200ms ease-out;
    }
    .mobile_nav_btn.close {
        background-color: rgba(255,255,255,0.125);
        box-shadow: none;
    }
    .mobile_nav_btn.close > span:first-of-type {
        position: absolute;
        transform: rotateZ(45deg);
        top: 1.625rem;
    }
    .mobile_nav_btn.close > span:nth-of-type(2) {
        position: absolute;
        transform: rotateZ(-45deg);
        bottom: 1.625rem;
    }
    .mobile_nav_btn.close > span:last-of-type {
        display: none;
    }

    .nav_content nav {
        display: none;
    }
    .logo_link img {
        margin: 0 auto;
        /* max-width: 10rem; */
    }
    @media screen and (max-width: 48em) {
        .logo_link img {
            max-width: 10rem;
        }
    }

    .mobile_nav_container {
        margin-left: -100vw;
        transition: all 200ms ease-in-out;
    }
    .mobile_nav_container.active {
        margin-left: 0;
        display: flex;
        
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;

        z-index: 10;
    }
    .mobile_nav_drawer {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 60%;
        height: 100vh;

        padding: 5rem 0;

        z-index: 15;
        
        background-color: var(--clr_primary);
        padding: 5rem 0;

        /* outline: 1px solid red; */
    }
    
    .mobile_nav_drawer a {
        padding: 1.5rem calc(var(--padding_horizontal_mobile) * 1.25);
        color: #fff;
        font-size: 1.25rem;
        text-decoration: none;
        width: auto;
        /* width: 80%; */
        border-bottom: 1px solid rgba(255,255,255,.375);
    }
    .mobile_nav_drawer a:hover {
        border-color: #ececec;
    }
    .remaining {
        /* width: 40%; */
        flex-grow: 1;
        background: rgba(0,0,0,.375);
        cursor: pointer;
    }
}


</style>