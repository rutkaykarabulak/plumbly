<script setup lang="ts">
import { ref } from "vue";
import { requiredFieldValidation } from "@/utils/validations/genericValidations";

const phoneNumber = ref("");
const address = ref("");
</script>

<template>
  <q-layout>
    <q-page-container>
      <q-page class="text-center justify-center content-center">
        <div class="householder q-mx-md q-pa-lg shadow-9">
          <h6 class="h6 text-weight-light q-mb-md q-mt-xs">Create your contact card</h6>
          <p class="text-subtitle1">This will improve your communication with the technicians</p>
          <div class="row items-center justify-center">
            <div class="col-xs-4">
              <div class="column content-center">
                <q-img
                  loading="lazy"
                  alt="Your profile photo"
                  fit="cover"
                  src="@/assets/testImage.png"
                  style="border-radius: 50%; max-width: 100px"
                >
                  image
                </q-img>
                <q-btn class="q-mt-sm" color="dark" rounded size="sm"> Upload photo </q-btn>
              </div>
            </div>
            <div class="col-xs-6">
              <q-input
                v-model="phoneNumber"
                label="Your phone number"
                type="tel"
                :rules="requiredFieldValidation"
              >
                <template v-slot:prepend>
                  <q-icon name="call"></q-icon>
                </template>
              </q-input>
              <q-input v-model="address" label="Your address (optional)">
                <template v-slot:prepend> <q-icon name="book"></q-icon> </template
              ></q-input>
            </div>
            <div class="row items-end q-mt-md">
              <q-btn
                to="/signUp/identifyUser/0"
                rounded
                color="dark"
                class="text-capitalize q-ma-sm"
                >Back</q-btn
              >
              <q-btn to="/signUp/success/0" rounded color="dark" class="text-capitalize q-ma-sm"
                >Next</q-btn
              >
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
@media screen and (min-width: 40em) {
  .householder {
    max-width: 720px;
    margin: 0 auto;
  }
}

.householder {
  background-color: white;
  border: 1px solid rgb(190, 184, 184);
  border-radius: 1em;
}
</style>
