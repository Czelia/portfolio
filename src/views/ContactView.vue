<template>
  <GeneralPages>
    <template #description>
      <h2 class="opacity-70 uppercase">EMBARK ON A PORTFOLIO ADVENTURE</h2>
      <h1 class="uppercase">A GALLERY OF MY LATEST CREATIONS.</h1>
      <p class="font-serif mt-4">
        Step into a world where UI design and development work their magic.
        <br />
        Interfaces tailored for seamless user experiences. From pixel-perfect
        designs to flawless code,visions become reality with precision anf
        passion.
        <br /><br />

        Where it's a striking website, user-friendly app or a captivating
        digital experience, witness the transformative power of these skills.
        Get ready to be enchanted as we embark on a journey of imagination and
        success.
      </p>
      <button class="button gold">Let's collaborate</button>
    </template>
    <template #illustration>
      <ContactIllustration />
    </template>
  </GeneralPages>
</template>
<script>
  import GeneralPages from "@/templates/GeneralPages.vue";
  import ContactIllustration from "@/components/illustrations/ContactIllustration.vue";

  export default {
    name: "ContactView",
    components: {
      GeneralPages,
      ContactIllustration,
    },
  };
</script>
