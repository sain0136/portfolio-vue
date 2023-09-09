<script setup lang="ts">
import { useLanguage } from "@/languages/useLanguage";
import HomeFooter from "@/modules/home/components/HomeFooter.vue";
const { langTranslations } = useLanguage();
</script>

<template>
  <router-view></router-view>
  <HomeFooter />
</template>

<style lang="scss" scoped></style>
