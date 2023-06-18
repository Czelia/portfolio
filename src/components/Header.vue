<template>
  <header class="py-3 w-full flex items-center">
    <div class="grid grid-flow-col auto-cols-max gap-4">
      <router-link class="navlinks flex-auto" :to="{ name: 'introduction' }"
        >Home</router-link
      >
      <router-link class="navlinks flex-auto" :to="{ name: 'services' }"
        >Services</router-link
      >
      <router-link class="navlinks flex-auto" :to="{ name: 'portfolio' }"
        >portfolio</router-link
      >
      <router-link class="navlinks flex-auto" :to="{ name: 'contact' }"
        >contact</router-link
      >
    </div>
    <LocaleChanger class="ml-auto navlinks" />
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
