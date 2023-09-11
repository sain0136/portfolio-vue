<script lang="ts">
export default {
  name: "SkillsSection",
};
</script>

<script setup lang="ts">
import { useLanguage } from "@/languages/useLanguage";
import { ref, nextTick, onMounted } from "vue";
import FlowBiteIconGenerator from "@/components/icons-flowbite/FlowBiteIconGenerator.vue";
import type { iconType } from "@/utils/types";
import { useProfileCardSkills } from "@/utils/profileCardSkills";
// Data
type directionType = "left" | "right";
const leftArrowIcon: iconType = "leftArrow";
const rightArrowIcon: iconType = "rightArrow";
const galleryRef = ref<null | HTMLElement>(null);
const { langTranslations } = useLanguage();
const disableArrow = ref({
  left: false,
  right: false,
});
const {
  displayedProfileCardSkills,
  changeIndex,
  getIndex,
  getLastGalleryIndex,
} = useProfileCardSkills();

// On mounted
onMounted(() => {
  if (getIndex() === 0) {
    disableArrow.value.left = true;
  }
});

// Methods
const fadeOuElement = (direction: directionType) => {
  nextTick(() => {
    // TODO: Research next tick and why it is needed here
    if (galleryRef.value && direction === "right") {
      const lastElement = galleryRef.value.firstElementChild;
      if (lastElement) {
        lastElement.classList.add("fade-out");
      }
    }
    if (galleryRef.value && direction === "left") {
      const firstElement = galleryRef.value.lastElementChild;
      if (firstElement) {
        firstElement.classList.add("fade-out");
      }
    }
  });
};
const fadeInElement = (direction: directionType) => {
  nextTick(() => {
    if (galleryRef.value && direction === "right") {
      const lastElement = galleryRef.value.lastElementChild;
      if (lastElement) {
        lastElement.classList.remove("fade-out");
        lastElement.classList.add("fade-in");
      }
    }
    if (galleryRef.value && direction === "left") {
      const firstElement = galleryRef.value.firstElementChild;
      if (firstElement) {
        firstElement.classList.remove("fade-out");
        firstElement.classList.add("fade-in");
      }
    }
  });
};
const changeNextCard = (direction: directionType) => {
  fadeOuElement(direction);
  setTimeout(() => {
    changeIndex(direction);
    console.log(getLastGalleryIndex() === getIndex());
    switch (true) {
      case getIndex() === 0:
        disableArrow.value.left = true;
        break;
      case getIndex() > 0:
        disableArrow.value.left = false;
      default:
        disableArrow.value.left = false;
        break;
    }
    switch (true) {
      case getLastGalleryIndex() === getIndex():
        disableArrow.value.right = true;
        break;
      case getLastGalleryIndex() > getIndex():
        disableArrow.value.right = false;
      default:
        disableArrow.value.right = false;
        break;
    }
  }, 1000);
  setTimeout(() => {
    fadeInElement(direction);
  }, 1000);
};
</script>

<template>
  <section class="base-container mt-2">
    <h1 class="text-custom-primary text-center">
      {{ langTranslations.mySkills }}
    </h1>
    <div
      class="inner-container gap-2 h-full flex justify-center items-center m-auto"
    >
      <div
        :class="!disableArrow.left ? 'opa-100' : 'opa-0'"
        class="arrow flex-1 justify-self-start opa-0"
        @click="changeNextCard('left')"
      >
        <FlowBiteIconGenerator :name="leftArrowIcon" />
      </div>
      <div ref="galleryRef" class="gallery flex-2 flex gap-3">
        <div
          v-for="profileCardSkill in displayedProfileCardSkills"
          :key="profileCardSkill.name"
          class="max-w-sm bg-gray-500 border-gray-200 rounded-lg shadow flex flex-col"
        >
          <a href="#" class="flex h-40 p-2">
            <img
              class="w-full rounded-t-lg object-fill"
              :src="profileCardSkill.img"
              alt=""
            />
          </a>
          <div class="p-5 h-40 flex flex-col">
            <h5
              class="flex-1 mb-2 text-2xl font-bold tracking-tight text-custom-primary"
            >
              {{ profileCardSkill.name }}
            </h5>
            <p class="mb-3 flex-1 font-normal text-near-white">
              {{ profileCardSkill.myRelationToSkill }}
            </p>
          </div>
          <div class="h-25 flex items-end p-5">
            <a
              :href="profileCardSkill.url"
              target="_blank"
              class="whitespace-nowrap inline-flex w-1/3 items-center px-3 py-2 text-sm font-medium text-center text-near-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Read more
              <svg
                class="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div
        :class="!disableArrow.right ? 'opa-100' : 'opa-0'"
        class="flex-1 arrow flex justify-end"
        @click="changeNextCard('right')"
      >
        <FlowBiteIconGenerator :name="rightArrowIcon" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding: 2rem 0 2rem 0;
  .opa-0 {
    opacity: 0 !important;
  }
  .opa-100 {
    opacity: 1 !important;
  }
  .arrow {
    cursor: pointer;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }

  .fade-out {
    animation: fadeOut 1s ease-in-out;
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  .fade-in {
    animation: fadeIn 1s ease-in-out;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
</style>
