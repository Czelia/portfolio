<template>
  <GeneralPages>
    <template #description>
      <h2 class="opacity-70 uppercase">MY language of awesome</h2>
      <h1 class="uppercase">Design, Code and Nerdy Things.</h1>
      <p class="font-serif mt-4">
        Welcome to my creative realm 🌟 <br />
        My name is Ceselha and I'm a freelance designer and developer,
        passionate about crafting pixel-perfect designs and seamless digital
        experiences. With a touch of humor and a commitment to excellence, I
        bring your ideas to life through clean code and captivating visuals.
        <br /><br />
        Let's collaborate and create digital magic that will leave a lasting
        impression. Ready to embark on this exciting journey together?
      </p>
      <button class="button aquaJade">Let's collaborate</button>
    </template>
    <template #illustration>
      <IntroductionIllustration />
    </template>
  </GeneralPages>
</template>
<script>
  import GeneralPages from "@/templates/GeneralPages.vue";
  import IntroductionIllustration from "@/components/illustrations/IntroductionIllustration.vue";

  export default {
    name: "IntroductionView",
    components: {
      GeneralPages,
      IntroductionIllustration,
    },
  };
</script>
