<script lang="ts">
export default {
  name: "ToolTip",
};
</script>

<script setup lang="ts">
import { ref, defineProps } from "vue";

// Props
const { tooltipId } = defineProps<{
  tooltipId: string;
}>();

// Data
const tooltipVisible = ref(false);

// Methods
const showTooltip = () => {
  tooltipVisible.value = true;
};

const hideTooltip = () => {
  tooltipVisible.value = false;
};
</script>
<template>
  <div class="tooltip-container">
    <div
      :id="tooltipId"
      :class="{ 'opacity-100': tooltipVisible, 'opacity-0': !tooltipVisible }"
      class="tooltip-content"
    >
      <slot name="content"></slot>
    </div>
    <button
      @mouseover="showTooltip"
      @mouseout="hideTooltip"
      :data-tooltip-target="tooltipId"
      data-tooltip-target="tooltip-top"
      data-tooltip-placement="top"
      class="tooltip-trigger mt-2"
    >
      <slot name="trigger" class="mt-2"></slot>
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
