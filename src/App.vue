<template>
  <Header />
  <h1 className="text-3xl font-bold underline">Hello world!</h1>
  <RouterView :class="$route.name" />
</template>

<script>
  import Header from "./components/Header.vue";
  export default {
    name: "App",
    components: {
      Header,
    },
  };
</script>
