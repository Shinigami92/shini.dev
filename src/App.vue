<template lang="pug">
main
  section
    h1 Hi there 👋, I'm Shinigami aka Shini

    h2 I'm a Frontend Developer working at #[a(href="https://www.adsoul.com/", target="_blank") adSoul GmbH] since May 2019

    ul
      li 🔭 I'm mainly working on #[a(href="https://github.com/prettier/plugin-pug", target="_blank") @prettier/plugin-pug], #[a(href="https://github.com/Shinigami92/eslint-plugin-vue-pug-sfc", target="_blank") eslint-plugin-vue-pug-sfc] and #[a(href="https://github.com/Shinigami92/eslint-define-config", target="_blank") eslint-define-config]
      li ⚡ I'm team member of #[a(href="https://github.com/vitejs/vite", target="_blank") Vite]
      li 🔍 I'm currently helping the Vite, Vue and Pug ecosystems to grow
      li 📬 How to reach me: #[a(href="https://twitter.com/Shini_92", target="_blank") @Shini_92]
      li ☕ If you like my work, you can #[a(href="https://www.paypal.com/donate?hosted_button_id=L7GY729FBKTZY", target="_blank") support me] with a coffee or beer 😀
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    return {};
  }
});
</script>

<style>
* {
  background-color: black;
  color: grey;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
}

a {
  color: lightskyblue;
}
</style>
