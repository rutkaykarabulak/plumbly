<script setup lang="ts">
import { useRoute } from "vue-router";
import IdentifyTechnician from "./IdentifyTechnician.vue";
import IdentifyHouseholder from "./IdentifyHouseholder.vue";
import { AccountType } from "@/utils/accountType";

const professions: Array<String> = [
  "Plumber",
  "Electrician",
  "Gardener",
  "Roofer",
  "Carpenter",
  "Painter",
  "Cleaner",
  "Electronic Expert",
  "Other (specify yourself)"
];
const yearsOfExperiences: Array<String> = ["0-2 years", "2-5 years", "More than 5 years"];
const route = useRoute();
const accountType =
  AccountType[Number(route.params.accountType)] === AccountType[0]
    ? AccountType.HOUSEHOLDER
    : AccountType.TECHNICIAN;
</script>

<template>
  <q-layout>
    <q-page-container>
      <IdentifyTechnician
        v-if="accountType === AccountType.TECHNICIAN"
        :professions="professions"
        :yearsOfExperiences="yearsOfExperiences"
      />
      <IdentifyHouseholder v-else />
    </q-page-container>
  </q-layout>
</template>

<style scoped></style>
@/utils/accountType
