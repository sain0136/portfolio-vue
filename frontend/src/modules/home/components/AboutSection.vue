<script lang="ts">
export default {
  name: "AboutSection",
};
</script>

<script setup lang="ts">
import { useLanguage } from "@/languages/useLanguage";
import GenericButton from "@/components/button/GenericButton.vue";

// Data
const { langTranslations } = useLanguage();
</script>

<template>
  <div class="base-container flex flex-col gap-4 justify-end items-center">
    <div class="format inner-container">
      <div class="content flex justify-between">
        <div class="flex flex-col flex-1 gap-4">
          <span class="text-custom-primary mt-8">{{
            langTranslations.aboutMeHeader
          }}</span>
          <h1 class="about text-near-white">
            {{ langTranslations.aboutMeText }}
          </h1>
          <p>
            {{ langTranslations.aboutMeTextSub }}
          </p>
        </div>
        <div class="contact flex flex-col flex-1 items-end">
          <GenericButton
            class="text-near-white self-center md:self-auto"
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
</template>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";
.about {
  width: 75%;
  font-size: 53px;
  line-height: 74px;
}

.inner-container {
  padding-bottom: 0;
  margin-top: 15%;
}

@media screen and (min-width: $desktopExtraLargeScreen) {
  .inner-container {
    margin-top: 20%;
  }
}

@media screen and (min-width: $desktopScreen) and (max-width: $desktopExtraLargeScreen) {
  .inner-container {
    margin-top: 25%;
  }
}

@media screen and (min-width: $tabletMinScreen) and (max-width: $tabletMaxScreen) {
  .inner-container {
    margin-top: 30%;
  }
  .about {
    width: 100%;
    font-size: 25px;
    line-height: 35px;
  }
}

@media screen and (max-width: $mobileScreen) {
  .inner-container {
    margin-top: 45%;
    .content {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 4rem;
    }
  }
  .about {
    width: 100%;
    font-size: 20px;
    line-height: 30px;
  }
}

@media screen and (max-width: $mobilePhoneScreen) {
  .inner-container {
    margin-top: 60%;
    .content {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 4rem;
    }
  }
  .about {
    width: 100%;
    font-size: 20px;
    line-height: 30px;
  }
}
</style>
