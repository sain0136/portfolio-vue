<script setup lang="ts">
import { useLanguage } from "@/languages/useLanguage";
const { langTranslations } = useLanguage();
</script>

<template>
  <h1 class="text-blue-500 text-4xl text-center">{{ langTranslations.demoText }}</h1>
  <router-view></router-view>
</template>

<style lang="scss" scoped></style>
