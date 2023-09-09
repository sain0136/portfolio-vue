<script lang="ts">
export default {
  name: "HomeFooter",
};
</script>

<script setup lang="ts">
import { useLanguage } from "@/languages/useLanguage";


// Data
const { langTranslations } = useLanguage();
const thisYear = new Date().getFullYear();
// Methods
</script>

<template>
  <footer class=" w-full bg-container-background-color text-center rounded-sm shadow mt-2">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">{{
        "Copyright © " + thisYear + " " + langTranslations.copyright }}
      </span>
    </div>
  </footer>
</template>

<style lang="scss" scoped></style>
