<template>
  <header>
    <router-link :to="{ name: 'introduction' }">Home</router-link>
    <router-link :to="{ name: 'services' }">Services</router-link>
    <router-link :to="{ name: 'portfolio' }">portfolio</router-link>
    <router-link :to="{ name: 'contact' }">contact</router-link>
  </header>
  <RouterView />
</template>

<script>
  export default {
    name: "App",
  };
</script>
