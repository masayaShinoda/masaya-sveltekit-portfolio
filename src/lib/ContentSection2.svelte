<script>
    const technologies_icons = [
        {
            categ: "Web Technologies",
            icons: [
                "html-css.svg",
                "js.svg",
                "nextjs.svg",
                "react.svg",
                "svelte.svg",
            ]
        },
        {
            categ: "UI Design",
            icons: [
                "figma.svg",
                "xd.svg",
            ],
        },
        {
            categ: "Graphic Design",
            icons: [
                "ai.svg",
                "ps.svg", 
            ]            
        }
    ]

</script>


<section class="content_section_2_container">
    <div class="content">
        <h4>Skillset</h4>
        <p>I'm constantly learning different technologies and software to complete projects efficiently.</p>

        <div class="technology_icons_container">
        {#each technologies_icons as { categ, icons }}
            <div class="box">
                <h5>{categ}</h5>
                <div>
                    {#each icons as icon}
                        <img src={`/images/${icon}`} alt={icon.slice(0, icon.length - 4)} />
                    {/each}
                </div>
            </div>
        {/each}
        </div>

    </div>
</section>

<style>
.content_section_2_container {
    width: 100%;
    max-width: 100%;
}
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: min(100%, var(--content_max_width_desktop));
    /* padding: 5rem var(--padding_horizontal_desktop); */
    padding: 7.5rem 0;
}
@media screen and (max-width: 48em) {
    .content {
        align-items: flex-start;
        padding: 5rem 0;
    }
}

.content h4 {
    text-align: center;
    color: var(--clr_primary);
    margin-bottom: .75rem;
}
@media screen and (max-width: 48em) {
    .content h4, .content p {
        padding: 0 var(--padding_horizontal_mobile);
    }
    .content h4 {
        text-align: left;
    }
}
.content p {
    color: #333;
    margin-bottom: 1.5rem;
}
.technology_icons_container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 calc(var(--padding_horizontal_mobile) - .5rem);

}
.technology_icons_container .box {
    padding: 1rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--clr_secondary);
    border-radius: .5rem;
    margin: .5rem .5rem;
}
.technology_icons_container .box h5 {
    color: var(--clr_primary);
    margin-bottom: 1rem;
}
.technology_icons_container .box div {
    /* images container */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
}
.technology_icons_container .box img {
    margin: .625rem;
}
@media screen and (max-width: 48em) {
    .technology_icons_container .box {
        max-width: 100%;
        flex-grow: 1;
    }    
    .technology_icons_container .box div {
        justify-content: center;
    }
}


</style>