<template>
  <header class="py-3 w-full flex items-center">
    <div class="flex flex-wrap gap-4 items-center">
      <router-link class="flex-auto" :to="{ name: 'introduction' }"
        ><HeaderIllustration
      /></router-link>
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
  import HeaderIllustration from "./illustrations/HeaderIllustration.vue";
  import LocaleChanger from "./LocaleChanger.vue";
  export default {
    name: "Header",
    components: {
      LocaleChanger,
      HeaderIllustration,
    },
  };
</script>
