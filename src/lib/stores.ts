import { writable, type Writable } from "svelte/store";

export const themeStore: Writable<string> = writable('')