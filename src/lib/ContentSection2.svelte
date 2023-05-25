<script>
import { getContext, onMount } from "svelte"

const technologies_icons = [
    {
        categ: "Web Technologies",
        icons: [
            "html-css.svg",
            "javascript.svg",
            "nextjs.svg",
            "react.svg",
            "svelte.svg",
        ]
    },
    {
        categ: "UI Design",
        icons: [
            "figma.svg",
            "adobe-xd.svg",
        ],
    },
    {
        categ: "Graphic Design",
        icons: [
            "adobe-illustrator.svg",
            "adobe-photoshop.svg", 
        ]            
    }
]

// onMount(() => {
//     // react to change in <body> data attribute
//     const body = document.body

//     const observer = new MutationObserver(mutations => {
//       mutations.forEach(record => {
//         if(record.type === 'attributes') {
//           const changedAttrName  = record.attributeName;    
//           const newValue = record.target.getAttribute(changedAttrName);
//           console.log(`Attribute changed! New value for '${changedAttrName}' : ${newValue}`);
//         }
//       });
//     });
    
//     observer.observe(body, {
//       attributes: true
//     });
// })

console.log(getContext("themeContext"))
</script>


<section class="content_section_2_container">
    <div class="content">
        <h3>Skillset</h3>
        <p>I'm constantly learning different technologies and software to complete projects efficiently.</p>
        <div class="technology_icons_container">
        {#each technologies_icons as { categ, icons }}
            <div class="box">
                <h4>{categ}</h4>
                <div>
                    {#each icons as icon}
                        <img 
                            src={`/images/${icon}`} 
                            alt={icon.slice(0, icon.length - 4).replace("-", " ")} 
                            title={icon.slice(0, icon.length - 4).replace("-", " ")}  
                        />
                    {/each}
                </div>
            </div>
        {/each}
        </div>

    </div>
</section>

<style>
@import "./ContentSection2.module.css";
</style>