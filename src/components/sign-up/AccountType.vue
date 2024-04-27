<script setup lang="ts">
import { ref } from "vue";
import { AccountType } from "@/utils/accountType";
</script>

<template>
  <q-layout>
    <q-page-container>
      <q-page class="q-pa-md text-center justify-center content-center">
        <div class="accountType shadow-9 q-pa-xl q-mx-md">
          <div class="row">
            <h6 class="col-xs-12 text-h6 text-weight-light">Select your account type</h6>
          </div>
          <div class="row justify-center q-gutter-lg">
            <q-btn
              class="text-capitalize q-pa-md"
              label="Householder"
              color="dark"
              :to="'/signUp/identifyUser/' + AccountType.HOUSEHOLDER"
            >
            </q-btn>

            <q-btn
              class="text-capitalize q-pa-md"
              label="Technician"
              color="dark"
              :to="'/signUp/identifyUser/' + AccountType.TECHNICIAN"
            >
            </q-btn>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
@media screen and (min-width: 40em) {
  .accountType {
    max-width: 480px;
    margin: 0 auto;
  }
}

.accountType {
  border: 1px solid rgb(190, 184, 184);
  border-radius: 1em;
  background-color: rgb(224, 228, 230);
}
</style>
@/utils/accountType
