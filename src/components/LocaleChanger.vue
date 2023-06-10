<template>
  <div class="locale-changer">
    <router-link
      class="text-uppercase text-decoration-none"
      @click="$i18n.locale = LangNotUsed"
      :to="{ name: $route.name, params: { locale: LangNotUsed } }"
    >
      {{ LangNotUsed }}
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "LocaleChanger",
    computed: {
      LangNotUsed() {
        return ["fr", "en"].filter((lang) => lang !== this.$i18n.locale)[0];
      },
    },
    methods: {},
  };
</script>
