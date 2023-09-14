<script lang="ts">
    import CodeMirror from "svelte-codemirror-editor"
    import { javascript } from "@codemirror/lang-javascript"
    import { oneDark } from "@codemirror/theme-one-dark"
    import { espresso } from "thememirror"
    import { themeStore } from "../../stores";
    
    let theme: string
    $: theme = $themeStore
    
    let value = ""

</script>

<div class="codemirror_container">
    <CodeMirror bind:value 
        lang={javascript()}
        theme={
            theme === "dark" ? oneDark : espresso
        }
        tabSize={4}
    />
</div>

<style>
    .codemirror_container {
        background-color: #000;
    }
</style>