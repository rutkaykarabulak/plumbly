<script setup lang="ts">
import { ref, computed, type Ref } from "vue";
import { QInput } from "quasar";
import { requiredFieldValidation } from "@/utils/validations/genericValidations";
const email = ref("");
const password = ref("");

const emailInput: Ref<QInput | null> = ref(null);
const passwordInput: Ref<QInput | null> = ref(null);

const isThereAnyValidationError = computed(() => {
  const areRequiredFieldsEmpty = email.value === "" || password.value === "";
  return emailInput.value?.hasError || passwordInput.value?.hasError || areRequiredFieldsEmpty;
});
</script>

<template>
  <q-layout>
    <q-page-container>
      <q-page class="text-center content-center">
        <div class="login shadow-12 q-pa-xl q-mx-md">
          <h3 class="text-h3 text-weight-thin">Plumbly</h3>
          <q-form @submit.prevent class="q-gutter-lg q-pa-sm">
            <div class="row">
              <q-input
                name="email"
                class="col-xs-12"
                label="Email"
                v-model="email"
                type="email"
                label-color="Your email"
                ref="emailInput"
                :rules="requiredFieldValidation"
              >
                <template v-slot:prepend> <q-icon name="person"></q-icon> </template
              ></q-input>
            </div>
            <div class="row">
              <q-input
                v-model="password"
                type="password"
                name="password"
                class="col-xs-12"
                label="Your password"
                ref="passwordInput"
                :rules="requiredFieldValidation"
              >
                <template v-slot:prepend><q-icon name="key"></q-icon></template>
              </q-input>
            </div>
            <div class="row">
              <q-btn
                label="Login"
                rounded
                type="submit"
                class="col-xs-12 text-capitalize"
                color="black"
                :disable="isThereAnyValidationError"
              >
              </q-btn>
            </div>
          </q-form>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
@media screen and (min-width: 40em) {
  .login {
    margin: 0 auto;
    max-width: 360px;
  }
}

.login {
  background-color: white;
  border: 1px solid rgb(190, 184, 184);
  border-radius: 1em;
}
</style>
