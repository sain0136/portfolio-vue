<script lang="ts">
export default {
  name: "Home",
};
</script>

<script setup lang="ts">
import { useLanguage } from "@/languages/useLanguage";
import GenericButton from "@/components/button/GenericButton.vue";
const { langTranslations, setLanguage, languagePref } = useLanguage();
// Methods
const changeLanguage = () => {
  const language = languagePref.value === "en" ? "fr" : "en";
  setLanguage(language);
};
</script>
<template>
  <section class="flex justify-center m-5">
    <GenericButton
      @click="changeLanguage()"
      :button-text="
        languagePref === 'en'
          ? langTranslations.english
          : langTranslations.french
      "
    />
  </section>
</template>

<style lang="scss" scoped></style>
