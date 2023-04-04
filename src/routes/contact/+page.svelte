<svelte:head>
    <title>Contact | Masaya Shida</title>
</svelte:head>
<div class="contact_page_container">
    <div class="content">
        <section>
            <h2>Contact me</h2>
            <span class="socials_container">
                <!-- <a href="https://www.linkedin.com/in/masaya-shida/">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Linkedin_circle.svg"
                        alt="LinkedIn logo"
                    />
                    LinkedIn
                </a> -->
                <a href="https://github.com/masayaShinoda">
                    <!-- <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                        alt="GitHub logo"
                    /> -->
                    GitHub
                </a>
                <a href="https://t.me/shinoda17">
                    <!-- <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/8/83/Telegram_2019_Logo.svg" 
                        alt="Telegram logo"
                    > -->
                    Telegram
                </a>        
            </span>
        </section>
        <section class="form_section">
            <form
                action="https://formspree.io/f/xrgjzevq"
                method="POST"
            >
                <span>
                    <label for="fname">
                        First name
                        <input type="text" id="fname" name="fname" required><br>
                    </label>
                    <label for="lname">
                        Last name
                        <input type="text" id="lname" name="lname" required><br>
                    </label>
                </span>
                <label>
                    Email
                    <input type="email" name="_replyto" required>
                </label>
                <label>
                    Message:
                    <textarea name="message" wrap="off" required></textarea>
                </label>
                <button type="submit">Send message</button>
            </form>
        </section>

    </div>
</div>


<style>
h2 {
    margin-bottom: 1.5rem;
    color: var(--clr_primary);
}
.contact_page_container {
    width: 100%;
    max-width: 100%;
}
.content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* align-items: center; */
    margin: 0 auto;
    /* width: 100%; */
    width: -moz-fit-content;
    width: fit-content;
    max-width: min(100%, var(--content_max_width_desktop));
    /* padding: 5rem var(--padding_horizontal_desktop); */
    padding: 5rem var(--padding_horizontal_desktop);
}
@media screen and (max-width: 64em) {
    .content {
        margin: 0 auto;
        width: -moz-fit-content;
        width: fit-content;
    }
}
@media screen and (max-width: 48em) {
    .content {
        width: 100%;
        max-width: 100%;
        align-items: flex-start;
        padding: 5rem var(--padding_horizontal_mobile);
    }
}

.socials_container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
}
.socials_container a {
    display: flex;
    align-items: center;
    font-size: 1;
    font-family: var(--font_primary);
    color: var(--clr_secondary);
    text-decoration: none;
    margin-right: 1rem;
    margin-bottom: .5rem;
}
.socials_container a:hover {
    text-decoration: underline;
}
/* .socials_container a img {
    max-width: 1.5rem;
    width: 1.5rem;
    margin-right: .375rem;
    object-fit: contain;
} */
.form_section {
    padding: 1.5rem 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* outline: 1px solid red; */
    width: 30rem;
}
@media screen and (max-width: 48em) {
    .form_section {
        width: 100%;
    }
}
form {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    width: 100%;
    max-width: 100%;
}

form > span {
    display: flex;
}
form > span label:first-of-type {
    padding-right: .5rem;
}
form > span label:last-of-type {
    padding-left: .5rem;
}
@media screen and (max-width: 48em) {
    form > span {
        flex-direction: column;
    }
    form > span label:first-of-type {
        padding-right: 0;
    }
    form > span label:last-of-type {
        padding-left: 0;
    }
}

form label {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    font-family: var(--font_primary);
    color: #333;
    padding: .5rem 0;
    margin-bottom: .5rem;
    font-size: .8rem;
}
form input {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: .75rem .5rem;
    margin-top: .5rem;
    
    outline: none; border: none;
    border: 1px solid rgba(0,0,0,.25);
    border-radius: .125rem;

    font-family: var(--font_primary);
    
}
form textarea {
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none; border: none;
    padding: .5rem .5rem;
    margin-top: .5rem;

    
    border: 1px solid rgba(0,0,0,.25);
    border-radius: .125rem;
    min-height: 7.5rem;

    font-family: var(--font_primary);
}
form input:focus, 
form textarea:focus {
    border-color: var(--clr_secondary);
}

form button {
    border: none; outline: none;
    padding: 1rem 1rem;

    font-size: 1rem;
    font-family: var(--font_primary_semibold);
    background-color: var(--clr_secondary);
    color: #fff;
    border-radius: 100vmax;
    margin: 1rem 0;
}
form button:hover {
    cursor: pointer;
    filter: brightness(1.125);
}
form button:active {
    transform: scale(0.98);
}
</style>