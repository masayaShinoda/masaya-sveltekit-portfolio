<div class="call_to_action_container">
    <div class="content">
        <p>Thank you for visiting my page.</p>
        <a href="/contact" class="action_btn">
            Let's build something together →
        </a>
    </div>
</div>
 

<style>
.call_to_action_container {
    width: 100%;
    max-width: 100%;
    margin-bottom: 5rem;
}
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: min(100%, var(--content_max_width_desktop));
    /* padding: 5rem var(--padding_horizontal_desktop); */
    padding: 3.25rem 0;
}
@media screen and (max-width: 48em) {
    .content {
        align-items: flex-start;
        padding: 4.25rem 0;
        width: calc(100% - calc(var(--padding_horizontal_mobile) * 2));
    }
}

.content > p {
    font-size: var(--type_scale_2);
    margin-bottom: 1rem;
    color: #333;
}


.action_btn {
    color: var(--clr_secondary);
    font-size: var(--type_scale_3);
    font-family: var(--font_primary_semibold);
    padding: .125rem 0;
    text-decoration: none;
    text-align: center;
    line-height: 1.4;
}
@media screen and (max-width: 48em) {
    .action_btn {
        text-align: left;
        font-size: var(--type_scale_3);
    }
}
.action_btn:hover,
.action_btn:focus {
    text-decoration: underline;
}


</style>
