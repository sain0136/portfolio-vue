<script lang="ts">
export default {
  name: "GenericButton",
};
</script>

<script setup lang="ts">
defineProps<{
  buttonText: string;
  tailwindStyles?: string;
}>();
</script>
<template>
  <button
    type="button"
    :class="tailwindStyles"
    class="bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
  >
    {{ buttonText }}
  </button>
</template>

<style lang="scss" scoped></style>
