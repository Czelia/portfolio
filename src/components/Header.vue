<template>
  <header>
    <router-link :to="{ name: 'introduction' }">Home</router-link>
    <router-link :to="{ name: 'services' }">Services</router-link>
    <router-link :to="{ name: 'portfolio' }">portfolio</router-link>
    <router-link :to="{ name: 'contact' }">contact</router-link>
    <LocaleChanger />
  </header>
</template>
<script>
  import LocaleChanger from "./LocaleChanger.vue";
  export default {
    name: "Header",
    components: {
      LocaleChanger,
    },
  };
</script>
