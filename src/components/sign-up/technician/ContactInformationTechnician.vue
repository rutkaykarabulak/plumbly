<script setup lang="ts">
import { ref, computed, type Ref } from "vue";
import { requiredFieldValidation } from "@/utils/validations/genericValidations";
import type { QInput } from "quasar";

const phoneNumber = ref("");
const companyPhoneNumber = ref("");
const companyAddress = ref("");

const phoneNumberQInput: Ref<QInput | null> = ref(null);
const companyPhoneQInput: Ref<QInput | null> = ref(null);
const companyAddressQInput: Ref<QInput | null> = ref(null);

const isThereAnyValidationError = computed(() => {
  return (
    phoneNumberQInput.value?.hasError ||
    companyPhoneQInput.value?.hasError ||
    companyAddressQInput.value?.hasError
  );
});
</script>

<template>
  <q-layout>
    <q-page-container>
      <q-page class="text-center justify-center content-center">
        <div class="contactInformation q-mx-md q-pa-lg shadow-9">
          <h6 class="text-h6 text-weight-light q-mb-md q-mt-xs">Create your contact card</h6>
          <p class="text-subtitle1">
            This will help householders to find you and schedule a service
          </p>
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
                ref="phoneNumberQInput"
              >
                <template v-slot:prepend>
                  <q-icon name="call"></q-icon>
                </template>
              </q-input>
              <q-input
                v-model="companyPhoneNumber"
                label="Company phone number"
                type="tel"
                :rules="requiredFieldValidation"
                ref="companyPhoneQInput"
              >
                <template v-slot:prepend> <q-icon name="business"></q-icon> </template
              ></q-input>
              <q-input
                v-model="companyAddress"
                label="Company address"
                :rules="requiredFieldValidation"
                ref="companyAddressQInput"
              >
                <template v-slot:prepend> <q-icon name="book"></q-icon> </template
              ></q-input>
            </div>
            <div class="row items-end q-mt-md">
              <q-btn
                to="/signUp/identifyUser/1"
                rounded
                color="dark"
                class="text-capitalize q-ma-sm"
                >Back</q-btn
              >
              <q-btn
                to="/signUp/success/1"
                rounded
                color="dark"
                class="text-capitalize q-ma-sm"
                :disable="isThereAnyValidationError"
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
  .contactInformation {
    max-width: 720px;
    margin: 0 auto;
  }
}

.contactInformation {
  background-color: white;
  border: 1px solid rgb(190, 184, 184);
  border-radius: 1em;
}
</style>
