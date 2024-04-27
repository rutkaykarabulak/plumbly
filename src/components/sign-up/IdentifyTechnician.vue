<script setup lang="ts">
import { ref, type Ref, computed } from "vue";
import {
  professionValidation,
  yearsOfExperienceValidation
} from "@/utils/validations/identifyUserValidations";
import type { QSelect } from "quasar";
defineProps<{
  professions: Array<String>;
  yearsOfExperiences: Array<String>;
}>();

const profession: Ref<string> = ref("");
const secondProfession = ref(null);
const yearsOfExperience = ref(null);
const otherProfession: Ref<string> = ref("");
const professionSelect: Ref<QSelect | null> = ref(null);
const otherProfessionRef: Ref<QSelect | null> = ref(null);
const yearsOfExperienceRef: Ref<QSelect | null> = ref(null);

const isThereAnyValidationError = computed(() => {
  return (
    professionSelect.value?.hasError ||
    otherProfessionRef.value?.hasError ||
    yearsOfExperienceRef.value?.hasError
  );
});
</script>

<template>
  <q-page class="text-center justify-center content-center">
    <div class="identifyUser q-mx-md q-pa-lg shadow-9">
      <h6 class="text-h6 text-weight-light">Let's start by identifying your profession</h6>
      <q-form @submit.prevent class="q-gutter-lg q-pa-md">
        <div class="row justify-center">
          <q-select
            behavior="menu"
            class="col-xs-12 col-md-4"
            v-model="profession"
            name="profession"
            label="Select your profession"
            :options="professions"
            fill-input
            :disable="otherProfession.length !== 0"
            :rules="professionValidation"
            ref="professionSelect"
          >
            <template v-slot:prepend> <q-icon name="work"></q-icon> </template
          ></q-select>
        </div>
        <div v-if="profession.toLowerCase().includes('other')" class="row justify-center">
          <q-input
            class="col-xs-12 col-md-4"
            v-model="otherProfession"
            name="otherProfession"
            label="Specify your profession"
            rounded
            :rules="professionValidation"
            ref="otherProfessionRef"
          >
          </q-input>
        </div>
        <div class="row justify-center">
          <q-input
            class="col-xs-12 col-md-4"
            v-model="secondProfession"
            name="secondProfession"
            label="Second profession (optional)"
            ><template v-slot:prepend> <q-icon name="construction"></q-icon> </template
          ></q-input>
        </div>
        <div class="row justify-center">
          <q-select
            behavior="menu"
            class="col-xs-12 col-md-4"
            v-model="yearsOfExperience"
            name="yearsOfExperience"
            :options="yearsOfExperiences"
            label="Years of experience"
            hint="How many years of experience you have?"
            :rules="yearsOfExperienceValidation"
            ref="yearsOfExperienceRef"
          >
            <template v-slot:prepend> <q-icon name="engineering"></q-icon> </template
          ></q-select>
        </div>
        <div class="q-gutter-xl q-my-xs">
          <q-btn rounded color="dark" to="/signUp/accountType" label="back" outline></q-btn>
          <q-btn rounded color="dark" label="next" :disable="isThereAnyValidationError"></q-btn>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<style scoped>
@media screen and (min-width: 40em) {
  .identifyUser {
    max-width: 960px;
    margin: 0 auto;
  }
}

.identifyUser {
  background-color: white;
  border: 1px solid rgb(190, 184, 184);
  border-radius: 1em;
}
</style>
