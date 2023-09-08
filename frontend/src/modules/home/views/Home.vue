<script lang="ts">
export default {
  name: "Home",
};
</script>

<script setup lang="ts">
import { useLanguage } from "@/languages/useLanguage";
import GenericButton from "@/components/button/GenericButton.vue";
import ProfileCard from "@/components/profilecard/ProfileCard.vue";
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
      <GenericButton
        @click="changeLanguage()"
        :button-text="
          languagePref === 'en'
            ? langTranslations.english
            : langTranslations.french
        "
      />
    </div>
    <ProfileCard />
    <div class="base-container flex flex-col gap-4 justify-end items-center">
      <div class="format inner-container">
        <div class="content flex justify-between">
          <div class="flex flex-col flex-1 gap-4">
            <span class="text-custom-primary">{{
              langTranslations.aboutMeHeader
            }}</span>
            <h1 class="about text-near-white">
              {{ langTranslations.aboutMeText }}
            </h1>
            <p>
              {{ langTranslations.aboutMeTextSub }}
            </p>
          </div>
          <div class="flex flex-col flex-1 items-end">
            <GenericButton
              class="text-near-white"
              :button-text="langTranslations.contactMeText"
            />
            <img
              class="rounded-sm border-black"
              src="/images/homepage_image.jpg"
              alt="home image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  width: 75%;
  font-size: 53px;
  line-height: 74px;
}

.inner-container {
  padding-bottom: 0;
  margin-top: 15%;
}
</style>
