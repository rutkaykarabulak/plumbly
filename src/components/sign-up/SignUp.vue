<script setup lang="ts">
import { ref } from "vue";
import {
  nameValidation,
  emailValidation,
  passwordValidation
} from "@/utils/validations/signUpValidations";
const fullname = ref("");
const email = ref("");
const password = ref("");
const rePassword = ref("");
</script>

<template>
  <main>
    <q-layout>
      <q-page-container>
        <q-page class="text-center content-center">
          <div class="signup q-pa-xl q-mx-md shadow-9">
            <h4 class="col-xs-12 text-h3 text-weight-thin">Plumbly</h4>
            <q-form @submit.prevent class="q-gutter-lg q-pa-sm">
              <div class="row justify-center">
                <q-input
                  name="fullname"
                  class="col-xs-12 col-md-4"
                  label="Full name"
                  v-model="fullname"
                  :rules="nameValidation(fullname)"
                >
                  <template v-slot:prepend> <q-icon name="person"></q-icon> </template
                ></q-input>
              </div>
              <div class="row justify-center">
                <q-input
                  type="email"
                  name="email"
                  class="col-xs-12 col-md-4"
                  label="Email"
                  v-model="email"
                  :rules="emailValidation(email)"
                >
                  <template v-slot:prepend> <q-icon name="mail"></q-icon> </template
                ></q-input>
              </div>
              <div class="row justify-center">
                <q-input
                  type="password"
                  name="password"
                  class="col-xs-12 col-md-4"
                  label="Password"
                  v-model="password"
                  :rules="passwordValidation(password)"
                >
                  <template v-slot:prepend> <q-icon name="key"></q-icon> </template
                ></q-input>
              </div>
              <div v-if="password" class="row justify-center">
                <q-input
                  type="password"
                  name="rePassword"
                  class="col-xs-12 col-md-4"
                  label="Re-enter Password"
                  :rules="[
                    () => rePassword === password || 'Please reenter your password correctly '
                  ]"
                  v-model="rePassword"
                >
                  <template v-slot:prepend> <q-icon name="key"></q-icon> </template
                ></q-input>
              </div>
              <div class="row justify-center col-4">
                <p>
                  <span class="text-weight-bold" style="text-decoration: underline">*</span> By
                  submitting sign-up form, you agree the terms of using plumbly
                </p>
              </div>
              <div class="row justify-center">
                <q-btn
                  label="Submit"
                  type="Submit"
                  class="col-xs-12 col-sm-4 text-capitalize"
                  color="black"
                  rounded
                  to="/signUp/emailCheck"
                >
                </q-btn>
              </div>
            </q-form>
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </main>
</template>

<style scoped>
@media screen and (min-width: 40em) {
  .signup {
    max-width: 960px;
    margin: 0 auto;
  }
}

.signup {
  border: 1px solid rgb(190, 184, 184);
  border-radius: 1em;
  background-color: rgb(224, 228, 230);
}
</style>
