<template>
  <div
    class="flex flex-1 lg:flex-row flex-column items-center h-full w-full flex-wrap"
  >
    <div class="md:flex-1 description md:order-1 order-2">
      <slot name="description" />
    </div>
    <Dots class="order-2" />
    <div class="flex-auto self-center illustration order-1 md:order-3">
      <slot name="illustration" />
    </div>
  </div>
</template>
<script>
  import Dots from "@/components/Dots.vue";
  export default {
    name: "GeneralPages",
    components: {
      Dots,
    },
  };
</script>
