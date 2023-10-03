<template>
  <div
    :class="
      'md:w-screen lg:px-6 px-2 md:px-4 h-full min-h-screen flex flex-col items-start text-white md:overflow-hidden pageview ' +
      $route.name
    "
  >
    <Header class="shrink-0 h-auto" />
    <router-view v-slot="{ Component }">
      <transition
        mode="out-in"
        name="slide"
        :duration="{ enter: 500, leave: 400 }"
      >
        <component :is="Component" :key="$route.path" />
      </transition>
    </router-view>
  </div>
</template>

<script>
  import Header from "./components/Header.vue";
  export default {
    name: "App",
    components: {
      Header,
    },
    watch: {
      $route(to) {
        if (to.name === "introduction") {
          document.body.style.backgroundColor = "#0f0f0f";
        } else if (to.name === "services") {
          document.body.style.backgroundColor = "#0f0f0f";
        } else if (to.name === "portfolio") {
          document.body.style.backgroundColor = "#0f0f0f";
        } else if (to.name === "contact") {
          document.body.style.backgroundColor = "#0f0f0f";
        }
      },
    },
  };
</script>
