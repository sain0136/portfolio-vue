<script lang="ts">
export default {
  name: "ProfileCard",
};
</script>

<script setup lang="ts">
import { useLanguage } from "@/languages/useLanguage";
const { langTranslations, setLanguage, languagePref } = useLanguage();
</script>

<template>
  <section class="z-50 absolute mt-4">
    <div class="profile-card bg-transparent max-w-sm">
      <a href="#" class="flex justify-center">
        <img src="/images/me.jpg" :alt="langTranslations.emptyProfileImage" />
      </a>
      <div class="p-5 flex flex-col items-center">
        <a href="#">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight"
          >
            {{ langTranslations.name }}
          </h5>
        </a>
        <p class="mb-3 font-normal">
          {{ langTranslations.jobTitle }}
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
img {
  border-radius: 50%;
}
</style>
