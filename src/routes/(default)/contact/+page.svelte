<svelte:head>
    <title>Contact | Masaya Shida</title>
</svelte:head>
<div class="contact_page_container">
    <div class="content">
        <section>
            <h2>Get in Touch</h2>
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
@import "$lib/contact/ContactPage.module.css";
</style>