<script lang="ts">
export default {
  name: "Home",
};
</script>

<script setup lang="ts">
import { useLanguage } from "@/languages/useLanguage";
import GenericButton from "@/components/button/GenericButton.vue";
import ProfileCard from "@/components/profilecard/ProfileCard.vue";
import AboutSection from "@/modules/home/components/AboutSection.vue";
import ContactSection from "../components/ContactSection.vue";

// Data
const { langTranslations, setLanguage, languagePref } = useLanguage();

// Methods
const changeLanguage = () => {
  const language = languagePref.value === "en" ? "fr" : "en";
  setLanguage(language);
};
</script>

<template>
  <section class="main w-full flex flex-col items-center">
    <div class="flex justify-end max-w-screen-xl w-full mt-2">
      <GenericButton @click="changeLanguage()" :button-text="languagePref === 'en'
          ? langTranslations.english
          : langTranslations.french
        " />
    </div>
    <ProfileCard />
    <AboutSection />
    <ContactSection />
  </section>
</template>

<style lang="scss" scoped></style>
