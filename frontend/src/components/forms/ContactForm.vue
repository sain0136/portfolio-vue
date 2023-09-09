<script lang='ts'>
export default {
  name: 'ContactForm',
};
</script>

<script setup lang='ts'>
import { Input } from 'flowbite-vue'
import { useLanguage } from "@/languages/useLanguage";
import { reactive } from 'vue';
import GenericButton from "@/components/button/GenericButton.vue";
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers, minLength } from '@vuelidate/validators'

// Data
const { langTranslations } = useLanguage();

// Validation
const rules = {
  name: { required: helpers.withMessage(langTranslations.value.formContactNameError, required) },
  email: {
    required: helpers.withMessage(langTranslations.value.formContactEmailError, required),
    email: helpers.withMessage(langTranslations.value.formContactEmailErrorInvalid, email)
  },
  message: {
  required: helpers.withMessage(langTranslations.value.formGenericRequiredError, required) ,
  minLength: helpers.withMessage(langTranslations.value.formContactMessageErrorLength, minLength(10))
  },
  subject: { required },
}
const formValues = reactive({
  name: '',
  email: '',
  message: '',
  subject: '',
})
const v$ = useVuelidate(rules, formValues);

// Methods
const handleSubmit = async () => {
  if (!await v$.value.$validate()) return
  console.log('submit');
  alert('Form submitted!');
  console.log(formValues);
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="form-container format " :class="{ error: v$.name.$errors.length }">
    <div class="mb-6 ">
      <label for="name" class="block mb-2 text-sm font-medium ">{{ langTranslations.formContactName }}</label>
      <input type="text" id="name" v-model="formValues.name"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        :placeholder="langTranslations.formContactNamePlaceholder" required>
      <div class="input-errors" v-for="error of v$.name.$errors" :key="error.$uid">
        <span class=" text-danger">{{ error.$message }}</span>
      </div>
    </div>
    <div class="mb-6">
      <label for="email" class="block mb-2 text-sm font-medium ">{{ langTranslations.formContactEmail }}</label>
      <input type="email" id="email" v-model="formValues.email"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        :placeholder="langTranslations.formContactEmailPlaceholder" required>
      <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
        <span class=" text-danger">{{ error.$message }}</span>
      </div>
    </div>
    <div class="mb-6">
      <label for="subject" class="block mb-2 text-sm font-medium ">{{ langTranslations.formContactSubject }}</label>
      <input type="text" id="subject" v-model="formValues.subject"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        :placeholder="langTranslations.formContactSubjectPlaceholder" required>
      <div class="input-errors" v-for="error of v$.subject.$errors" :key="error.$uid">
        <span class=" text-danger">{{ error.$message }}</span>
      </div>
    </div>
    <div class="mb-6">
      <label for="message" class="block mb-2 text-sm font-medium ">{{ langTranslations.formContactMessage }}</label>
      <textarea id="message" rows="4" v-model="formValues.message"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        :placeholder="langTranslations.formContactMessagePlaceholder" required></textarea>
      <div class="input-errors" v-for="error of v$.message.$errors" :key="error.$uid">
        <span class=" text-danger">{{ error.$message }}</span>
      </div>
    </div>
    <GenericButton class="w-full text-near-white" @click="handleSubmit"
      :button-text="langTranslations.formContactSubmit" />
  </form>
</template>

<style lang='scss' scoped></style>