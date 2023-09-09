<script lang='ts'>
export default {
    name: 'ContactSection',
};
</script>

<script setup lang='ts'>
import { useLanguage } from "@/languages/useLanguage";
import FlowBiteIconGenerator from "@/components/icons-flowbite/FlowBiteIconGenerator.vue";
import ContactForm from "@/components/forms/ContactForm.vue";

// Data
const { langTranslations } = useLanguage();
type iconType = 'github' | 'linkedin' | 'facebook'
type socialMediaLinksType = {
    name: iconType,
    url: string,
    iconComponent: any // TODO: Define this type at a later stage
}
const socialMediaLinks: socialMediaLinksType[] = [
    {
        name: "github",
        url: "https://github.com/sain0136",
        iconComponent: FlowBiteIconGenerator,
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/sebastien-saintrose/",
        iconComponent: FlowBiteIconGenerator,
    },
    {
        name: 'facebook',
        url: 'https://www.facebook.com/sebast.saintrose',
        iconComponent: FlowBiteIconGenerator
    }
]
</script>

<template>
    <section class=" base-container  mt-2 ">
        <div class=" flex justify-center flex-col  m-auto  inner-container">
            <div class=" flex-1">
                <ContactForm />
            </div>
            <div class=" links-container flex-1 flex flex-col items-end ">
                <span class="format self-center">{{ langTranslations.connectWithMe }}</span>
                <div class="socials mt-2 w-full">
                    <ul class=" flex justify-around">
                        <li v-for="link in socialMediaLinks" :key="link.name" class=" decoration-slice">
                            <component :is="link.iconComponent " v-bind="link" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang='scss' scoped>
@import "@/assets/_variables.scss";

.socials {
    margin-top: 10%;
}

@media screen and (min-width: $mobileScreen) {
    .inner-container {
        flex-direction: row;
    }
}

@media screen and (max-width: $tabletMinScreen) {
    .links-container {
        width: 100%;
    }
}
</style>
