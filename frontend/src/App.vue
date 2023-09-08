<script setup lang="ts">
import { useLanguage } from "@/languages/useLanguage";
const { langTranslations } = useLanguage();
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss" scoped></style>
