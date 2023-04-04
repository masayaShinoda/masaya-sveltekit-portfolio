<script>
import { onMount } from "svelte"
import data from "./data.js"
import SvelteMarkdown from 'svelte-markdown'

let tool_logos = data.tool_logos
let web_projects = data.web_projects

onMount(() => {
    let industry_divs = document.querySelectorAll(".webdev_projects_section__body__industry")
    
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(
                entry => {
                    const intersecting = entry.isIntersecting
                    if(!intersecting) {
                        document.querySelector(`a[href='#${entry.target.id}']`).classList.add("btn_main__inactive")
                    } else {
                        document.querySelector(`a[href='#${entry.target.id}']`).classList.remove("btn_main__inactive")
                    }
                }
            )
        },
        {
            threshold: .8,
        }
    )

    industry_divs.forEach(industry => {
        observer.observe(industry)
    })
})
</script>

<svelte:head>
    <title>Masaya Shida | Web Development Portfolio</title>
</svelte:head>
<div class="content_page_container">
    <div class="content">
        <section class="webdev_top_section">
            <div class="webdev_top_section__left">
                <img 
                src="/images/icon-code.svg"
                alt="decorative icon"
                width="100"
                height="75"
                loading="lazy"
                />
                <h1>Web Development</h1>
            </div>
            <div class="webdev_top_section__right">
                <p>
                    I see the web as an important democratizing platform for people around the world to share their ideas and express their entrepreneurial spirit, where anyone with an internet connection can gain access.
                </p>
                <p>
                    I love the web as a powerful and inclusive platform so I have self-taught myself web development to create engaging and user-friendly websites.
                </p>
            </div>
        </section>
        <section class="webdev_projects_section">
            <header class="webdev_projects_section__top">
                <h2>
                    My Projects
                </h2>
                <div class="webdev_projects_section__top__line"></div>
                <nav class="webdev_projects_section__top__btn_group">
                    {#each Array.from(web_projects.map(project => project.industry)).filter((x, i, a) => a.indexOf(x) == i) as industry, index}
                        <a href={`#${encodeURI(industry)}`} class="btn_main btn_main__smaller">
                            {industry}
                        </a>
                    {/each}
                </nav>
            </header>
            <div class="webdev_projects_section__body">   
                <!-- each category of project has its own containing div acting as an anchor -->
                {#each Array.from(web_projects.map(project => project.industry)).filter((x, i, a) => a.indexOf(x) == i) as industry, index}                    
                    <div id={encodeURI(industry)} key={index} class="webdev_projects_section__body__industry">
                        {#each web_projects as project}
                            {#if project.industry === industry}
                                <!-- content here -->
                                <article
                                id={`${project.id}`} 
                                key={project.id}
                                class="webdev_projects_section__body__item"
                                >
                                    <div class="content_half">
                                        <p class="industry">Industry: {industry}</p>
                                        <h3 class="name">{project.name}</h3>
                                        <div class="content_half__content">
                                            <span class="content_half__content__tools">
                                                <h4>Tools</h4>
                                                <div>
                                                {#each Array.from(project.tools.map(tool => (
                                                    tool_logos.filter(i => i.name === tool)))) as tool}
                                                    <img 
                                                    src={`/images/${tool[0].fileName}`} 
                                                    alt={tool[0].name} 
                                                    title={tool[0].name}
                                                    loading="lazy"
                                                    />
                                                {/each}
                                                </div>
                                            </span>
                                        </div>
                                        <div class="content_half__content">
                                            {#if project.overview}
                                                 <!-- content here -->
                                                 <h4>Overview</h4>
                                                 <SvelteMarkdown source={project.overview} />
                                            {/if}
                                        </div>
                                        <div class="content_half__content">
                                            {#if project.responsibilities}
                                                 <!-- content here -->
                                                 <h4>Responsibilities</h4>
                                                 <SvelteMarkdown source={project.responsibilities} />
                                            {/if}
                                        </div>
                                        <a href={project.link} class="btn_main">See Demo →</a>
                                    </div>
                                    <img
                                        alt={`Screenshot of project ${project.name}`}
                                        width="480"
                                        height="360"
                                        src={project.image}
                                        loading="lazy"
                                        style="object-fit: contain; object-position: center;"
                                    >
                                </article>
                            {/if}
                        {/each}

                    </div>
                {:else}
                        <!-- empty list -->
                        <p style="margin: 3.25rem auto; text-align: center;">No items found 🧐</p>
                {/each}
            </div>
        </section>
    </div>
</div>



<style>
    .webdev_top_section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: min(100%, var(--content_max_width_desktop));
        padding: 0 var(--padding_horizontal_desktop);
        margin: 0 auto;
        /* outline: 1px solid green; */
    }
    @media screen and (max-width: 48em) {
        .webdev_top_section {
            align-items: flex-start;
            padding: 0;
        }
    }
    .webdev_top_section__left,
    .webdev_top_section__right {
        display: flex; flex-direction: column; justify-content: center; align-items: center;
    }
    .webdev_top_section__left {
        padding: 4.25rem 0;
        border: 2px solid #ececec;
        border-radius: 1rem;
        width: 42.5%;
        /* outline: 1px solid blue; */
    }
    .webdev_top_section__right {
        width: 57.5%;
    }
    @media screen and (max-width: 64em) {
        .webdev_top_section__left {
            padding: 4.25rem 0;
        }
        .webdev_top_section__right {
            width: 52.5%;
        }
    }
    @media screen and (max-width: 48em) {
        .webdev_top_section {
            flex-direction: column;
        }
        .webdev_top_section__left,
        .webdev_top_section__right {
            width: 100%;
            margin: 0 auto;
        }
        .webdev_top_section__left {
            padding: 2.5rem 0;
            margin-bottom: 1.5rem;
            max-width: min(100%, 28em);
        }
    }
    .webdev_top_section__left > img {
        /* max-width: 5rem; */
        object-fit: contain; object-position: center;
        filter: var(--filter_clr_secondary);
        margin-bottom: 1rem;
    }
    .webdev_top_section__left > h1 {
        font-family: var(--font_primary_semibold);
        font-size: 2rem;
        color: var(--clr_primary);
        text-align: center;
    }
    .webdev_top_section__right p {
        color: #333;
        font-size: 1.125rem;
        line-height: 1.5;
        max-width: min(40ch, 100%);
    }
    .webdev_top_section__right p:not(:last-of-type) {
        margin-bottom: 1.25rem;
    }
    @media screen and (max-width: 64em) {
        .webdev_top_section__left > h1 {
            font-size: var(--type_scale_3);
        }
        .webdev_top_section__right p {
            font-size: 1rem;
        }
    }
    @media screen and (max-width: 48em) {
        .webdev_top_section__left > img {
            max-height: 3.5rem;
            margin-bottom: 1rem;
        }
        .webdev_top_section__left > h1 {
            font-size: 1.75rem;
        }
        .webdev_top_section__right p {
            font-size: 1rem;
        }
    }


    .webdev_projects_section {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: min(100%, var(--content_max_width_desktop));
        padding: 0 var(--padding_horizontal_desktop);
        margin: 3.25rem auto;
        /* outline: 1px solid green; */
    }
    @media screen and (max-width: 48em) {
        .webdev_projects_section {
            padding: 0;
        }
    }
    .webdev_projects_section__top {
        display: flex;
        justify-content: space-between;
        align-items: center;

        position: -webkit-sticky; /* Safari */
        position: sticky;
        top: 0;

        padding: 1.5rem 0;
        background-color: rgba(255,255,255,.92);
        -webkit-backdrop-filter: blur(.325rem);
        backdrop-filter: blur(.325rem);
        /* outline: 1px solid red; */
    }
    @media screen and (max-width: 48em) {
        .webdev_projects_section__top {
            position: static;
            padding: 0;
            margin-bottom: 1rem;
        }
    }

    .webdev_projects_section__top > h2 {
        color: var(--clr_primary);
        font-size: var(--type_scale_3);
    }
    .webdev_projects_section__top__line {
        display: flex;
        flex-grow: 1;
        height: 2px;
        background-color: #ddd;
        margin: 0 1.5rem;
    }
    @media screen and (max-width: 48em) {
        .webdev_projects_section__top__line {
            margin-right: 0;
        }
        .webdev_projects_section__top__btn_group {
            display: none;
        }
    }

    .webdev_projects_section__body {
        margin: 2.5rem 0;
    }
    @media screen and (max-width: 48em) {
        .webdev_projects_section__body {
            margin: .875rem 0;
        }
    }

    .webdev_projects_section__body__industry {
        scroll-margin-top: 5rem;
        scroll-snap-margin-top: 5rem; /* iOS 11 and older */
        
        width: 100%;
        margin-bottom: 1.5rem;        
        /* outline: 1px solid red; */
    }

    .webdev_projects_section__body__item {
        display: flex; 
        justify-content: space-between; 
        /* align-items: flex-start; */
        align-items: center;
        width: 100%; max-width: 100%;      
        margin-bottom: 5rem;
        padding-bottom: 2.5rem;

        scroll-margin-top: 5rem;
        scroll-snap-margin-top: 5rem; /* iOS 11 and older */
        /* debug */
        /* outline: 1px solid red; */
    }
    @media screen and (max-width: 64em) {
        .webdev_projects_section__body__item {
            flex-direction: column-reverse;
            justify-content: flex-start;
            margin-bottom: 5rem;
            padding-bottom: 2.5rem;
        }
    }
    @media screen and (max-width: 48em) {
        .webdev_projects_section__body__item {
            border-bottom: 2px solid #ececec;
            margin-bottom: 1.875rem;
        }
        .webdev_projects_section__body__industry:last-of-type .webdev_projects_section__body__item:last-child {
            border-bottom: none;
        }
    }
    .webdev_projects_section__body__item .content_half {
        max-width: min(45ch, 100%);
        /* outline: 1px solid green; */
    }

    .webdev_projects_section__body__item .name {
        font-size: var(--type_scale_4);
        margin-bottom: .875rem;
    }
    @media screen and (max-width: 64em) {
        .webdev_projects_section__body__item .name {
            font-size: 1.875rem;
        }
    }
    .webdev_projects_section__body__item .industry {
        font-size: var(--type_scale_1);
        color: #666;
        margin-bottom: .5rem;
    }
    .webdev_projects_section__body__item .content_half__content {
        color: #333;
        /* outline: 1px solid red; */
    }
    .webdev_projects_section__body__item .content_half__content:not(:last-of-type) {
        margin-bottom: 1.25rem;
    }
    .webdev_projects_section__body__item .content_half__content:last-of-type {
        margin-bottom: 1.875rem;
    }
    .webdev_projects_section__body__item .content_half__content h4 {
        font-size: 1.25rem;
        margin-bottom: .5rem;
    }
    .content_half__content__tools > div {
        display: flex; justify-content: flex-start; align-items: center;
    }
    .content_half__content__tools img {
        object-fit: contain;
        max-height: 2rem;
    }
    .content_half__content__tools img:not(:last-of-type) {
        margin-right: 1rem;
    }
    
    .webdev_projects_section__body__item > img {
        max-width: 45%;
    }
    @media screen and (max-width: 64em) {
        .webdev_projects_section__body__item > img {
            width: 65%;
            max-width: 65%;
            max-height: 18rem;
            margin-bottom: 2.5rem;
        }
    }
    @media screen and (max-width: 48em) {
        .webdev_projects_section__body__item > img {
            width: 92%;
            max-width: 92%;
            margin-bottom: 1rem;
        }
    }
</style>