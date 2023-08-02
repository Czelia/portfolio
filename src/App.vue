<template>
  <div
    :class="
      'w-screen px-6 h-screen bg-gradient-to-b flex flex-col items-start overflow-hidden ' +
      $route.name
    "
  >
    <Header class="shrink-0 h-auto" />

    <div class="flex flex-1 items-center h-full">
      <RouterView class="flex-1" />
      <div class="px-5 grid gap-2">
        <router-link class="nav-dots" :to="{ name: 'introduction' }">
        </router-link>
        <router-link class="nav-dots" :to="{ name: 'services' }"> </router-link>
        <router-link class="nav-dots" :to="{ name: 'portfolio' }">
        </router-link>
        <router-link class="nav-dots" :to="{ name: 'contact' }"> </router-link>
      </div>
      <div class="flex-1 self-end">
        <IntroductionIllustration v-if="$route.name === 'introduction'" />
        <ContactIllustration v-if="$route.name === 'contact'" />
        <ServicesIllustration v-if="$route.name === 'services'" />
      </div>
    </div>
  </div>
</template>

<script>
  import IntroductionIllustration from "./components/illustrations/IntroductionIllustration.vue";
  import ServicesIllustration from "./components/illustrations/ServicesIllustration.vue";
  import ContactIllustration from "./components/illustrations/ContactIllustration.vue";
  import Header from "./components/Header.vue";
  export default {
    name: "App",
    components: {
      Header,
      IntroductionIllustration,
      ServicesIllustration,
      ContactIllustration,
    },
  };
</script>
